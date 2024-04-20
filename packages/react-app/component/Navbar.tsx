import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PrimaryButton } from "./Button";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/navlogo.svg";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

interface NavLink {
	id: number;
	url: string;
	text: string;
}

const links: NavLink[] = [
	{
		id: 1,
		url: "/",
		text: "Home",
	},
	{
		id: 2,
		url: "/",
		text: "About us",
	},
	{
		id: 3,
		url: "/",
		text: "Services",
	},
	{
		id: 4,
		url: "/",
		text: "Contact us",
	},
];

export default function Navbar() {
	// const [hideConnectBtn, setHideConnectBtn] = useState(false);
	// const { connect } = useConnect();

	// useEffect(() => {
	// 	if (window.ethereum && window.ethereum.isMiniPay) {
	// 		setHideConnectBtn(true);
	// 		connect({ connector: injected({ target: "metaMask" }) });
	// 	}
	// }, []);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className="w-full flex flex-col justify-between gap-3 h-full py-4 px-4 lg:py-5 bg-[#464545] sticky top-0 z-20 md:px-14 lg:px-16 border border-b-borderJoinedComm lg:border-none">
			<div className="sm:flex-col relative justify-between items-center">
				<div className="flex items-center justify-between">
					<div>
						<Image
							src={Logo}
							alt="community Logo"
							className="w-2/4 lg:w-full"
						/>
					</div>
					<button className="lg:hidden" onClick={toggleMobileMenu}>
						{/* Conditional rendering of MenuIcon or XIcon based on isOpen state */}
						{isMobileMenuOpen ? (
							<svg
								className="w-6 h-6 text-white cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6 text-white cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>

					<MobileNavbar links={links} isOpen={isMobileMenuOpen} />
					<ul className="hidden lg:flex items-center justify-between gap-5 lg:gap-[3rem] text-white">
						{/* Desktop menu */}
						{links.map((link) => (
							<li className="group relative" key={link.id}>
								<Link href={link.url}>{link.text}</Link>
								<div className="absolute w-full left-0 h-0.5 bg-primaryYellow transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
							</li>
						))}
					</ul>
					<Link href="/dashboard" className="hidden lg:block">
						<PrimaryButton text="Explore" />
					</Link>
				</div>
			</div>
		</div>
	);
}

// 		<Disclosure
// 			as="nav"
// 			className="w-full flex flex-col justify-between gap-3 h-full py-4 px-4 bg-[#464545] sticky top-0 z-20 md:px-14 lg:px-16"
// 		>
// 			{({ open }) => (
// 				<>
// 					{/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> */}
// 					<div className="relative flex h-16 justify-between">
// 						<div className="flex flex-1 items-center lg:justify-around sm:items-stretch sm:justify-start">
// 							<div className="flex flex-shrink-0 items-center">
// 								<Image
// 									src={Logo}
// 									alt="community Logo"
// 									className="w-1/4"
// 								/>
// 							</div>
// 							<ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem] text-white">
// 								{links.map((link) => (
// 									<li className="group relative" key={link.id}>
// 										<Link href={link.url}>
// 											{/* <a
// 									className={`nav-item text-[#fff] transition duration-300 ease-in text-lg font-medium ${
// 										location.pathname === link.url
// 											? "text-primaryYellow"
// 											: ""
// 									}`}
// 								> */}
// 											{link.text}
// 										</Link>
// 										<div className="absolute w-full left-0 h-0.5 bg-primaryYellow transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
// 									</li>
// 								))}
// 							</ul>
// 							<div className="flex flex-row gap-6">
// 								<Link href="/dashboard">
// 									<PrimaryButton text="Explore" />
// 								</Link>
// 							</div>
// 							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// 								{/* Mobile menu button */}
// 								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
// 									<span className="sr-only">Open main menu</span>
// 									{open ? (
// 										<XMarkIcon
// 											className="block h-6 w-6"
// 											aria-hidden="true"
// 										/>
// 									) : (
// 										<Bars3Icon
// 											className="block h-6 w-6"
// 											aria-hidden="true"
// 										/>
// 									)}
// 								</Disclosure.Button>
// 							</div>
// 						</div>
// 						{/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// 								{!hideConnectBtn && (
// 									<ConnectButton
// 										showBalance={{
// 											smallScreen: true,
// 											largeScreen: false,
// 										}}
// 									/>
// 								)}
// 							</div> */}
// 					</div>
// 					{/* </div> */}

// 					<Disclosure.Panel className="sm:hidden">
// 						{/* <ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem] text-white"> */}
// 						{links.map((link) => (
// 							<li className="group relative" key={link.id}>
// 								<Disclosure.Button
// 									as="a"
// 									href={link.url}
// 									className="pl-8 pr-4 text-base font-medium text-white"
// 								>
// 									{link.text}
// 								</Disclosure.Button>
// 							</li>
// 						))}
// 						{/* </ul> */}
// 						{/* <div className="flex flex-row">
// 							<Disclosure.Button
// 								as="a"
// 								href="#"
// 								className="pl-8 pr-4 text-base font-medium text-white"
// 							>
// 								Home
// 							</Disclosure.Button>
// 							{/* Add here your custom menu elements
// 						</div> */}
// 					</Disclosure.Panel>
// 				</>
// 			)}
// 		</Disclosure>
// 	);
// }
