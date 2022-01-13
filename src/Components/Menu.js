import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const Menu = ({ open, close, children }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-white overflow-y-auto h-1/2 w-ful">
        <div className="relative">
          <button onClick={close} className="absolute top-5 right-4">
            <AiOutlineClose size={30} color="black" />
          </button>
          <div className="flex justify-center items-center">
            model is open
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
