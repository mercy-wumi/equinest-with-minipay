import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Community {
  title: string;
  img: string;
  subtitle?: string;
  subtitle2?: string;
}

interface Props {
  comm: Community;
}

const CommunityCard: React.FC<Props> = ({ comm }) => {
  const router = useRouter();

  let pathName: string;

  if (typeof window !== "undefined") {
    pathName = window.location.pathname;
  }

  return (
    <div
      onClick={() =>
        pathName !== "/dashboard/invest" &&
        router.push(`/dashboard/community/terms_and_conditions=${comm.title}`)
      }
      className="cursor-pointer"
    >
      <Image src={comm.img} alt="community Logo" />
      <p className="text-2xl font-bold mt-4">{comm.title}</p>
      <span className="block w-3/4 md:w-full">{comm.subtitle}</span>
      <span className="block">{comm.subtitle2}</span>
    </div>
  );
};

export default CommunityCard;
