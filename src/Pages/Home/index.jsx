import React from "react";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";

const HomePage = () => {
  return (
    <div className="page__theme w-100vw">
      <div className="hidden md:block md:col-span-2 lg:col-span-1 w-[100%]">
        <Menu />
      </div>
      <div className="md:block md:col-span-2 lg:col-span-4 w-[100%] ">
        <Dashboard />
      </div>
    </div>
  );
};

export default HomePage;
