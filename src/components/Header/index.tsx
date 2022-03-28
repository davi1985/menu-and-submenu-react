import { Nav } from "../Nav";

import "./styles.css";

import { menuItems } from "./dataMenu";
import { Menu } from "../Nav/types";
export const Header = () => {
  return (
    <header>
      <h1>
        tech
        <span>tudo</span>
        <span>.com</span>
      </h1>

      <Nav menuItems={menuItems as Menu} />
    </header>
  );
};
