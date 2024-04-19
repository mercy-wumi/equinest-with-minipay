import React from "react";
import Image from "next/image";

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
	return (
		<div
			// onClick={() => navigate(`/dashboard/community-rules?name=${comm.title}`)}
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
