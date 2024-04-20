import React, { useContext } from "react";
import DashCards from "../../component/DashCards";

import DashHeader from "../../component/DashHeader";
// import { userContext } from "../userContext";

const cards = [
  {
    name: "Total Balance",
    amount: "N10,700.00",
    btn: true,
    profit_loss: false,
  },
  {
    name: "Lock Savings",
    amount: "N5,000.00",
    btn: false,
    profit_loss: true,
  },
  {
    name: "Withdrawn Savings",
    amount: "N2,700.00",
    btn: false,
    profit_loss: true,
  },
];

const transactions = [
  {
    transType: "Lock",
    date: "12/09/23",
    time: "2:00pm",
    amount: "N50.00",
    status: "successful",
  },
  {
    transType: "Withdraw",
    date: "12/09/23",
    time: "2:00pm",
    amount: "N10.00",
    status: "successful",
  },
  {
    transType: "Lock",
    date: "12/09/23",
    time: "2:00pm",
    amount: "N100.00",
    status: "successful",
  },
  {
    transType: "Lock",
    date: "12/09/23",
    time: "2:00pm",
    amount: "N50.00",
    status: "successful",
  },
];
const DashOverview = () => {
  const style = {
    tableData: "flex-1",
  };
  return (
    <>
      <DashHeader title="Welcome back!" backBtn={false} />
      <div className="px-4 md:px-8 xl:px-16 mb-16">
        <div className="-mt-4 xl:-mt-10 grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <DashCards card={card} key={index} />
          ))}
        </div>
        <div className="shadow-xl rounded-2xl p-2 md:p-8 mt-8">
          <p className="text-2xl font-semibold">Transaction History</p>
          <table className="w-full mt-4 text-center">
            <thead className="text-darkGray pb-4 flex w-full">
              <th className={style.tableData}>Transaction</th>
              <th className={style.tableData}>Date</th>
              <th className={style.tableData}>Amount</th>
              <th className={style.tableData}>Status</th>
            </thead>
            <tbody>
              {transactions.map((tran, index) => (
                <tr
                  className="border-t-[1px] flex w-full border-darkGray border-opacity-10 py-4"
                  key={index}
                >
                  <td className={style.tableData}>{tran.transType}</td>
                  <td className="flex flex-col flex-1">
                    <span>{tran.date}</span>
                    <span className="text-sm">{tran.time}</span>
                  </td>
                  <td className={style.tableData}>{tran.amount}</td>
                  <td className={style.tableData}>
                    <span className="bg-green bg-opacity-10 rounded-xl py-1 px-2 md:px-4">
                      {tran.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashOverview;
