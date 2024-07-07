import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <div className="h-24 bg-white dark:bg-slate_900 rounded-lg"></div>
        <div className="h-24 bg-white dark:bg-slate_900 rounded-lg"></div>
        <div className="h-24 bg-white dark:bg-slate_900 rounded-lg"></div>
        <div className="h-24 bg-white dark:bg-slate_900 rounded-lg"></div>
      </div>
      <div className="grid grid-cols-1 mt-8  xl:grid-cols-2 gap-7">
        <div className="h-80   bg-white dark:bg-slate_900 rounded-lg"></div>
        <div className="h-80 bg-white dark:bg-slate_900 rounded-lg"></div>
      </div>
      <div className="grid grid-cols-1 mt-8  xl:grid-cols-2 gap-7">
        <div className="h-80   bg-white dark:bg-slate_900 rounded-lg"></div>
        <div className="h-80 bg-white dark:bg-slate_900 rounded-lg"></div>
      </div>
    </>
  );
};

export default Dashboard;
