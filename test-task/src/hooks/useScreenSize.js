import { useState, useEffect } from "react";

const MOBILE_MAX_WIDTH = 768;
const TABLET_MAX_WIDTH = 1024;

export function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);

  function updateSize() {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const mobileSize = width <= MOBILE_MAX_WIDTH;
  const tabletSize = width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH;
  const desktopSize = width > TABLET_MAX_WIDTH;

  return {
    mobileSize,
    tabletSize,
    desktopSize,
  };
}
