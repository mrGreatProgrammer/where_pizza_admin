import { Pagination, Spin } from "antd";
import React from "react";
import Product from "../../compoents/form/product/Product";
import SellerForm from "../../compoents/form/SellerForm/SellerForm";
import { useGetAllProductsQuery } from "../../http/service/productsService";
import { IProduct } from "../../types/products";

const SellerPage = () => {
  const [page, setPage] = React.useState(1);
  const { data, isError, isLoading, isFetching } = useGetAllProductsQuery(page);




  return (
    <div>
      <div>
        <div className="show__products-container">
        <SellerForm />
          {isLoading || isFetching ? <Spin /> : <></>}
          {isError && <div className="err_msg">error</div>}
          {data?.rows?.length ? (
            <div className="my-20">
              <div className="grid grid-cols-4 gap-x-4 gap-y-4 my-8 ">
                {data.rows.map((p: IProduct) => (
                  <Product
                    id={p.id}
                    about={p.about}
                    img={JSON.parse(p.img)}
                    name={p.name}
                    price={p.price}
                    discount={p.discount}
                    key={p.id}
                  />
                ))}
              </div>

              <div>
                <Pagination
                  onChange={setPage}
                  defaultCurrent={1}
                  total={data?.count}
                  hideOnSinglePage
                />
              </div>
            </div>
          ) : (
            <div>empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
