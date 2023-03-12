import { Button, Input } from "antd";
import React from "react";

const SellerForm = ({ total = 0 }) => {
  return (
    <div className="sticky top-0 flex flex-row justify-between max-w-5xl mx-auto py-8 px-3  border-y-2 items-center my-3">
      <div className="inp__container w-80 ">
        <Input placeholder="user name" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-primery my-1" >
          Total: <span>{total}$</span>
        </h4>
        <Button type="primary">Done</Button>
      </div>
    </div>
  );
};

export default SellerForm;
