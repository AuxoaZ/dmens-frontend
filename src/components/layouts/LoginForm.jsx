import React from "react";
import { Input } from "../elements/input";
import { Link } from "react-router-dom";
import LoginFrag from "../fragments/loginFrag";

const LoginForm = () => {

  
  return (
    <div className="min-h-screen dark:bg-dark_primary py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h2 className="text-2xl text-gray-800">Login</h2>
            <p classNameName="text-sm text-gray-800">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <LoginFrag/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
