import React from "react";
import "../../css/menu.css";
import { Pages } from "../pages/Pages";

export const Menu: React.FC = () => {
  return (
    <nav>
      <div className="menuBar commonMenuBar">
        <ul className="menuList">
        {Object.values(Pages).map(({path, name}, key) => {
          const base = {
            key,
            href: path as string
          };

          return (
            <li className="pcMenuButton">
              <a {...base}>
                {name}
              </a>
            </li>
          );
        })}
        </ul>
      </div>
    </nav>
  );
};