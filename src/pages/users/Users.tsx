import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../compoents/Navs/NavBar/NavBar'
import { INavLink } from '../../types/app';

const usersNav: INavLink[] = [
  {
    id: 1,
    title: "all users",
    link: "/users/",
  },
  {
    id: 2,
    title: "orders",
    link: "/users/orders",
  },
];

const Users = () => {
  return (
    <div>
      <NavBar links={usersNav} />
      <Outlet />
    </div>
  )
}

export default Users