import React, { Fragment, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const MyAccordian = ({ que, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-lg text-gray-400 my-2">{que}</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
      {isOpen && (
        <p className="bg-gray-200 text-base font-semibold p-3 rounded-md block">
          {ans}
        </p>
      )}
      <hr className="bg-gray-700 w-full border my-2" />
    </Fragment>
  );
};

export default MyAccordian;
