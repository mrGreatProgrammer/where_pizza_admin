import { Button, notification } from "antd";
import React from "react";
import { useDeleteProductMutation } from "../../../http/service/productsService";
import { DeleteIcon } from "../../../imgs/icons";
import { IProduct } from "../../../types/products";
import DeleteModal from "../../Modals/ConfirmModals/DeleteModal";
import EditModal from "../../Modals/ConfirmModals/EditModal";
import BtnChooseProduct from "../Btns/BtnChooseProduct";
// import BtnChooseProduct from "../../forms/Buttons/BtnChooseProduct";
// import ModalProduct from "../../Modal/ModalProduct";
// import ProductLabel from "../../ui/ProductLabel/ProductLabel";
import EditIcon from "./../../../imgs/icons/EditIcon";

const Product = ({
  id,
  about,
  img,
  name,
  price,
  discount,
  productLabelTxt,
}: IProduct): JSX.Element => {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [deleteProductApi, { data, isError, isSuccess, isLoading }] =
    useDeleteProductMutation();

  function showModal() {}
  function closeModal() {}

  function deleteProduct() {
    deleteProductApi(id).then((e: any) => {
      if (e?.data?.message === "success") {
        notification.open({
          type: "success",
          message: "Success",
          description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
          duration: 5,
        });
      } else {
        notification.open({
          type: "error",
          message: "ERROR",
          description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
          duration: 5,
        });
      }
    });
    setDeleteModal(false);
  }

  return (
    <>
      <div className="product__card bg-white border border-lineGray rounded-[20px]">
        <div className="relative flex flex-row md:flex-col">
          {/* {productLabelTxt && (
            <ProductLabel productLabelTxt={productLabelTxt} />
          )} */}
          <div className="product__img-container flex items-center justify-center  ">
            <img
              className="product__img-img rounded-3xl"
              src={`${process.env.REACT_APP_API_URL}${img[0]}`}
              alt={"ppprroduct"}
            />
          </div>
          <div className="mt-4 pt-4 px-5 pb-5">
            <div className="flex flex-col h-[92px]">
              <div className="product__name-container">
                <h6
                  onClick={() => {
                    setModalVisibility(true);
                  }}
                  className="product__name text-sm md:text-lg font-semibold"
                >
                  {name}
                </h6>
              </div>
              <div className="product__reciepe-container mt-3 text-xs md:text-base w-44 md:max-w-[260px] h-full flex items-center">
                <p className="truncate">{about}</p>
              </div>
            </div>
            <div className="product__bottom_content-container mt-4 flex flex-row justify-between">
              <div className="product__price-container flex flex-row-reverse md:flex-col items-center md:items-start">
                {discount && (
                  <s className="product__discount text-sm text-txtGrey">
                    {discount} ₽
                  </s>
                )}
                <p className="product__price text-primery text-sm md:text-lg font-semibold bg-lightPrimery md:bg-transparent rounded-md py-1.5 px-4 md:py-0 md:px-0  mr-3 md:mr-0">
                  от {price} ₽
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-4 mb-2">
              <Button type="primary" onClick={() => setEditModal(true)}>
                <EditIcon />
              </Button>
              <Button onClick={() => setDeleteModal(true)}>
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </div>

        <EditModal open={editModal} onCancel={() => setEditModal(false)} />
        <DeleteModal
          open={deleteModal}
          onCancel={() => setDeleteModal(false)}
          onOk={deleteProduct}
        />
      </div>
      {/* <ModalProduct
        setModalVisibility={setModalVisibility}
        modalVisibility={modalVisibility}
      /> */}
    </>
  );
};

export default Product;
