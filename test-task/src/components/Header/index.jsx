import { Suspense, lazy } from "react";

import { useScreenSize } from "../../hooks/useScreenSize";

const HeaderLazy = lazy(() => import("../../components/Header/index.desktop"));
const HeaderMobileLazy = lazy(() =>
  import("../../components/Header/index.mobile")
);

function Header({ searchValue, setSearchValue, open, onMenuToggle }) {
  const { mobileSize, tabletSize, desktopSize } = useScreenSize();

  return (
    <Suspense fallback="">
      {desktopSize && (
        <HeaderLazy searchValue={searchValue} setSearchValue={setSearchValue} />
      )}
      {(mobileSize || tabletSize) && (
        <HeaderMobileLazy
          onMenuToggle={onMenuToggle}
          open={open}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
    </Suspense>
  );
}

export default Header;
