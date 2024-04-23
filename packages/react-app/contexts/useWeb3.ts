import { useState } from "react";
import StableTokenABI from "./cusd-abi.json";
import MinipayNFTABI from "./minipay-nft.json";
import LockFunds from "./lock-fund.json";

import {
	createPublicClient,
	createWalletClient,
	custom,
	getContract,
	http,
	parseEther,
	stringToHex,
} from "viem";
import { celoAlfajores } from "viem/chains";

const publicClient = createPublicClient({
	chain: celoAlfajores,
	transport: http(),
});

const cUSDTokenAddress = "0xD7E2286E40c0e4755d86a1d75C7094e48bAC56Fd"; // Testnet
const MINIPAY_NFT_CONTRACT = "0xE8F4699baba6C86DA9729b1B0a1DA1Bd4136eFeF"; // Testnet
const LOCK_FUND = "0xc05A19208cEE2dE26bA0BaA375B79682749777ca"; // Testnet

export const useWeb3 = () => {
	const [address, setAddress] = useState<string | null>(null);

	const getUserAddress = async () => {
		if (typeof window !== "undefined" && window.ethereum) {
			let walletClient = createWalletClient({
				transport: custom(window.ethereum),
				chain: celoAlfajores,
			});

			let [address] = await walletClient.getAddresses();
			setAddress(address);
		}
	};

	const sendCUSD = async (to: string, amount: string) => {
		let walletClient = createWalletClient({
			transport: custom(window.ethereum),
			chain: celoAlfajores,
		});

		let [address] = await walletClient.getAddresses();

		const amountInWei = parseEther(amount);

		const tx = await walletClient.writeContract({
			address: cUSDTokenAddress,
			abi: StableTokenABI.abi,
			functionName: "transfer",
			account: address,
			args: [to, amountInWei],
		});

		let receipt = await publicClient.waitForTransactionReceipt({
			hash: tx,
		});

		return receipt;
	};

	const mintMinipayNFT = async () => {
		let walletClient = createWalletClient({
			transport: custom(window.ethereum),
			chain: celoAlfajores,
		});

		let [address] = await walletClient.getAddresses();

		const tx = await walletClient.writeContract({
			address: MINIPAY_NFT_CONTRACT,
			abi: MinipayNFTABI.abi,
			functionName: "safeMint",
			account: address,
			args: [
				address,
				"https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2023/hero-top/products/minipay/minipay__desktop@2x.a17626ddb042.webp",
			],
		});

		const receipt = await publicClient.waitForTransactionReceipt({
			hash: tx,
		});

		return receipt;
	};

	const getNFTs = async () => {
		let walletClient = createWalletClient({
			transport: custom(window.ethereum),
			chain: celoAlfajores,
		});

		const minipayNFTContract = getContract({
			abi: MinipayNFTABI.abi,
			address: MINIPAY_NFT_CONTRACT,
			client: publicClient,
		});

		const [address] = await walletClient.getAddresses();
		const nfts: any = await minipayNFTContract.read.getNFTsByAddress([
			address,
		]);

		let tokenURIs: string[] = [];

		for (let i = 0; i < nfts.length; i++) {
			const tokenURI: string = (await minipayNFTContract.read.tokenURI([
				nfts[i],
			])) as string;
			tokenURIs.push(tokenURI);
		}
		return tokenURIs;
	};

	const signTransaction = async () => {
		let walletClient = createWalletClient({
			transport: custom(window.ethereum),
			chain: celoAlfajores,
		});

		let [address] = await walletClient.getAddresses();

		const res = await walletClient.signMessage({
			account: address,
			message: stringToHex("Hello from Celo Composer MiniPay Template!"),
		});

		return res;
	};

	// implementing lock funds here

	const lock = async (amount: string, unlockTime: bigint) => {
		let walletClient = createWalletClient({
			transport: custom(window.ethereum),
			chain: celoAlfajores,
		});

		let [address] = await walletClient.getAddresses();
		console.log(address);

		const amountInWei = parseEther(amount);
		const valueToSend = parseEther(amount);

		const tx = await walletClient.writeContract({
			address: LOCK_FUND,
			abi: LockFunds.abi,
			functionName: "lockFunds",
			account: address,
			args: [amountInWei, unlockTime],
			value: valueToSend,
		});

		let receipt = await publicClient.waitForTransactionReceipt({
			hash: tx,
		});

		return receipt;
	};

	return {
		address,
		getUserAddress,
		sendCUSD,
		mintMinipayNFT,
		getNFTs,
		signTransaction,
		lock,
	};
};
