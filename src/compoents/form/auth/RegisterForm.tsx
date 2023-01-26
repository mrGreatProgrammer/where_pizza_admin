import React from "react";
// import { IRegisterForm } from "../../../../types/forms";
// import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
// import SubmitBtn from "../../Buttons/SubmitBtn";
// import { useAppDispatch, useAppSelector } from "../../../../store/store";
// import { registerApi } from "../../../../http/user/user";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { registerApi } from "../../../http/user/auth";
import SubmitBtn from "../Btns/SubmitBtn/SubmitBtn";
import Input from "../Input/Input";
import { IRegisterForm } from "../../../types/forms";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const { authErr, authLoading, token, userInfo } = useAppSelector(
    (state) => state.appSlice
  );

  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  React.useEffect(() => {
    if (userInfo) {
      navigate(fromPage, { replace: true });
    }
  }, [userInfo]);

  function handlerSubmit(data: any) {
    // console.log(data);

    dispatch(registerApi(data));
  }

  return (
    <div className="flex justify-center mt-4 flex-col">
      {/* <button onClick={()=>localStorage.clear()} >clear</button> */}
      {authErr && (
        <h3 className="text-red text-base font-bold">{`${authErr}`}</h3>
      )}
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <div className="w-[320px]">
          <Input
            className={""}
            elId={""}
            formController={register("fullName", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
            })}
            inpName={"fullName"}
            inpType={"text"}
            defaultValue={""}
            errMsg={errors.fullName?.message}
            label={"Имя"}
          />
        </div>
        <div className="w-[320px]">
          <Input
            className={""}
            elId={""}
            formController={register("tel", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
            })}
            inpName={"tel"}
            inpType={"tel"}
            defaultValue={""}
            errMsg={errors.tel?.message}
            label={"Номер телефона"}
          />
        </div>
        <div className="w-[320px]">
          <Input
            className={""}
            elId={""}
            formController={register("password", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
            })}
            inpName={"password"}
            inpType={"password"}
            defaultValue={""}
            errMsg={errors.password?.message}
            label={"Пароль"}
          />
        </div>
        <div>
          <SubmitBtn
            className={""}
            onClick={""}
            txt={"Зарегистрироватся"}
            disabled={false}
            loading={authLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
