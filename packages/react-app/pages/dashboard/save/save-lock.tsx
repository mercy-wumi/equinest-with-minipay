import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useWeb3 } from "@/contexts/useWeb3";
import DashHeader from "../../../component/DashHeader";

interface FormData {
  thriftTitle: string;
  numberOfParticipants: number;
  savingsAmount: number;
  interestRate: number;
  startDate: string;
  endDate: string;
}

const SaveLock: React.FC = () => {
  const [lockAmount, setLockAmount] = useState<string>();
  const [unlockTime, setunLockTime] = useState();
  const [signingLoading, setSigningLoading] = useState(false);
  const [tx, setTx] = useState<any>(undefined);

  const [transac, setTransac] = useState({
    transType: "",
    dateTime: "",
    amount: "",
    status: "",
  });

  let dateToNumber: bigint;

  if (unlockTime !== undefined) {
    let dateToNum = new Date(unlockTime).getTime();
    dateToNumber = BigInt(dateToNum);
  }

  const router = useRouter();
  const { lock, address, getUserAddress } = useWeb3();

  useEffect(() => {
    getUserAddress();
  }, []);

  async function lockFund(e: any) {
    e.preventDefault();
    console.log("getting here");
    if (unlockTime && lockAmount !== undefined)
      if (address) {
        console.log("getting address");
        setSigningLoading(true);
        try {
          const tx = await lock(lockAmount, dateToNumber);
          setTx(tx);

          if (tx) {
            setTransac({
              transType: "Lock",
              dateTime: unlockTime,
              amount: lockAmount,
              status: "success",
            });
            router.push("/dashboard");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setSigningLoading(false);
        }
      }
  }

  return (
    <>
      <DashHeader />
      <section>
        <div className="flex flex-row justify-center items-center w-[90%] md:w-[70%] xl:w-[50%] mx-auto">
          <form className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl text-center font-semibold">
                Lock Your money towards a specific goal
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="savingsAmount" className="">
                  Savings Lock Amount
                </label>
                <input
                  id="savingsAmount"
                  type="number"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="lockAmount"
                  placeholder="5000"
                  value={lockAmount}
                  onChange={(e: any) => setLockAmount(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="endDate" className="">
                  Unlock date
                </label>
                <input
                  id="endDate"
                  type="datetime-local"
                  className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
                  name="unLockTime"
                  value={unlockTime}
                  onChange={(e: any) => setunLockTime(e.target.value)}
                />
                <span className="text-red text-sm "></span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-center">
              <button
                className={`rounded-lg gap-2 mx-auto w-[fit-content] py-[0.5rem] px-2 whitespace-nowrap text-base text-darkGray bg-primaryYellow font-semibold mt-2 md:px-5 hover:shadow-md transition-all ease-in cursor-pointer`}
                onClick={(e: any) => lockFund(e)}
              >
                {signingLoading ? "Loading" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SaveLock;
