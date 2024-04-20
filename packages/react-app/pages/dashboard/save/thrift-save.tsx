import DashHeader from "../../../component/DashHeader";
import Link from "next/link";
import save from "../../../assets/save.svg";
import Image from "next/image";

const ThriftSave = () => {
  return (
    <>
      <DashHeader backBtn={true} />
      <div className="px-8 md:px-16 flex flex-col justify-center items-center gap-4 my-12">
        <Image src={save} alt="save" />
        <div className="flex items-center flex-col">
          <p className="text-2xl w-3/4 text-center">
            You currently don't have any thrift savings
          </p>
          <div className="flex-col md:flex-row flex gap-8 mt-8">
            <Link href="/dashboard/save/new-thrift">
              <button className="rounded-md px-8 py-2 bg-primaryYellow text-primaryBlack font-bold hover:bg-white hover:border-[1px] hover:border-primaryBlack ">
                Start New Thrift
              </button>
            </Link>
            <button className="border-[1px] border-primaryBlack rounded-md px-8 py-2 font-bold hover:bg-primaryYellow hover:text-primaryBlack hover:border-0">
              Join Thrift
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThriftSave;
