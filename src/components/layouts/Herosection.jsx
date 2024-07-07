import React from "react";
import banner from "../../assets/banner.png";

export const Herosection = () => {
  return (
    <div className="dark:bg-dark_primary pt-20">
      <div className="container px-4 mx-auto relative lg:text-sm ">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="">
              <h1 className="text-8xl text-gray-800 dark:text-gray-200">
                DO IT WITH PASSION
              </h1>
              <h3 className="text-6xl text-gray-800 dark:text-gray-200">
                OR NOT AT ALL
              </h3>
              <div className="flex flex-row relative w-full h-64 mt-10 ">
                <div className=" w-32 h-32 px-3 py-3 bg-white dark:bg-dark_primary border-dashed border-4 border-gray-800 dark:border-gray-50 rounded-full  absolute top-0 left-0 z-40 ">
                  <div className="bg-primary w-24 h-24 rounded-full text-center flex items-center ">
                    <p className="text-gray-200 -rotate-12 text-base dark:text-gray-800">
                      GRATIS/10 CUKUR
                    </p>
                  </div>
                </div>
                <div className="w-32 h-32 px-3 py-3  rounded-full bg-white dark:bg-dark_primary border-dashed border-4 border-gray-800 dark:border-gray-50  absolute top-0 left-24 z-30">
                  <div className=" w-24 h-24 rounded-full text-center flex items-center ">
                    <p className="text-gray-800 ml-5 -rotate-12 text-base dark:text-gray-200">
                      10 
                      <br />SERTIFIKAT
                    </p>
                  </div>
                </div>
                <div className="w-32 h-32 px-3 py-3 rounded-full bg-white dark:bg-dark_primary border-dashed border-4 border-gray-800 dark:border-gray-50  absolute top-0 left-48 z-20">
                <div className=" w-24 h-24 rounded-full text-center flex items-center ">
                    <p className="text-gray-800 ml-5 -rotate-12 text-base dark:text-gray-200">
                      26 
                      <br />CABANG
                    </p>
                  </div>
                </div>
                <div className="w-32 h-32 px-3 py-3 rounded-full bg-white dark:bg-dark_primary border-dashed border-4 border-gray-800 dark:border-gray-50  absolute top-0 right-28 z-10">
                <div className=" w-24 h-24 rounded-full text-center flex items-center ">
                    <p className="text-gray-800 ml-5 -rotate-12 text-base dark:text-gray-200">
                      500+ 
                      <br />CUSTOMER
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={banner} alt="" srcset="" className="lg:h-[590px]" />
            </div>
          </div>
        </div>
      </div>
  );
};
