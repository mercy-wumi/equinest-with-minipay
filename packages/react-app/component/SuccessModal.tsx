import React from "react";
import success from "../assets/images/successIcon.svg";
import { PrimaryButton } from "./Button";
import Link from "next/link";
import Image from "next/image";

interface SuccessModalProps {
	successText: string;
	buttonText: string;
	link: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
	successText,
	buttonText,
	link,
}) => {
	return (
		<div className="mx-auto bg-white flex flex-col justify-center items-center text-center">
			<div className="flex flex-col gap-4 lg:gap-10 mx-auto items-center justify-center py-14 ">
				<div>
					{success && (
						<Image src={success} alt="equinest Logo" />
					)}
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="text-xl lg:text-3xl text-lightGray font-semibold">
						Bravo!!!
					</h4>
					<p>Congratulations, You've successfully created {successText}</p>
				</div>

				<Link href={link}>
					<PrimaryButton text={buttonText} className="w-full" />
				</Link>
			</div>
		</div>
	);
};

export default SuccessModal;

