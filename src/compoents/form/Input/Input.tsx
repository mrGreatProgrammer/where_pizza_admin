import React from "react";
import { IInputProps } from "../../../types/forms";
// import { IInputProps } from "../../../types/forms";

const Input = ({
  className,
  elId,
  formController,
  inpName,
  inpType,
  errMsg,
  label,
  defaultValue,
}: IInputProps) => {
  return (
    <div className={`input my-4 ${className}`}>
      <label
        className="label text-txtGrey mb-2 text-xs md:text-sm"
        htmlFor={inpName}
      >
        {label}
      </label>
      <input
        type={inpType}
        name={inpName}
        id={elId}
        defaultValue={defaultValue}
        {...formController}
        className={
          "border text-xs md:text-sm border-lineGray bg-white rounded-md min-h-[44px] px-4"
        }
      />
      <span className="err_msg text-xs text-red">{errMsg}</span>
    </div>
  );
};

export default Input;
