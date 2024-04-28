import { FC, ReactNode } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

interface Props {
	children: ReactNode;
}
const MainLayout: FC<Props> = ({ children }) => {
	return (
		<div className="overflow-hidden flex flex-col min-h-screen">
			<Navbar />
			<div className="">{children}</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
