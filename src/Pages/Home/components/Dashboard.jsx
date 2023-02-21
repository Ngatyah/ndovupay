import React from "react";
import { GiShakingHands } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="card__theme h-100vh">
      <h2 className="font-3xl font-bold">
        Hi <span className="text-neutralGold">Austine!</span>
        <div className="flex h-[30%]">
          <div className="card__theme bg-[#DB2A12] m-2">
            <div className="flex gap-4 justify-between mx-2">
              <GiShakingHands size={25} />
              <div className="bg-[#8FE1A1] text-neutralDark round-full p-2">
                2
              </div>
            </div>
            <div className="mt-4 px-2">
              <h2>Join & Pay Transaction</h2>
            </div>
          </div>

          <div className="card__theme bg-[#FFB600] m-2">
            <div className="flex gap-4 justify-between mx-2">
              <MdHealthAndSafety size={25} />
              <div className="bg-[#8FE1A1] text-neutralDark round-full p-2">
                2
              </div>
            </div>
            <div className="mt-4 px-2">
              <h2>Accept & Reject</h2>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default Dashboard;
