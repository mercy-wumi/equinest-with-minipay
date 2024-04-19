import React, { FC, useState } from "react";
import { NextPage } from "next";
import Logo from "../assets/images/navlogo.svg";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "./Button";

interface NavLink {
	id: number;
	url: string;
	text: string;
}

export const links: NavLink[] = [
	{
		id: 1,
		url: "/",
		text: "Home",
	},
	{
		id: 2,
		url: "/about",
		text: "About us",
	},
	{
		id: 3,
		url: "/services",
		text: "Services",
	},
	{
		id: 4,
		url: "/contact",
		text: "Contact us",
	},
];

const Navbar: FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="w-full flex flex-col gap-3 h-full py-4 px-4 md:px-14 lg:px-16 bg-[#464545] sticky top-0 z-20">
			<div className="w-full flex items-center justify-between">
				<div className="w-[15%]">
					<Image src={Logo} alt="community Logo" />
				</div>
				<ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem]">
					{links.map((link) => (
						<li className="group relative" key={link.id}>
							<Link href={link.url}>
								{/* <a
									className={`nav-item text-[#fff] transition duration-300 ease-in text-lg font-medium ${
										location.pathname === link.url
											? "text-primaryYellow"
											: ""
									}`}
								> */}
								{link.text}
								{/* </a> */}
							</Link>
							<div className="absolute w-full left-0 h-0.5 bg-primaryYellow transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
						</li>
					))}
				</ul>
				<div className="flex flex-row gap-6">
					<Link href="/signup">
						<PrimaryButton text="Get Started" />
					</Link>
					<Link href="/login">
						<SecondaryButton text="Log in" />
					</Link>
				</div>

				<div className="flex lg:hidden flex-row gap-10 items-center justify-between">
					{/* <button onClick={handleMenu} className="">
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button> */}
				</div>
			</div>
			{/* {menuOpen && <MobileMenu />} */}
		</div>
	);
};

export default Navbar;
