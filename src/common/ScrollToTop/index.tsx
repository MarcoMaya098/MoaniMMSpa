import { useCallback, useEffect, useState } from "react";
import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    const offsetFromTop = window.scrollY;
    const footer = document.querySelector("footer");

    let shouldShow = offsetFromTop > 350;

    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isFooterVisible = footerRect.top < windowHeight;

      if (isFooterVisible) {
        shouldShow = false;
      }
    }

    setShowScroll(shouldShow);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollUpContainer onClick={scrollUp} show={showScroll}>
      <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
