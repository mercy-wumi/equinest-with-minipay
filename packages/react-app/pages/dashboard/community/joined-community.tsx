import CommunityCard from "../../../component/CommunityCard";
import DashHeader from "../../../component/DashHeader";
import { communities } from "../community";
import stayhomeComm from "../assets/stayhomeCommunity.svg";

const JoinedCommunity = () => {
  return (
    <>
      <DashHeader title="Join a community today!" />
      <div className="px-6 md:px-8 xl:px-16 my-12 w-full mx-auto flex flex-wrap gap-8 justify-between">
        <div className="grid-cols-1 md:flex-1 xl:flex-[2] grid xl:grid-cols-2 gap-x-16 gap-y-8 text-primaryBlack">
          {communities.map((comm, index) => (
            <CommunityCard comm={comm} key={index} />
          ))}
        </div>
        <div className="bg-lighterGray rounded-md p-4 py-8 md:flex-1 h-fit w-full shadow-xl">
          <p className="font-semibold text-2xl text-center mb-8">
            Joined Communities
          </p>
          {communities.slice(0, 3).map((comm, index) => (
            <div
              className="rounded-xl border-borderJoinedComm border-[1px] flex flex-wrap gap-2 justify-between p-4 mb-4"
              key={index}
            >
              <div className="flex items-center gap-4">
                <img src={stayhomeComm} alt="joined community" />
                <p className="font-semibold text-xs md:text-base">
                  {comm.title}
                </p>
              </div>
              <div className="flex flex-col justify-center items-end">
                <div className="rounded-full w-[20px] h-[20px] bg-primaryYellow text-primaryBlack text-xs font-semibold flex justify-center items-center">
                  5
                </div>
                <span className="text-xs hidden md:block">12:22 PM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinedCommunity;
