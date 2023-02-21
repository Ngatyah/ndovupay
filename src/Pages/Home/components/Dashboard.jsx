import React from "react";
import { GiShakingHands, GiCarWheel } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { AiOutlineCreditCard, AiFillGift } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="card__theme h-100vh bg-darkBgAlt">
      <h2 className="font-3xl mb-4 mx-2 font-bold">
        Hi <span className="text-neutralGold">Austine</span> !
      </h2>
      <div className="flex h-[40%]">
        <div className="card__theme bg-[#DB2A12] w-[15%] m-2">
          <div className="flex  my-4 gap-4 justify-between mx-2">
            <GiShakingHands size={25} />
            <div className="bg-[#8FE1A1] text-neutralDark rounded-full my-2 py-1 px-2">
              0
            </div>
          </div>
          <div className="mt-4 px-2">
            <h2 className="text-darkBgAlt">Join & Pay Transaction</h2>
          </div>
        </div>

        <div className="card__theme bg-[#FFB600] w-[15%] m-2">
          <div className="flex  my-4 gap-4 justify-between mx-2">
            <MdHealthAndSafety size={25} />
            <div className="bg-[#8FE1A1] text-neutralDark rounded-full my-2 py-1 px-2">
              0
            </div>
          </div>
          <div className="mt-4 px-2">
            <h2>Accept & Reject</h2>
          </div>
        </div>
        <div className="card__theme bg-[#1E191B] text-darkBgAlt w-[15%] m-2">
          <div className="flex  my-4 gap-4 justify-between mx-2">
            <AiOutlineCreditCard size={25} />
          </div>
          <div className="mt-4 px-2 ">
            <h2>My Transactions</h2>
          </div>
        </div>
        <div className="card__theme bg-[#79898C] w-[15%] text-[#fff] m-2">
          <div className="flex gap-4 justify-between mx-2 my-4">
            <GiCarWheel size={25} />
          </div>
          <div className="mt-4 px-2">
            <h2>Invite and Earn</h2>
          </div>
        </div>
      </div>
      <div className="flex mt-6  h-[40%]">
        <div className="card__theme bg-[#323C40] w-[30%] text-[#fff] m-2">
          <div className="flex gap-4 my-2 text-neutralGold self-center">
            <AiFillGift />
            <small className="">150</small>
          </div>
          <div className="flex w-[100%] justify-evenly">
            <div className="flex items-center flex-col">
              <h2 className="text-neutralGold font-bold">50</h2>
              <h2>Held Balance</h2>
              <h2>KES</h2>
            </div>
            <div className="flex items-center flex-col">
              <h2 className="text-neutralGold font-bold">1</h2>
              <h2>Avaliable Balance</h2>
              <h2>KES</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
