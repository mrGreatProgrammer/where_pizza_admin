import React from "react";
import Spinner from "../../../../imgs/loaders/Spinner";
import { ISubmitBtnProps } from "../../../../types/forms";

const SubmitBtn = ({
  className,
  onClick,
  txt,
  disabled,
  loading,
}: ISubmitBtnProps) => {
  return (
    <div className="my-4">
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={`submit_btn bg-primery disabled:bg-lightPrimery text-sm md:text-base text-white min-w-[320px] min-h-[44px] rounded-md ${className}`}
      >
        {loading ? <Spinner /> : txt}
      </button>
    </div>
  );
};

export default SubmitBtn;
