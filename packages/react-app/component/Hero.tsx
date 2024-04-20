import React from "react";
import  Link  from "next/link";
import Image from "next/image";
import heroImg from "../assets/images/hero-image.svg";
import { PrimaryButton } from "./Button";

const Hero = () => {
	return (
		<section className="pt-10 px-4 lg:px-0 lg:pt-24 text-center bg-lightGray pb-0 overflow-hidden">
			<div className="flex flex-col gap-6 lg:gap-10 items-center justify-center pt-8 lg:pt-16 font-['Rubik'] lg:px-16 pb-0">
				<div className="flex flex-col gap-4 lg:gap-5 items-center justify-center">
					<h1 className="text-[#fff]  text-[1.7rem] lg:text-6xl w-full lg:w-[75%] lg:leading-[4.5rem] font-semibold">
						Endless Financial Opportunities with{" "}
						<span className="text-primaryYellow">EquiNest</span>
					</h1>
					<p className="text-[#fdfcfd] lg:w-[70%] font-light lg:text-[1.2rem] lg:leading-8 flex flex-col">
						<span>Building Your Financial Fortress...</span>
						<span>
							Your digital access to Secure Your Future with Smart
							Savings and effortless financial
						</span>
						<span>management</span>
					</p>
				</div>
				<div>
					<Image src={heroImg} alt="equinest Logo" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
