import React from "react";
import { ProductEquinestCards } from "./EquinestCards";
// import { homeProducts } from "../data";
import savings from "../assets/images/savings-icon-home.svg";
import community from "../assets/images/community-home.svg";
import savingsTracker from "../assets/images/savings-tracker.svg";
import thrift from "../assets/images/thrift-savings-home.svg";

export const homeProducts = [
  {
    icon: savings,
    title: "General Savings",
    subtitle: "Save your money, get interest and watch your money grow",
  },
  {
    icon: community,
    title: "Community Mgt",
    subtitle: "Connect with women from all works of life",
  },
  {
    icon: savingsTracker,
    title: "Savings Tracker",
    subtitle: "Keep track and watch your money grow",
  },
  {
    icon: thrift,
    title: "Lock Savings",
    subtitle:
      "Lock your money for a specific period of time towards a specific goal",
  },
];
const Products = () => {
  return (
    <section className="p-5 py-12 lg:px-16 lg:py-16 flex flex-col gap-6 lg:gap-12 justify-center items-center text-white text-center bg-lightGray">
      <div className="lg:w-[40%]">
        <h3 className="text-[1.7rem] lg:text-[3.2rem] w-full lg:leading-[4.3rem] font-semibold">
          Our Products
        </h3>
        <p className="py-2">We offer some varieties of products</p>
      </div>
      <div className="grid md:grid-cols-4 gap-x-8 py-6 lg:py-6">
        {homeProducts.map((product, index) => {
          return (
            <ProductEquinestCards
              icon={product.icon}
              title={product.title}
              subtitle={product.subtitle}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
