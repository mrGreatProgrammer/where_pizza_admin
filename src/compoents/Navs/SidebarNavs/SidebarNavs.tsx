import React from "react";
import { Link } from "react-router-dom";
import { sideBarNav } from "../../../fakeData/faleData";

const SidebarNavs = () => {
  return (
    <nav>
      <ul>
        {sideBarNav.map((e) => (
          <li key={e.id}>
            <Link to={e.link}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavs;
