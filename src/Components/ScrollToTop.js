import React, { useState, Fragment } from "react";
import { GrLinkTop } from "react-icons/gr";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <Fragment>
      <button
        className="fixed right-0 bottom-10 animate-bounce bg-green-300 p-6 rounded-full"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <GrLinkTop size={30}  />
      </button>
    </Fragment>
  );
};

export default ScrollToTop;
