import DashHeader from "@/component/DashHeader";
import CommunityCard from "@/component/CommunityCard";
import { useState } from "react";
import palmoil from "../../../assets/palmoil.svg";
import transport from "../../../assets/transport.svg";
import chicken from "../../../assets/chicken.svg";
import house from "../../../assets/house.svg";
import farm from "../../../assets/farm.svg";
import catfish from "../../../assets/catfish.svg";

const communities = [
  {
    img: palmoil,
    title: "Palm oil Investment",
    subtitle: "N30,000 /Unint",
    subtitle2: "25% ROI in 6 months",
    group: "agriculture",
  },
  {
    img: farm,
    title: "Hydro-tech farms",
    subtitle: "N30,000 /Unint",
    subtitle2: "25% ROI in 6 months",
    group: "agriculture",
  },
  {
    img: transport,
    title: "Coaster Bus investment",
    subtitle: "N30,000 /Unint",
    subtitle2: "25% ROI in 6 months",
    group: "transportation",
  },
  {
    img: catfish,
    title: "Catfish investment",
    subtitle: "N30,000 /Unint",
    subtitle2: "25% ROI in 6 months",
    group: "livestock",
  },
  {
    img: house,
    title: "Real estate(bungalow}",
    subtitle: "N30,000 /Unint",
    subtitle2: "25% ROI in 6 months",
    group: "real estate",
  },
  {
    img: chicken,
    title: "Poultry investment",
    subtitle: "N30,000 /Unint",
    subtitle2: "25% ROI in 6 months",
    group: "livestock",
  },
];
const investTabs = [
  "All",
  "Agriculture",
  "Livestock",
  "Transportation",
  "Real Estate",
];

const Invest = () => {
  const [activeTab, setActiveTab] = useState("All");

  const [category, setCategory] = useState(communities);

  const handleCategory = (tab: any) => {
    setActiveTab(tab);

    if (tab === "All") {
      setCategory(communities);
    } else
      setCategory(communities.filter((com) => com.group === tab.toLowerCase()));
  };
  return (
    <>
      <DashHeader />
      <div className="px-6 md:px-8 xl:px-16 my-6 md:my-8 xl:my-12 ">
        <p className="text-center font-semibold text-2xl mb-8">
          There are several investment opportunities available for you at{" "}
          <span className="text-primaryYellow">EquiNest</span>
        </p>
        <div className="flex flex-wrap justify-between mb-8">
          {investTabs.map((tab, index) => (
            <span
              key={index}
              className={`${
                activeTab === tab &&
                "text-primaryYellow underline font-semibold"
              } cursor-pointer`}
              onClick={() => handleCategory(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className=" grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-x-16 gap-y-8 text-primaryBlack">
          {category.map((comm, index) => (
            <CommunityCard comm={comm} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Invest;
