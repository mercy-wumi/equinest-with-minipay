import React, { FC } from "react";
import Image from "next/image";
import ratings from "../assets/images/ratings.svg";
import {
	StaticImageData,
	StaticImport,
} from "next/dist/shared/lib/get-img-props";

interface CardProps {
	icon?: string | StaticImport;
	title?: string;
	subtitle?: string;
	image?: string | StaticImport;
	name?: string;
	comment?: string;
}

export const YellowEquinestCards: FC<CardProps> = ({
	icon,
	title,
	subtitle,
}) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6 text-center p-6 pb-12 bg-primaryYellow rounded-2xl shadow-xl text-black justify-center items-center">
			{icon && <Image src={icon} alt="equinest Logo" className="w-[20%]" />}
			<h6 className="font-medium text-xl">{title}</h6>
			<p className="text-sm">{subtitle}</p>
		</div>
	);
};

export const GrayEquinestCards: FC<CardProps> = ({ icon, title, subtitle }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6 text-center p-6 pb-12 bg-darkGray rounded-2xl shadow-xl text-white justify-center items-center">
			{icon && <Image src={icon} alt="equinest Logo" className="w-[20%]" />}
			<h6 className="font-medium text-xl">{title}</h6>
			<p className="text-sm">{subtitle}</p>
		</div>
	);
};

export const ProductEquinestCards: FC<CardProps> = ({
	icon,
	title,
	subtitle,
}) => {
	return (
		<div className="flex flex-col gap-4 md:gap-8 text-center p-6 text-white justify-center items-center">
			{icon && <Image src={icon} alt="equinest Logo" className="w-[20%]" />}
			<div>
				<h6 className="font-semibold text-xl">{title}</h6>
				<p className="text-sm py-2">{subtitle}</p>
			</div>
		</div>
	);
};

export const CustomerEquinestCards: FC<CardProps> = ({
	image,
	name,
	comment,
}) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6 p-6 px-4 bg-gray rounded-2xl shadow-lg text-darkGray">
			<div className="flex flex-row justify-between items-center">
				<div className="flex flex-row gap-2 items-center">
					{image && (
						<Image src={image} alt="equinest Logo" className="w-[20%]" />
					)}
					<h6 className="font-medium">{name}</h6>
				</div>
				<div className="w-[25%]">
					<Image src={ratings} alt="community Logo" />
				</div>
			</div>
			<p className="text-xs">{comment}</p>
		</div>
	);
};
