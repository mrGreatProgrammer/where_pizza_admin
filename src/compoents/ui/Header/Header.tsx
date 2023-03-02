import React from "react";
import HeaderNavs from "../../Navs/HeaderNavs/HeaderNavs";

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <div className="container">
        <HeaderNavs />
      </div>
    </header>
  );
};

export default Header;
