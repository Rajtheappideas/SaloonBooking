import React, { Fragment, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const MyAccordian = ({ que, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-between border border-gray-300 p-2 mt-3">
        <div className="flex flex-col">
          <p>
            paid to
            <span className="font-semibold">The Finest Barber Shop</span>
          </p>
          <p className="">By Card</p>
          <p className="">18 Sept 2020, 10:40AM</p>
        </div>
        <div>
          {isOpen ? (
            <BsChevronDown onClick={() => setIsOpen((prev) => !prev)} />
          ) : (
            <BsChevronUp />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default MyAccordian;
