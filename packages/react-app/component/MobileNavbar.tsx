import Link from "next/link";
import { PrimaryButton } from "./Button";

interface MenuItem {
	id: string | number;
	url: string;
	text: string;
}

interface MobileNavbarProps {
	links: MenuItem[];
	isOpen: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ links, isOpen }) => {
	return (
		<div
			className={`transition-all duration-200 ${
				isOpen
					? "fixed mx-auto bg-darkGray bg-opacity-80 inset-x-0 top-[5.5rem] z-30 h-full"
					: "hidden"
			}`}
		>
			<div
				className={`mx-auto bg-lightGray p-5 py-10 flex flex-col gap-4 ${
					isOpen ? "h-[50%]" : "h-0 overflow-hidden"
				}`}
			>
				<ul className="text-white flex flex-col gap-6 text-center">
					{links.map((link) => (
						<li className="" key={link.id}>
							<Link href={link.url}>{link.text}</Link>
						</li>
					))}
				</ul>
				<Link href="/dashboard">
					<PrimaryButton text="Explore" className="w-full"/>
				</Link>
			</div>
		</div>
	);
};

export default MobileNavbar;
