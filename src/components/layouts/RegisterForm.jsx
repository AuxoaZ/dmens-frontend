import React from "react";
import { Input } from "../elements/input";

const RegisterForm = () => {
  return (
    <div class="min-h-screen dark:bg-dark_primary py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form>
            <div class="max-w-md mx-auto">
              <div>
                <h2 class="text-2xl text-gray-800">Register</h2>
                <p className="text-sm text-gray-800">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <Input variant="standard" type="text" label="Full Name" />
                  </div>
                  <div class="relative">
                    <Input variant="standard" type="email" label="Email" />
                  </div>
                  <div class="relative">
                    <Input
                      variant="standard"
                      type="number"
                      label="Phone Number"
                    />
                  </div>
                  <div class="relative">
                    <Input
                      variant="standard"
                      type="password"
                      label="Password"
                    />
                  </div>
                  <div class="relative">
                    <Input
                      variant="standard"
                      type="password"
                      label="Confirm Password"
                    />
                  </div>
                  <div class="pt-3">
                    <button class="bg-primary text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
