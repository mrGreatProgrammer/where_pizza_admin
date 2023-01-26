import React from "react";

type BtnChooseProductPropsType = { txt: string };

const BtnChooseProduct = ({ txt }: BtnChooseProductPropsType): JSX.Element => {
  return (
    <button className="bg-primery px-8 py-[13px] text-white text-base rounded-md">
      {txt}
    </button>
  );
};

export default BtnChooseProduct;
