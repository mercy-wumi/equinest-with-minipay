import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../component/Button";
import Link from "next/link";
import { useRouter } from "next/router";
// import { userContext } from "../userContext";

import DashHeader from "../../../component/DashHeader";

interface FormData {
  thriftTitle: string;
  numberOfParticipants: number;
  savingsAmount: number;
  interestRate: number;
  startDate: string;
  endDate: string;
}

const SaveLock: React.FC = () => {
  const router = useRouter();
  // const { loading, setLoading } = useContext(userContext);

  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm<FormData>();
  // const onSubmit = async (data: FormData, e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(data);
  //   try {
  //     setLoading(true);
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     router.push("/dashboard/confirm-thrift", { state: data });
  //   } catch (error) {
  //     console.error("Thrift creation failed", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <DashHeader backBtn={true} />
      <section>
        <div className="flex flex-row justify-center items-center w-[50%] mx-auto">
          <form
            action=""
            // onSubmit={handleSubmit(onSubmit)}
            className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl text-center font-semibold">
                Lock Your money towards a specific goal
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="savingsAmount" className="">
                  Savings Lock Amount
                </label>
                <input
                  id="savingsAmount"
                  type="number"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="savingsAmount"
                  placeholder="5000"
                  // {...register("savingsAmount", {
                  // 	required: "Savings amount is required",
                  // })}
                />
                <span className="text-red text-sm ">
                  {/* {errors.savingsAmount &&
										errors.savingsAmount.message} */}
                </span>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="endDate" className="">
                  Unlock date
                </label>
                <input
                  id="endDate"
                  type="date"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="endDate"
                  placeholder="21/10/2023"
                  // {...register("endDate", {
                  // 	required: "End date is required",
                  // })}
                />
                <span className="text-red text-sm ">
                  {/* {errors.endDate && errors.endDate.message} */}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-center">
              <PrimaryButton
                className={` w-[65%] shadow`}
                text="Create"
                // disabled={loading}
                // text={loading ? "Creating Thrift..." : "Create Thrift"}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SaveLock;
