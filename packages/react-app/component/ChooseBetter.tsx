import React from "react";
import { GrayEquinestCards, YellowEquinestCards } from "./EquinestCards";
import firstIcon from "../assets/images/secure-transaction.svg";
import secondIcon from "../assets/images/investment-report.svg";

const ChooseBetter = () => {
  return (
    <section className="p-5 py-12 lg:px-16 lg:py-24 flex flex-col gap-6 lg:gap-8">
      <div className="lg:w-[40%]">
        <h3 className="text-[1.7rem] lg:text-[3.5rem] w-full lg:leading-[4.3rem] font-bold">
          Choose Better with{" "}
          <span className="text-primaryYellow">Equinest</span>
        </h3>
      </div>
      <div className="grid md:grid-cols-4 gap-6 py-6 lg:pt-12 lg:pb-[7rem]">
        <GrayEquinestCards
          icon={firstIcon}
          title="Secure Transaction"
          subtitle="Save your money with us and stand a chance of gaining up to 12% interest rate"
        />
        <YellowEquinestCards
          icon={secondIcon}
          title="Investment Report"
          subtitle="Invest your money into any of our investment plans and stand a chance to cash out big!!!"
        />
        <GrayEquinestCards
          icon={firstIcon}
          title="Customer Centric"
          subtitle="We keep our customers happy and resolves issues quickly"
        />
        <YellowEquinestCards
          icon={secondIcon}
          title="Track Transaction"
          subtitle="We keep our customers happy and resolves issues quickly"
        />
      </div>
    </section>
  );
};

export default ChooseBetter;
