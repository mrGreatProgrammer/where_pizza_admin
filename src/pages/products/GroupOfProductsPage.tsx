import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../compoents/form/Input/Input";
import { useAddGroupOfProductMutation } from "../../http/service/productsService";
import showNotification from "../../utils/showNotification";
import SubmitBtn from "./../../compoents/form/Btns/SubmitBtn/SubmitBtn";

const GroupOfProductsPage = () => {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ mode: "all" });

 const [addGroupOfProduct, {isError, isLoading, isSuccess}] = useAddGroupOfProductMutation();

  function onSubmit(data: any) {
    console.log(data);
    addGroupOfProduct(data).then(d=>showNotification('info', "Успешно добавлен!", "Данная группа для продуктов успешно добавлен!"));
  }

  return (
    <div>
      <div>
        <form>
          <div className="w-60">
            <Input
              elId=""
              formController={{ ...register("title") }}
              inpName={"title"}
              inpType="text"
              className={""}
              errMsg={errors.title?.message}
              label={"Name"}
            />
          </div>
          <div className="w-60">
            <SubmitBtn
              className={""}
              onClick={handleSubmit(onSubmit)}
              txt="submit"
              disabled={false}
              loading={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupOfProductsPage;
