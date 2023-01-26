import React from "react";
import { IProduct } from "../../../types/products";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../http/service/productsService";
import SubmitBtn from "../Btns/SubmitBtn/SubmitBtn";
import UploadForm from "../Btns/UploadForm";
import UploadFile from "../Btns/UploaderFile";
import FileInput from "../Btns/FileInput";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    unregister,
  } = useForm<any>({ mode: "onChange" });

  const [addProduct, { isError, isLoading, isSuccess }] =
    useAddProductMutation();

  function handlerSubmit(data: any) {
    console.log(data);
    addProduct(data)
    //  const res = dispatch(logInApi(data));
    // dispatch(logInApi(data));
    //  console.log("res", res);
    //  navigate(fromPage, {replace: true })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <div>
          {/* <UploadForm setValue={setValue} getValues={getValues} /> */}
          {/* <UploadFile /> */}
          <FileInput
            accept="image/*"
            multiple={true}
            name="img"
            mode="append"
            // name=""
            label=""
            //  mode = "update",
            watch={watch}
            setValue={setValue}
            register={register}
            unregister={unregister}
          />
        </div>
        <Input
          className={""}
          elId={""}
          formController={register("name", {
            required: {
              value: true,
              message: "Обязательное поле",
            },
            minLength: {
              value: 6,
              message: "Минимум 8 символов",
            },
            maxLength: {
              value: 32,
              message: "Максимум 32 сивола",
            },
          })}
          inpName={"name"}
          inpType={"text"}
          defaultValue={""}
          errMsg={errors.name?.message}
          label={"Имя продукта"}
        />
        <Input
          className={""}
          elId={""}
          formController={register("about", {
            required: {
              value: true,
              message: "Обязательное поле",
            },
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
          inpName={"about"}
          inpType={"text"}
          defaultValue={""}
          errMsg={errors.about?.message}
          label={"о продукте"}
        />
        <Input
          className={""}
          elId={""}
          formController={register("price", {
            required: {
              value: true,
              message: "Обязательное поле",
            },
          })}
          inpName={"price"}
          inpType={"text"}
          defaultValue={""}
          errMsg={errors.price?.message}
          label={"цена"}
        />
        <Input
          className={""}
          elId={""}
          formController={register("discount")}
          inpName={"discount"}
          inpType={"text"}
          defaultValue={""}
          errMsg={errors.discount?.message}
          label={"скидка"}
        />
        <div>
          <SubmitBtn
            className={""}
            onClick={""}
            txt={"Добавить"}
            disabled={false}
            loading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
