import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/footerLogo.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full h-full px-4 py-8 lg:py-10 lg:px-16 bg-[#fff] text-darkGray">
        <div className="flex flex-col lg:flex-nowrap lg:flex-row gap-y-5 gap-x-8 lg:gap-y-0 lg:gap-x-3 lg:justify-between py-3">
          <div className="w-[50%] self-center lg:w-1/4">
            <Image src={Logo} alt="equinest Logo" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-5 ">
            <div>
              <p className="text-md font-semibold">Services</p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-light">
              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Saving Money
              </Link>

              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Investments
              </Link>

              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Financial Communities
              </Link>

              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Getting Loan
              </Link>
              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Financial Advice
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-5">
            <div>
              <p className="text-md font-semibold">About Us</p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-light">
              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Financial Expertise
              </Link>

              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Contact Address
              </Link>

              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                Partners
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-5">
            <div>
              <p className="text-md font-semibold">Contact</p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-light">
              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                +23487690345678
              </Link>

              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                info@equinest.com
              </Link>

              <Link
                href="/"
                className="hover:text-primaryYellow cursor-pointer"
              >
                54 jones close porthacourt
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-2 text-sm lg:text-base text-center">
        <div className="border-[0.3px] w-full lg:mt-10 border-[#d9d9d971]"></div>
        <p className="py-3 lg:py-5 font-light">
          2024 Equinest. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
