import { QRCode } from "antd";
import React from "react";
import AddRestaurant from "../compoents/form/AddRestaurant/AddRestaurant";

const MainPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-primery my-4">MainPage</h1>
      <h3 className="my-1" >click to the map to add a restaurant</h3>
      <div>
        <AddRestaurant />
      </div>
      <div className="my-28">
        <h2 className="text-2xl font-medium" >You able to see our application from expo</h2>
        <h3 className="my-3 text-lg" >
          to see the application please download expo and then scan this QRCode
        </h3>
        <QRCode value="https://ant.design/" />
      </div>
    </div>
  );
};

export default MainPage;
