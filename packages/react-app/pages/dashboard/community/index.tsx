import CommunityCard from "../../../component/CommunityCard";
import DashHeader from "../../../component/DashHeader";
import stayathomemums from "../../../assets/stayathomemums.svg";
import business from "../../../assets/business.svg";
import working from "../../../assets/working.svg";
import disable from "../../../assets/disable.svg";
import unemployed from "../../../assets/unemployed.svg";
import student from "../../../assets/student.svg";

export const communities = [
  {
    img: stayathomemums,
    title: "Stay At Home Mums",
    subtitle: "Connect with other stay-at-home moms",
  },
  {
    img: unemployed,
    title: "Unemployed",
    subtitle: "Connect with others hoping to get employment",
  },
  {
    img: business,
    title: "Business Women",
    subtitle: "learn about investment opportunities and build your wealth.",
  },
  {
    img: student,
    title: "Students",
    subtitle:
      "Secure a brighter financial future and navigate your student life with confidence.",
  },
  {
    img: disable,
    title: "Disabled Women",
    subtitle:
      "Believe in your abilities and take charge of your financial future.",
  },
  {
    img: working,
    title: "Working Class women",
    subtitle: "learn about investment opportunities and build your wealth.",
  },
];
const Community = () => {
  return (
    <>
      <DashHeader title="Join a community today!" />
      <div className="px-6 md:px-8 xl:px-16 w-fit mx-auto my-12 grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-x-16 gap-y-8 text-primaryBlack">
        {communities.map((comm, index) => (
          <CommunityCard comm={comm} key={index} />
        ))}
      </div>
    </>
  );
};

export default Community;
