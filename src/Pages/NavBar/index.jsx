import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import { MdNotificationsNone, MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-14 mx-4">
      <h1 className="tezt-2xl font-bold">
        Ndovu<span className="text-[#DB2A12]">Pay</span>
      </h1>
      <div className="flex gap-8">
        <div className="flex gap-2 text-[#8FE1A1]">
          <FiHelpCircle size={28} />
          <h2 className="text-[#000]"> Help</h2>
        </div>
        <div className="">
          <MdNotificationsNone size={28} />
        </div>
        <div className="flex gap-2">
          <MdOutlineAccountCircle size={28} />
          Austine
        </div>
      </div>
    </div>
  );
};

export default NavBar;
