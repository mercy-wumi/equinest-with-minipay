import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../component/Button";
import Link from "next/link";
import { useRouter } from "next/router";
// import { userContext } from "../userContext";

import DashHeader from "../../../component/DashHeader";

const NewThriftForm: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <DashHeader />
      <section>
        <div className="flex flex-row justify-center items-center w-[50%] mx-auto">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl text-center font-semibold">
                Start New Thrift
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="thriftTitle" className="">
                  Thrift title
                </label>
                <input
                  id="thriftTitle"
                  type="text"
                  className="py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="thriftTitle"
                  placeholder="Christmas"
                />
                <span className="text-red text-sm "></span>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="numberOfParticipants" className="">
                  Number of participants
                </label>
                <input
                  id="numberOfParticipants"
                  type="number"
                  className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="numberOfParticipants"
                  placeholder="10"
                />
                <span className="text-red text-sm "></span>
              </div>

              <div className="flex flex-col w-full gap-2">
                <label htmlFor="savingsAmount" className="">
                  Savings Amount
                </label>
                <input
                  id="savingsAmount"
                  type="number"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="savingsAmount"
                  placeholder="5000"
                />
                <span className="text-red text-sm "></span>
              </div>

              <div className="flex flex-col w-full gap-2">
                <label htmlFor="interestRate" className="">
                  Interest rate
                </label>
                <input
                  id="interestRate"
                  type="number"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="interestRate"
                  placeholder="5% p.a"
                />
                <span className="text-red text-sm "></span>
              </div>

              <div className="flex flex-col w-full gap-2">
                <label htmlFor="startDate" className="">
                  Start date
                </label>
                <input
                  id="startDate"
                  type="date"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="startDate"
                  placeholder="22/08/2023"
                />
                <span className="text-red text-sm "></span>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="endDate" className="">
                  End date
                </label>
                <input
                  id="endDate"
                  type="date"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="endDate"
                  placeholder="21/10/2023"
                />
                <span className="text-red text-sm "></span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-center">
              <PrimaryButton className="w-[65%] shadow" text="Create" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewThriftForm;
