import React from "react";
import { IProduct } from "../../../types/products";
import MyInput from "../Input/Input";
import { Controller, useForm } from "react-hook-form";
import {
  useAddProductMutation,
  useGetGroupByProductsQuery,
  useGetGroupOfProductsQuery,
  useGetRecipeOfProductsQuery,
} from "../../../http/service/productsService";
import SubmitBtn from "../Btns/SubmitBtn/SubmitBtn";
import UploadForm from "../Btns/UploadForm";
import UploadFile from "../Btns/UploaderFile";
import FileInput from "../Btns/FileInput";
import { Form, Input, Select } from "antd";
import { errorDetail, hasErrorClass } from "../../../utils/errHanlder";
import showNotification from "../../../utils/showNotification";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    unregister,
    control,
  } = useForm<any>({ mode: "onChange" });

  const [addProduct, { isError, isLoading, isSuccess }] =
    useAddProductMutation();

  const {
    data: ingredients,
    isLoading: ingredientsLoading,
    isError: ingredientsErr,
    //@ts-ignore
  } = useGetRecipeOfProductsQuery();
  const {
    data: groupsOfProducts,
    isError: groupsOfProductsErr,
    isLoading: groupsOfProductsLoading,
    //@ts-ignore
  } = useGetGroupOfProductsQuery();

  const handlerSubmit = (data: any) => {
    console.log(data);
    addProduct(data).then((res) => {
      console.log("res", res);
      showNotification("success", "Успешно", "Продукт успешно создан!");
    });
    // console.log(d);
    // if (isSuccess) {
    //   showNotification("success", "ssss", "gfafgagfafga");
    // }else if(isError){
    //   showNotification("error", "error", "error gfafgagfafga");
    // } else {
    //   showNotification("info", "error", "error gfafgagfafga");
    // }
  };

  return (
    <div className="px-8">
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
        <div className="grid grid-cols-4">
          <div className="w-60">
            <MyInput
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
          </div>
          <div className="w-60">
            <MyInput
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
          </div>
          <div className="w-60">
            <MyInput
              className={""}
              elId={""}
              formController={register("discount")}
              inpName={"discount"}
              inpType={"text"}
              defaultValue={""}
              errMsg={errors.discount?.message}
              label={"скидка"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="w-96">
            <Controller
              name="ingredients"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={<span className="text-txtGrey">ingredients</span>}
                  labelAlign="left"
                  {...hasErrorClass("ingredients", errors)}
                >
                  <Select
                    {...field}
                    style={{ width: "100%" }}
                    loading={ingredientsLoading}
                    showSearch
                    mode="multiple"
                    allowClear={true}
                  >
                    {ingredients?.map((e: any, id: number) => (
                      <Select.Option key={id} value={e.id}>
                        <div className="flex flex-row gap-x-1">
                          <div className="border-r-gray-500 border-r w-28">
                            {e.name}
                          </div>
                          <div>{e.price}$</div>
                        </div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
              rules={{
                required: {
                  value: true,
                  message: "the field required",
                },
              }}
            />
            <div
              className="err_msg"
              dangerouslySetInnerHTML={{
                __html: errorDetail("ingredients", errors),
              }}
            />
          </div>
          <div className="my-5 w-60">
            <Controller
              name="productsGroupId"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={<span className="text-txtGrey">productsGroupId</span>}
                  labelAlign="left"
                  {...hasErrorClass("productsGroupId", errors)}
                >
                  <Select
                    {...field}
                    style={{ width: "100%" }}
                    loading={groupsOfProductsLoading}
                    showSearch
                    allowClear={true}
                  >
                    {groupsOfProducts?.map((e: any, id: number) => (
                      <Select.Option key={e.title} value={e.id}>
                        {e.title}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
              rules={{
                required: {
                  value: true,
                  message: "the field required",
                },
              }}
            />
            <div
              className="err_msg"
              dangerouslySetInnerHTML={{
                __html: errorDetail("productsGroupId", errors),
              }}
            />
          </div>
        </div>
        <div>
          <div className="w-96">
            <Controller
              name="about"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={<span className="text-txtGrey">about</span>}
                  labelAlign="left"
                  {...hasErrorClass("about", errors)}
                >
                  <Input.TextArea
                    {...field}
                    // className={""}
                    // elId={""}
                    // formController={register("about", {
                    //   required: {
                    //     value: true,
                    //     message: "Обязательное поле",
                    //   },
                    //   minLength: {
                    //     value: 6,
                    //     message: "Минимум 6 символов",
                    //   },
                    // })}
                    // inpName={"about"}
                    // inpType={"text"}
                    // defaultValue={""}
                    // errMsg={errors.about?.message}
                    // label={"о продукте"}
                  />
                </Form.Item>
              )}
              rules={{
                required: {
                  value: true,
                  message: "the field required",
                },
              }}
            />
            <div
              className="err_msg"
              dangerouslySetInnerHTML={{
                __html: errorDetail("about", errors),
              }}
            />
          </div>
        </div>
        <div className="w-60">
          <SubmitBtn
            className={""}
            onClick={() => {}}
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
