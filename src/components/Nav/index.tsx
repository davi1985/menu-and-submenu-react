import "./styles.css";

import { Menu } from "./types";

export const Nav = ({ menuItems }: { menuItems: Menu }) => {
  return (
    <nav>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label} </a>

            <ul className="submenu">
              {item?.subItems?.map((subitem) => (
                <li key={item.label}>
                  <a href={subitem.href}>{subitem.label}</a>

                  <ul className="submenu">
                    {subitem?.items?.map((item) => (
                      <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
