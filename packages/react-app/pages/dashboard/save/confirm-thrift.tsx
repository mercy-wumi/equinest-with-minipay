import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import authLogo from "../assets/images/authLogo.svg";
import { PrimaryButton } from "../../../component/Button";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { userContext } from "../userContext";
import DashHeader from "../../../component/DashHeader";
import SuccessModal from "../../../component/SuccessModal";

const ConfirmThrift = () => {
  // const location = useLocation();
  // const thriftDetails = location.state;
  // const { loading, setLoading } = useContext(userContext);

  const [successful, setSuccessful] = useState(false);
  const handleThriftSuccess = () => {
    setSuccessful(!successful);
  };
  // const {
  // 	handleSubmit,
  // 	register,
  // 	watch,
  // 	formState: { errors },
  // } = useForm();
  // const onSubmit = async (data, e) => {
  // 	e.preventDefault();
  // 	console.log(data);
  // 	try {
  // 		setLoading(true);
  // 		await new Promise((resolve) => setTimeout(resolve, 2000));
  //         handleThriftSuccess()
  // 	} catch (error) {
  // 		console.error("Thrift creation failed", error);
  // 	} finally {
  // 		setLoading(false);
  // 	}
  // };

  return (
    <>
      <DashHeader />
      {successful ? (
        <SuccessModal
          successText="created a new thrift plan"
          buttonText="Continue"
          link="/dashboard/"
        />
      ) : (
        <section>
          <div className="flex flex-row justify-center items-center w-[50%] mx-auto">
            <form
              action=""
              // onSubmit={handleSubmit(onSubmit)}
              className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
            >
              <div className="flex flex-col text-center gap-2">
                <h3 className="text-3xl  font-semibold">
                  Confirm Thrift Savings
                </h3>
                <p>Kindly confirm the details of your savings</p>
              </div>

              <div className="flex flex-col text-center py-6 rounded gap-2 bg-primaryYellow">
                <h3 className="text-3xl  font-semibold">
                  {/* {thriftDetails.thriftTitle} */}
                </h3>
                <p>Kindly confirm the details of your savings</p>
              </div>
              <p className="font-semibold text-center md:w-[60%] mx-auto">
                {/* N{thriftDetails.savingsAmount} will be deducted from each
							participants account every month for 6 months */}
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="numberOfParticipants" className="">
                    Number of participants
                  </label>
                  <p className="py-2 px-3 lg:py-3 border border-darkGray rounded font-semibold text-lightGray">
                    {/* {thriftDetails.numberOfParticipants} */}
                  </p>
                  {/* <input
								id="numberOfParticipants"
								type="number"
								className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="numberOfParticipants"
								placeholder="10"
								{...register("numberOfParticipants", {
									required: "Number of participants is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.numberOfParticipants &&
									errors.numberOfParticipants.message}
							</span> */}
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="savingsAmount" className="">
                    Savings Amount
                  </label>
                  <p className="py-2 px-3 lg:py-3 border border-darkGray rounded font-semibold text-lightGray">
                    {/* {thriftDetails.savingsAmount} */}
                  </p>
                  {/* <input
								id="savingsAmount"
								type="number"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="savingsAmount"
								placeholder="5000"
								{...register("savingsAmount", {
									required: "Savings amount is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.savingsAmount && errors.savingsAmount.message}
							</span> */}
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="interestRate" className="">
                    Interest rate
                  </label>
                  <p className="py-2 px-3 lg:py-3 border border-darkGray rounded font-semibold text-lightGray">
                    {/* {thriftDetails.interestRate} */}
                  </p>
                  {/* <input
								id="interestRate"
								type="number"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="interestRate"
								placeholder="5% p.a"
								{...register("interestRate", {
									required: "Interest rate is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.interestRate && errors.interestRate.message}
							</span> */}
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="startDate" className="">
                    Start date
                  </label>
                  <p className="py-2 px-3 lg:py-3 border border-darkGray rounded font-semibold text-lightGray">
                    {/* {thriftDetails.startDate} */}
                  </p>
                  {/* <input
								id="startDate"
								type="date"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="startDate"
								placeholder="22/08/2023"
								{...register("startDate", {
									required: "Start date is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.startDate && errors.startDate.message}
							</span> */}
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="endDate" className="">
                    End date
                  </label>
                  <p className="py-2 px-3 lg:py-3 border border-darkGray rounded font-semibold text-lightGray">
                    {/* {thriftDetails.endDate} */}
                  </p>
                  {/* <input
								id="endDate"
								type="date"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="endDate"
								placeholder="21/10/2023"
								{...register("endDate", {
									required: "End date is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.endDate && errors.endDate.message}
							</span> */}
                </div>
                <div className="flex flex-row w-full gap-2">
                  <input
                    id="agreement"
                    type="checkbox"
                    className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                    name="agreement"
                    // {...register("agreement", {
                    // 	required:
                    // 		"Please click on the checkbox to continue",
                    // })}
                  />
                  <label htmlFor="endDate" className="">
                    By clicking proceed you agree to our{" "}
                    <span className="text-primaryYellow">
                      Terms of services
                    </span>
                  </label>
                </div>

                <p className="text-red text-sm ">
                  {/* {errors.agreement && errors.agreement.message} */}
                </p>
              </div>

              <div className="flex flex-col gap-3 text-center">
                <PrimaryButton
                  className={` w-[65%] shadow`}
                  text="Proceed"
                  // disabled={loading}
                  // text={loading ? "Creating Thrift..." : "Proceed"}
                />
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default ConfirmThrift;
