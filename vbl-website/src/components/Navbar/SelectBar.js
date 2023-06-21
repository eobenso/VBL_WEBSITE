import React from "react";
import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";

import "./SelectBar.css";

function SelectBar() {
  return (
    <nav className="nav-area">
      <ul className="menus">
        {" "}
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
        })}{" "}
      </ul>{" "}
    </nav>
  );
}

export default SelectBar;
