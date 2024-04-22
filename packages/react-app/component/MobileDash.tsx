import Link from "next/link";

interface MobileDashProps {
  isOpen: boolean;
}

const MobileDash: React.FC<MobileDashProps> = ({ isOpen }) => {
  let pathName;

  if (typeof window !== "undefined") {
    pathName = window.location.pathname;
  }

  return (
    <div
      className={`transition-all duration-200 ${
        isOpen
          ? "fixed mx-auto bg-darkGray bg-opacity-80 inset-x-0 inset-y-0 top-[5.5rem] bottom-0 z-30 h-full overflow-hidden"
          : "hidden"
      }`}
    >
      <div
        className={` bg-lightGray p-5 py-10 flex flex-col gap-4 ${
          isOpen ? "h-full w-[80%]" : "h-0 overflow-hidden"
        }`}
      >
        <ul className="text-white flex flex-col gap-6 text-left">
          <Link
            href="/dashboard"
            className={`${
				pathName === "/dashboard"
                ? "text-primaryYellow"
                : ""
            } }`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/save"
            className={`${
              pathName === "/dashboard/save"
                ? "text-primaryYellow"
                : ""
            } }`}
          >
            Save
          </Link>
          <Link
            href="/dashboard/invest"
            className={`${
              pathName === "/dashboard/invest"
                ? "text-primaryYellow"
                : ""
            } }`}
          >
            Invest
          </Link>
          <Link
            href="/dashboard/community"
            className={`${
              pathName === "/dashboard/community"
                ? "text-primaryYellow"
                : ""
            } }`}
          >
            Community
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileDash;
