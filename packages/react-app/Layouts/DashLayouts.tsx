import { FC, ReactNode } from "react";
import DashHeader from "../pages/dashboard/DashHeader";

interface Props {
  children: ReactNode;
}
const DashLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="overflow-hidden flex flex-col min-h-screen">
        <DashHeader />
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default DashLayout;
