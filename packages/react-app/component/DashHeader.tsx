import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDash from "./MobileDash";
import Logo from "../assets/images/navlogo.svg";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import logo from "../assets/equivestLogo.svg";
import notification from "../assets/notification.svg";
import user from "../assets/user.svg";
import setting from "../assets/setting.svg";
import back from "../assets/back.svg";

interface HeaderProps {
  title?: string;
  backBtn?: boolean;
}

const DashHeader: FC<HeaderProps> = ({ title, backBtn }) => {
  const style = {
    menus:
      "border-[1px] border-white rounded-md px-4 py-2 font-bold hover:bg-primaryYellow hover:text-primaryBlack hover:border-0",
    menuActive:
      "rounded-md px-4 py-2 bg-primaryYellow text-primaryBlack font-bold",
  };
  const [isDashMenuOpen, setIsDashMenuOpen] = useState(false);

  const toggleDashMenu = () => {
    setIsDashMenuOpen(!isDashMenuOpen);
  };

  return (
    <header className="w-full">
      <div className="hidden lg:flex items-center justify-center bg-primaryBlack py-3">
        <Image src={logo} alt="equinest Logo" className="w-1/12" />
      </div>
      <div className="bg-lightGray text-white h-56 px-4 md:px-8 xl:px-16">
        <nav className="flex justify-between items-center pt-8">
          <div className="flex gap-12">
            <Link href="/">
              <Image src={logo} alt="logo" className="cursor-pointer" />
            </Link>
            <div className="hidden lg:flex items-center gap-x-6 cursor-pointer">
              <Link
                href="/dashboard"
                className={`${
                  window.location.pathname === "/dashboard"
                    ? style.menuActive
                    : style.menus
                } }`}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/save"
                className={`${
                  window.location.pathname === "/dashboard/save"
                    ? style.menuActive
                    : style.menus
                } }`}
              >
                Save
              </Link>
              <Link
                href="/dashboard/invest"
                className={`${
                  window.location.pathname === "/dashboard/invest"
                    ? style.menuActive
                    : style.menus
                } }`}
              >
                Invest
              </Link>
              <Link
                href="/dashboard/community"
                className={`${
                  window.location.pathname === "/dashboard/community"
                    ? style.menuActive
                    : style.menus
                } }`}
              >
                Community
              </Link>
            </div>
          </div>
          <button className="lg:hidden" onClick={toggleDashMenu}>
            {isDashMenuOpen ? (
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
          <MobileDash isOpen={isDashMenuOpen} />
          {/* <div className="hidden lg:flex items-center justify-end gap-4">
						<Image src={setting} alt="setting" className="w-[17%] h-auto" />
						<Image
							src={notification}
							alt="notification"
							className="w-[14%] h-auto"
						/>
						<Image src={user} alt="user" />
					</div>
					<Image src={user} alt="user" className="lg:hidden" /> */}
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						{!hideConnectBtn && (
							<ConnectButton
								showBalance={{
									smallScreen: true,
									largeScreen: false,
								}}
							/>
						)}
					</div> */}
        </nav>
        <div className="flex items-center mt-6">
          <p className="font-bold text-3xl ml-4">{title}</p>
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
