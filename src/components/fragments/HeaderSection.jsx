// HeaderSection.js
import React from 'react';

const HeaderSection = ({text}) => {

  return (
    <div className="flex justify-between mb-6">
      <div className="flex -flex-row items-center">
        <div className="w-16 h-2 bg-primary mr-4"></div>
        <h1 className="text-3xl text-gray-800 dark:text-gray-200">
          {text}
        </h1>
      </div>
      <div className="w-10 h-10 bg-primary font-bold  flex items-center text-gray-800 dark:text-gray-200 pl-3 ">
        {`>>`}
      </div>
    </div>
  );
}

export default HeaderSection;