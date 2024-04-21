import React from "react";
import Image from "next/image";
import mastercard from "../assets/mastercard.svg";
import Link from "next/link";

interface Card {
	name: string;
	amount: string;
	btn?: boolean;
	profit_loss?: boolean;
}

interface Props {
	card: Card;
}

const DashCards: React.FC<Props> = ({ card }) => {
	const style = {
		btn: "bg-primaryBlack px-2 md:px-4 py-2 text-white rounded-md font-semibold",
	};

	return (
		<div
			className="bg-white rounded-2xl flex flex-col gap-4 p-4 py-6 md:p-8 shadow-2xl"
		>
			<div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0 lg:items-center">
				<span className="text-xl font-semibold">{card.name}</span>
				<div className="flex gap-4 items-center">
					<Image src={mastercard} alt="equinest Logo" />
					<span>*****87654</span>
				</div>
			</div>
			<p className="text-3xl font-bold">{card.amount}</p>
			{card.btn && (
				<div className="flex gap-4">
					<button className={style.btn}>Deposit</button>
					<button className={style.btn}><Link href="/dashboard/invest">Invest</Link></button>
					<button className={style.btn}>Send</button>
				</div>
			)}
			{card.profit_loss && (
				<p>
					<span className="text-green">+2% </span>from last week
				</p>
			)}
		</div>
	);
};

export default DashCards;
