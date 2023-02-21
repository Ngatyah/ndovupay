import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlineAccountCircle, MdPayments } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";

const Menu = () => {
  return (
    <div className="flex flex-col items-start mb-2 gap-2">
      <button className="flex justify-start gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
        <BiHomeAlt size={25} />
        <h2> Home</h2>
      </button>
      <div className="flex justify-start gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
        <CgNotes size={25} />
        <h2> My Transactions</h2>
      </div>
      <div
        to="/Payment"
        className="flex justify-start gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
        <MdOutlineAccountCircle size={25} />
        <h2>Payments</h2>
      </div>
      <div className="flex justify-start gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
        <FiGlobe size={25} />
        <h2>Disputes</h2>
      </div>
      <div className="flex justify-start gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
        <MdPayments size={25} />
        <h2>Verify</h2>
      </div>
    </div>
  );
};

export default Menu;
