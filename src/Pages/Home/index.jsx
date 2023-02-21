import React from "react";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";

const HomePage = () => {
  return (
    <div className="page__theme">
      <div className="md:col-span-2 lg:col-span-1">
        <Menu />
      </div>
      <div className="hidden md:block md:col-span-2 lg:col-span-4 ">
        <Dashboard />
      </div>
    </div>
  );
};

export default HomePage;
