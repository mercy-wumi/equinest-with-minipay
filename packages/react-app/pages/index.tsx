/* eslint-disable react-hooks/exhaustive-deps */

import { useWeb3 } from "@/contexts/useWeb3";

import MainHero from "../component/MainHero";
import ChooseBetter from "../component/ChooseBetter";
import Products from "../component/Products";
import OurVision from "../component/OurVision";
import OurTarget from "../component/OurTarget";
import OurCustomers from "../component/OurCustomers";
import Subscribe from "../component/Subscribe";
import MainLayout from "@/Layouts/MainLayout";
import { useEffect, useState } from "react";

export default function Home() {
    const {
        address,
        getUserAddress,
        sendCUSD,
        mintMinipayNFT,
        getNFTs,
        signTransaction,
    } = useWeb3();
    const [cUSDLoading, setCUSDLoading] = useState(false);
    const [nftLoading, setNFTLoading] = useState(false);
    const [signingLoading, setSigningLoading] = useState(false);
    const [userOwnedNFTs, setUserOwnedNFTs] = useState<string[]>([]);
    const [tx, setTx] = useState<any>(undefined);

    useEffect(() => {
        getUserAddress();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const tokenURIs = await getNFTs();
            setUserOwnedNFTs(tokenURIs);
        };
        if (address) {
            getData();
        }
    }, [address]);

    async function sendingCUSD() {
        if (address) {
            setSigningLoading(true);
            try {
                const tx = await sendCUSD(address, "0.1");
                setTx(tx);
            } catch (error) {
                console.log(error);
            } finally {
                setSigningLoading(false);
            }
        }
    }

    async function signMessage() {
        setCUSDLoading(true);
        try {
            await signTransaction();
        } catch (error) {
            console.log(error);
        } finally {
            setCUSDLoading(false);
        }
    }

    async function mintNFT() {
        setNFTLoading(true);
        try {
            const tx = await mintMinipayNFT();
            const tokenURIs = await getNFTs();
            setUserOwnedNFTs(tokenURIs);
            setTx(tx);
        } catch (error) {
            console.log(error);
        } finally {
            setNFTLoading(false);
        }
    }

    return (
        <div className="overflow-x-hidden overflow-y-scroll">
			<MainLayout>
				<MainHero />
				<ChooseBetter />
				<Products />
				<OurVision />
				<OurTarget />
				<OurCustomers />
				<Subscribe />
			</MainLayout>
		</div>
    );
}
