// StaffCard.jsx
import React from 'react';

const StaffCard = (props) => {
  const { imgSrc, name, position } = props;

  return (
    <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-400 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imgSrc}
          alt="Image"
        />
        <h5 className="mb-1 text-xl font-medium text-black dark:text-white">{name}</h5>
        <span className="text-sm text-black font-semibold">{position}</span>
        <div className="flex mt-4 md:mt-6">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-blue-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 ms-3">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;
