import { Dropdown, MenuProps } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FullLogo, UserIcon } from "../../../imgs/icons";
import { logoutAC } from "../../../store/appSlice/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { INavLink } from "./../../../types/app";
import SidebarNavs from "../SidebarNavs/SidebarNavs";

type setActiveFuncParams = {
  isActive: boolean;
};

function setActive({ isActive }: setActiveFuncParams): string {
  return isActive ? "active-link" : "text-primery";
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
    title: "analitic",
    link: "/analitic",
  },
  {
    id: 4,
    title: "group of products",
    link: "/group_of_products",
  },
  {
    id: 5,
    title: "product reciept",
    link: "/product_ingredient",
  },
  {
    id: 6,
    title: "users",
    link: "/users",
  },
  {
    id: 7,
    title: "seller",
    link: "/seller",
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

const HeaderNavs: React.FC = (): JSX.Element => {
  // вытаскиваю данные авторизованного пользователя
  const { userInfo } = useAppSelector((state) => state.appSlice);
  const dispatch = useAppDispatch();

  const dropdownItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button onClick={() => dispatch(logoutAC())}>Log out</button>
      ),
    },
  ];

  return (
    <nav className=" py-2 px-4  flex flex-row justify-between items-center">

      <div className="block xl:hidden" >
    <SidebarNavs sidebarNav={headerNav} />
      </div>

      <div>
        <Link to={"/"}>
          <FullLogo />
        </Link>
      </div>
      <ul className="hidden xl:flex flex-row gap-x-4">
        {headerNav.map((e) => (
          <li key={e.id} className="text-lg font-semibold uppercase">
            <NavLink
              to={e.link}
              // @ts-ignore
              className={(a) => setActive(a)}
            >
              {e.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="account__contianer">
        {userInfo ? (
          <Dropdown menu={{ items: dropdownItems }} placement="bottom">
            <div className="flex flex-row gap-x-3 items-center border-2 rounded-lg py-1.5 px-4">
              <div className="account__avatar--container">
                <UserIcon />
              </div>
              <div className="account__txt">
                <p className="text-lg font-semibold">{userInfo.fullName}</p>
                <p className="text-sm">{userInfo.role}</p>
                <p className="text-xs text-txtGrey">{userInfo.tel}</p>
              </div>
            </div>
          </Dropdown>
        ) : (
          <ul className="flex flex-row gap-x-3">
            {authNav.map((e) => (
              <li key={e.id} className="text-base uppercase">
                <NavLink
                  to={e.link}
                  //@ts-ignore
                  className={setActive}
                >
                  {e.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default HeaderNavs;
