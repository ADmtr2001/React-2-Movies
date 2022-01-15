import React, {useEffect, useState} from 'react';

import {Wrapper} from "./ScrollToTopButton.styles";
import {AiOutlineArrowUp} from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Wrapper onClick={scrollToTop}>
      <AiOutlineArrowUp/>
    </Wrapper>
  );
};

export default ScrollToTopButton;