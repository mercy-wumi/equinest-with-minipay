import Link from "next/link";
import { PrimaryButton } from "./Button";

interface MobileDashProps {
	isOpen: boolean;
}

const MobileDash: React.FC<MobileDashProps> = ({ isOpen }) => {
	return (
		<div
			className={`transition-all duration-200 ${
				isOpen
					? "fixed mx-auto bg-darkGray bg-opacity-80 inset-x-0 inset-y-0 top-[5.5rem] bottom-0 z-30 h-full overflow-hidden"
					: "hidden"
			}`}
		>
			<div
				className={` bg-lightGray p-5 py-10 flex flex-col gap-4 ${
					isOpen ? "h-full w-[80%]" : "h-0 overflow-hidden"
				}`}
			>
				<ul className="text-white flex flex-col gap-6 text-left">
					<Link href="/dashboard">Dashboard</Link>
					<Link href="/dashboard/save">Save</Link>
					<Link href="/dashboard/invest">Invest</Link>
					<Link href="/dashboard/community">Community</Link>
				</ul>
			</div>
		</div>
	);
};

export default MobileDash;
