import { InputNumber } from "antd";
import React from "react";
import { Controller, useController, useForm } from "react-hook-form";
import SubmitBtn from "../../compoents/form/Btns/SubmitBtn/SubmitBtn";
import { useAddRecipeOfProductMutation } from "../../http/service/productsService";
import showNotification from "../../utils/showNotification";
import Input from "./../../compoents/form/Input/Input";
import IngredientImgUploadForm from "../../compoents/form/IngredientImgUploadForm/IngredientImgUploadForm";
import FileInput from "../../compoents/form/Btns/FileInput";

const ProductReceipt = () => {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
    setValue,
    watch,
    unregister,
  } = useForm({ mode: "all" });

  const [addIngredient, { isError, isLoading, isSuccess }] =
    useAddRecipeOfProductMutation();

  // const usecontrol = useController();

  function onSubmit(data: any) {
    console.log(data);
    addIngredient(data).then((d) => {
      //@ts-ignore
      if (!d?.error) {
        showNotification(
          "info",
          "Успешно добавлено!",
          "Данный ингредиент успешно добавлен!"
        );
      } else {
        showNotification(
          "error",
          "Произошла ошибка!",
          "Произошла не предвиденная ошибка при добавлении!"
        );
      }
    });
  }

  return (
    <div className="px-7">
      <div>
        <form>
          <div>
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
            {/* <IngredientImgUploadForm
            // formController={{ ...register("name") }}
            // errMsg={errors.name?.message}
            /> */}
          </div>
          <div className="w-60">
            <Input
              elId=""
              formController={{ ...register("name") }}
              inpName="name"
              inpType="text"
              className={""}
              defaultValue={""}
              errMsg={errors.name?.message}
              label={"Имя рецепта"}
            />
            <Input
              elId=""
              formController={{ ...register("price") }}
              inpName="price"
              inpType="text"
              className={""}
              defaultValue={""}
              errMsg={errors.price?.message}
              label={"Цена ингредиента"}
            />
          </div>
          <div className="w-24">
            {/* <Controller  control={control} rules={{min: 1, max: 80000}} name="price" render={({field})=>  <InputNumber {...field} />} > */}
            <p></p>
          </div>
          <div className="w-60">
            <SubmitBtn
              className={""}
              onClick={handleSubmit(onSubmit)}
              txt={"submit"}
              disabled={false}
              loading={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReceipt;
