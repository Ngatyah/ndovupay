import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiWallet3Line } from "react-icons/ri";
import { MdOutlineAccountCircle, MdNotifications } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";

const MobileNav = () => {
  const [active, isActive] = useState();
  return (
    <div className="md:hidden sm:flex w-[100%]  fixed bottom-0 right-0 left-0 z-10">
      <div className="flex justify-around w-[100%] py-[1rem]  bg-bgAlt dark:bg-darkBgAlt text-darkBgDefault dark:text-bgDefault">
        <div className="flex text-[#DD2C12] flex-col justify-center items-center">
          <BiHomeAlt size={20} />
          <small>Home</small>
        </div>

        <div className="flex flex-col justify-center items-center">
          <RiWallet3Line size={20} />
          <small>My Transactions</small>
        </div>

        <div className="flex flex-col justify-center items-center">
          <MdNotifications size={20} />
          <small> Notification</small>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdOutlineAccountCircle size={20} />
          <small> My Account</small>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
