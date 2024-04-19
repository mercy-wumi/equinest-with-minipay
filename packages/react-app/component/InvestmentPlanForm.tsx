import React, { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import authLogo from "../assets/images/authLogo.svg";
// import { userContext } from "../userContext";
// import { ChangeEventHandler } from "react-hook-form/dist/types";
import { PrimaryButton } from "./Button";

interface FormData {
  thriftTitle: string;
  numberOfParticipants: number;
  savingsAmount: number;
  interestRate: number;
  startDate: string;
  endDate: string;
}

const InvestmentPlanForm: FC = () => {
  // const { loading, setLoading } = useContext(userContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  // const onSubmit: ChangeEventHandler<HTMLFormElement> = async (e:event) => {
  //   e.preventDefault();
  //   // console.log(data);
  //   // try {
  //   //   setLoading(true);
  //   //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   // } catch (error) {
  //   //   console.error("Thrift creation failed", error);
  //   // } finally {
  //   //   setLoading(false);
  //   // }
  // };

  return (
    <section>
      <div className="flex flex-row justify-center items-center w-[50%] mx-auto">
        <form
          action=""
          // onSubmit={handleSubmit(onSubmit)}
          className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl text-center font-semibold">
              Start New Thrift
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="thriftTitle">Thrift title</label>
              <input
                id="thriftTitle"
                type="text"
                className="py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                // name="thriftTitle"
                placeholder="Christmas"
                {...register("thriftTitle", {
                  required: "Thrift title is required",
                })}
              />
              <span className="text-red text-sm">
                {errors.thriftTitle && errors.thriftTitle.message}
              </span>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="numberOfParticipants">
                Number of participants
              </label>
              <input
                id="numberOfParticipants"
                type="number"
                className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                // name="numberOfParticipants"
                placeholder="10"
                {...register("numberOfParticipants", {
                  required: "Number of participants is required",
                })}
              />
              <span className="text-red text-sm">
                {errors.numberOfParticipants &&
                  errors.numberOfParticipants.message}
              </span>
            </div>

            {/* Other input fields */}

            <div className="flex flex-col gap-3 text-center">
              <PrimaryButton
                className={` w-[65%] shadow`}
                // disabled={loading}
                text={"Create Thrift"}
                // text={loading ? "Creating Thrift..." : "Create Thrift"}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InvestmentPlanForm;
