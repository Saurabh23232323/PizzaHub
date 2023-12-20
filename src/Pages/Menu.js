import React from "react";
import { MenuList } from "../helpers/MenuList";
import Menutems from "../components/Menutems";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuitems, key) => {
          return (
            <Menutems
              key={key}
              image={menuitems.image}
              name={menuitems.name}
              price={menuitems.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;