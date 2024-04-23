import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../../../component/Button";
import { useRouter } from "next/router";
import { useWeb3 } from "@/contexts/useWeb3";
import DashHeader from "../../../component/DashHeader";

const Withdraw: React.FC = () => {
	const [amountToWithdraw, setAmountToWithdraw] = useState<string>();
	const [signingLoading, setSigningLoading] = useState(false);
	const [tx, setTx] = useState<any>(undefined);

	const router = useRouter();
	const { withdraw, address, getUserAddress } = useWeb3();

	useEffect(() => {
		getUserAddress();
	}, []);

	async function withdrawFunds(e: any) {
		e.preventDefault();
		console.log("getting here");
		if (amountToWithdraw !== undefined)
			if (address) {
				setSigningLoading(true);
				try {
					const tx = await withdraw(amountToWithdraw);
					setTx(tx);
				} catch (error) {
					console.log(error);
				} finally {
					setSigningLoading(false);
				}
			}
	}

	return (
		<>
			<DashHeader />
			<section>
				<div className="flex flex-row justify-center items-center w-[50%] mx-auto">
					<form className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between">
						<div className="flex flex-col gap-2">
							<h3 className="text-3xl text-center font-semibold">
								Withdraw from your savings
							</h3>
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col w-full gap-2">
								<label htmlFor="amountToWithdraw" className="">
									Amount to withraw in ether
								</label>
								<input
									id="amountToWithdraw"
									type="number"
									className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
									name="amountToWithdraw"
									placeholder="0.1"
									value={amountToWithdraw}
									onChange={(e: any) =>
										setAmountToWithdraw(e.target.value)
									}
								/>
							</div>
						</div>

						<div className="flex flex-col gap-3 text-center">
							<button
								className={`rounded-lg gap-2 mx-auto w-[fit-content] py-[0.5rem] px-2 whitespace-nowrap text-base text-darkGray bg-primaryYellow font-semibold mt-2 md:px-5 hover:shadow-md transition-all ease-in cursor-pointer`}
								onClick={(e: any) => withdrawFunds(e)}
							>
								{signingLoading ? "Loading" : "Withdraw"}
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Withdraw;
