import React from "react";
import { GiShakingHands, GiCarWheel } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { AiOutlineCreditCard, AiFillGift } from "react-icons/ai";
import shoppingImg from "../../../assets/shopping.jpg";

const Dashboard = () => {
  return (
    <div className="card__theme h-100vh">
      <h2 className=" hidden md:block font-3xl my-4 text-2xl mx-2 font-bold">
        Hi <span className="text-neutralGold">Austine</span> !
      </h2>
      <div className="flex order-1 md:order-0 flex-wrap justify-center md:justify-start h-[40%]">
        <div className="card__theme bg-[#DB2A12] w-[40%] md:w-[15%] m-2">
          <div className="flex text-darkBgAlt my-4 gap-4 justify-between mx-2">
            <GiShakingHands size={28} />
            <div className="bg-[#8FE1A1] text-neutralDark rounded-full my-2 py-2 px-4">
              0
            </div>
          </div>
          <div className="mt-4 px-2">
            <h2 className="text-darkBgAlt font-bold">Join & Pay Transaction</h2>
          </div>
        </div>

        <div className="card__theme bg-[#FFB600] w-[40%] md:w-[15%] m-2">
          <div className="flex  my-4 gap-4 justify-between mx-2">
            <MdHealthAndSafety size={28} />
            <div className="bg-[#8FE1A1] text-neutralDark rounded-full my-2 py-2 px-4">
              0
            </div>
          </div>
          <div className="mt-4 px-2 font-bold">
            <h2>Accept | Reject</h2>
          </div>
        </div>
        <div className="card__theme bg-[#1E191B] text-darkBgAlt w-[40%] md:w-[15%] m-2">
          <div className="flex  my-4 gap-4 justify-between mx-2">
            <AiOutlineCreditCard size={28} />
          </div>
          <div className="mt-4 px-2 font-bold">
            <h2>My Transactions</h2>
          </div>
        </div>
        <div className="card__theme bg-[#79898C] w-[40%] md:w-[15%] text-[#fff] m-2">
          <div className="flex gap-4 justify-between mx-2 my-4">
            <GiCarWheel size={28} />
          </div>
          <div className="mt-4 px-2 font-bold">
            <h2>Invite and Earn</h2>
          </div>
        </div>
      </div>
      <div className="flex md:mt-6 order-0 md:order-1  h-[40%]">
        <div className="card__theme bg-[#323C40] w-[100%] md:w-[30%] text-[#fff] m-2">
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
      <div className="flex md:hidden mt-6 mb-20 order-2 h-[40%]">
        <div className="card__theme bg-[#323C40] w-[100%] md:w-[30%] text-[#fff] m-2">
          <div
            className={`{bg-[url(${shoppingImg})] m-4 flex flex-col items-center w-[100%] h-[100%]}`}
          >
            <h1 className="text-2xl font-bold">Shop With Confidence</h1>
            <h3 className="text-neutralGold">Your Money is Safe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
