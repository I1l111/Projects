import { useState, useEffect } from "react";

const MOBILE_MAX_WIDTH = 768;
const TABLET_MAX_WIDTH = 1024;

export function useScreenSize() {
  const [width, setWidth] = useState(null);

  function updateSize() {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  let mobileSize = false;
  let tabletSize = false;
  let desktopSize = false;

  if (width) {
    mobileSize = width <= MOBILE_MAX_WIDTH;
    tabletSize = width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH;
    desktopSize = width > TABLET_MAX_WIDTH;
  }

  return {
    mobileSize,
    tabletSize,
    desktopSize,
  };
}
