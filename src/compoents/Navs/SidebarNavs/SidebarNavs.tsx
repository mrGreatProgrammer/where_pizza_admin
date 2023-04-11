import React from "react";
import { NavLink } from "react-router-dom";
import { INavLink } from "../../../types/app";
import Sider from "antd/es/layout/Sider";
import { Button, Drawer, Menu, MenuProps } from "antd";
// import { sideBarNav } from "../../../fakeData/faleData";

type setActiveFuncParams = {
  isActive: boolean;
};

function setActive({ isActive }: setActiveFuncParams): string {
  return isActive ? "active-link" : "text-primery";
}

interface SidebarNavsProps {
  sidebarNav: INavLink[];
}

const SidebarNavs = ({ sidebarNav }: SidebarNavsProps) => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  //   (icon, index) => {
  //     const key = String(index + 1);

  //     return {
  //       key: `sub${key}`,
  //       icon: React.createElement(icon),
  //       label: `subnav ${key}`,

  //       children: new Array(4).fill(null).map((_, j) => {
  //         const subKey = index * 4 + j + 1;
  //         return {
  //           key: subKey,
  //           label: `option${subKey}`,
  //         };
  //       }),
  //     };
  //   },
  // );

  return (
    // <Sider width={200} style={{ background: colorBgContainer }}>
    //       <Menu
    //         mode="inline"
    //         defaultSelectedKeys={['1']}
    //         defaultOpenKeys={['sub1']}
    //         style={{ height: '100%', borderRight: 0 }}
    //         items={sidebarNav}
    //       />
    //     </Sider>

    <div>
      <div>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        // key={placement}
      >
        <nav>
          <ul>
            {sidebarNav.map((e: INavLink) => (
              <li className="text-lg font-semibold uppercase my-3" key={e.id}>
                <NavLink className={(a) => setActive(a)} to={e.link}>
                  {e.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default SidebarNavs;
