import React from 'react'
import { NavLink } from 'react-router-dom'
import { INavLink } from '../../../types/app'


type setActiveFuncParams = {
  isActive: boolean;
};

function setActive({ isActive }: setActiveFuncParams): string {
  return isActive ? "active-link" : "text-primery";
}


interface INavBarType {
  links: INavLink[];
}

const NavBar = ({links}: INavBarType) => {
  return (
    <nav>
      <ul>
    {links?.map((e:INavLink)=>  <li key={e.id} className="text-base uppercase">
                <NavLink
                  to={e.link}
                  //@ts-ignore
                  className={setActive}
                >
                  {e.title}
                </NavLink>
              </li>)}
      </ul>
    </nav>
  )
}

export default NavBar