import DashHeader from "../DashHeader";
import { PrimaryButton } from "../../../component/Button";
// import { Link, useSearchParams } from "next/link";
import Link from "next/link";

const CommunityRules = () => {
  // const [searchParams] = useSearchParams();
  // const name = searchParams.get("name");
  return (
    <>
      <DashHeader title={`Community`} />
      <div className="px-16 my-8 flex flex-col w-fit mx-auto text-lg">
        <div>
          <p className="font-bold text-2xl mt-8 mb-2">
            Community roles and regulations
          </p>
          <span>
            Make sure you read and understand the rule and regulations before
            you continue
          </span>
        </div>
        <ul>
          <p className="font-bold text-2xl mt-8 mb-2">General:</p>
          <li className="list-disc">
            Be respectful: Treat all community members with courtesy and
            respect, regardless of their opinions, backgrounds, or experiences.
          </li>
          <li className="list-disc">
            No negativity: Avoid negativity, including insults, hate speech,
            bullying, or discriminatory language.
          </li>
          <li className="list-disc">
            Maintain privacy: Do not share personal information about yourself
            or other members without their consent.
          </li>
          <li className="list-disc">
            No advertising: Avoid self-promotion, spam, or commercial
            advertising without prior approval.
          </li>
          <li className="list-disc">
            Stay on topic: Focus discussions on relevant topics related to the
            stay-at-home mum experience.
          </li>
          <li className="list-disc">
            Respect intellectual property: Do not share copyrighted material
            without proper attribution.
          </li>
        </ul>

        <ul>
          <p className="font-bold text-2xl mt-8 mb-2">Content:</p>
          <li className="list-disc">
            No unsolicited advice: Offer advice only when requested or relevant
            to the discussion.
          </li>
          <li className="list-disc">
            Respect different parenting styles: Avoid judging or criticizing
            other members' parenting choices.
          </li>
          <li className="list-disc">
            Focus on solutions: If raising a problem, suggest solutions or
            positive alternatives.
          </li>
          <li className="list-disc">
            Be mindful of triggers: Avoid sensitive topics that may trigger
            emotional responses in others.
          </li>
          <li className="list-disc">
            Verify information: Be cautious about sharing unverified information
            or rumors.
          </li>
        </ul>

        <ul>
          <p className="font-bold text-2xl mt-8 mb-2">Moderation:</p>
          <li className="list-disc">
            Report violations: If you see any violation of the rules, report it
            to the moderators immediately
          </li>
          <li className="list-disc">
            Moderators' discretion: Moderators have the final say in enforcing
            the rules and resolving disputes
          </li>
          <li className="list-disc">
            Banning: Repeated violations may result in temporary or permanent
            banning from the community
          </li>
        </ul>

        <ul>
          <p className="font-bold text-2xl mt-8 mb-2">Additional Rules:</p>
          <li className="list-disc">
            Limit self-promotion: While sharing personal successes is
            encouraged, avoid excessive self-promotion or bragging
          </li>
          <li className="list-disc">
            Respect privacy: Avoid posting identifying information about your
            children or family members without their consent
          </li>
          <li className="list-disc">
            Maintain confidentiality: Do not share private conversations or
            information shared outside of the community
          </li>
          <li className="list-disc">
            Be mindful of posting frequency: Avoid flooding the community with
            excessive posts
          </li>
          <li className="list-disc">
            Use appropriate language: Avoid using offensive or vulgar language
          </li>
          <li className="list-disc">
            No solicitation: Do not solicit money, donations, or personal favors
          </li>
        </ul>

        <ul>
          <p className="font-bold text-2xl mt-8 mb-2">
            Benefits of Rules and Regulations:
          </p>
          <li className="list-disc">
            Create a positive environment: Rules help maintain a safe and
            welcoming space for all members
          </li>
          <li className="list-disc">
            Ensure fair treatment: Consistent rules ensure everyone is treated
            fairly and equally
          </li>
          <li className="list-disc">
            Prevent conflict: Clear guidelines help prevent misunderstandings
            and conflict among members
          </li>
          <li className="list-disc">
            Promote positive interactions: Rules encourage respectful and
            productive communication
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center gap-8 mt-12">
          <div className="flex items-center">
            <input type="checkbox" className="w-[20px] h-[20px] mr-4" />
            <span>
              Have you read, understand and willing to follow the
              <span className="text-primaryBlack font-semibold">
                {" "}
                rules and regulations
              </span>
            </span>
          </div>
          <Link href="/dashboard/community/joined-communities">
            <PrimaryButton text="Join Community" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CommunityRules;
