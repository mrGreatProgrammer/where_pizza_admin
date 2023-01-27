import React from "react";
import { Link } from "react-router-dom";
import { INavLink } from "./../../../types/app";

type a = {
  isActive: boolean;
};

// const setActive = ({ isActive }: any): string =>
//   isActive ? "active-link " : "text-primery";

function setActive({isActive}:any):string {
  return isActive ? "active-link" :"text-primery"
}

const headerNav: INavLink[] = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "products",
    link: "/products",
  },
  {
    id: 3,
    title: "dashboard",
    link: "/dashboard",
  },
];

const authNav: INavLink[] = [
  {
    id: 13,
    title: "login",
    link: "/auth/login",
  },
  {
    id: 14,
    title: "registration",
    link: "/auth/register",
  },
];

const HeaderNavs = () => {
  return (
    <nav className=" py-2 px-4  flex flex-row justify-between" >
      <ul className="flex flex-row gap-x-4" >
        {headerNav.map((e) => (
          <li className="text-lg font-semibold uppercase">
            <Link to={e.link}
            // @ts-ignore 
             className={(a)=>setActive(a)}>
              {e.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="account__contianer">
        <ul>
          {authNav.map((e) => (
            <li className="text-base uppercase">
              <Link
                to={e.link}
                //@ts-ignore
                className={setActive}
              >
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavs;
