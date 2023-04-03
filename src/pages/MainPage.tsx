import { QRCode } from "antd";
import React from "react";
import AddRestaurant from "../compoents/form/AddRestaurant/AddRestaurant";

const MainPage = () => {
  return (
    <div>
      MainPage
      <QRCode value="https://ant.design/" />
      <div>
        <AddRestaurant />
      </div>
    </div>
  );
};

export default MainPage;
