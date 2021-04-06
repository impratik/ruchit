import React, { useState, useEffect } from "react";
import "./MainHeader.css";
import { debounce } from "../../UIElements/Helpers";

const MainHeader = (props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header
      className="main-header"
      style={({ top: visible ? "0" : "-140px" })}
    >
      {props.children}
    </header>
  );
};

export default MainHeader;
