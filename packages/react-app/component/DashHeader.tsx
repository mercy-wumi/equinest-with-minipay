import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDash from "./MobileDash";
import { useState, useEffect } from "react";
import { useWeb3 } from "../contexts/useWeb3";

import logo from "../assets/equivestLogo.svg";

interface HeaderProps {
  title?: string;
}

const DashHeader: FC<HeaderProps> = ({ title }) => {
  const { address, getUserAddress } = useWeb3();

  useEffect(() => {
    getUserAddress();
  }, []);

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

  let pathName;

  if (typeof window !== "undefined") {
    pathName = window.location.pathname;
  }

  return (
    <header className="w-full">
      <div className="hidden lg:flex items-center justify-center bg-primaryBlack py-3">
        <Image src={logo} alt="equinest Logo" className="w-1/12" />
      </div>
      <div className="bg-lightGray text-white h-52 lg:h-[15rem] px-4 md:px-8 xl:px-16">
        <nav className="flex justify-between items-center pt-8">
          <div className="flex gap-12">
            <Link href="/">
              <Image src={logo} alt="logo" className="cursor-pointer" />
            </Link>
            <div className="hidden lg:flex items-center gap-x-6 cursor-pointer">
              <Link
                href="/dashboard"
                className={`${
                  pathName === "/dashboard" ? style.menuActive : style.menus
                } }`}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/save"
                className={`${
                  pathName?.includes("/dashboard/save")
                    ? style.menuActive
                    : style.menus
                } }`}
              >
                Save
              </Link>
              <Link
                href="/dashboard/invest"
                className={`${
                  pathName === "/dashboard/invest"
                    ? style.menuActive
                    : style.menus
                } }`}
              >
                Invest
              </Link>
              <Link
                href="/dashboard/community"
                className={`${
                  pathName?.includes("/dashboard/community")
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
        </nav>
        <div className="flex items-center mt-8">
          <p className="font-bold text-2xl lg:text-3xl">{title}</p>
        </div>
        {address ? (
          <p className="py-2">{`${address?.slice(0, 6)}***${address?.slice(
            address.length - 6
          )}`}</p>
        ) : null}
      </div>
    </header>
  );
};

export default DashHeader;
