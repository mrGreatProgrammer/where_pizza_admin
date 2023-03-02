import React from "react";
import AddProductForm from "../../compoents/form/product/AddProductForm";
import Product from "../../compoents/form/product/Product";
import { useGetAllProductsQuery } from "../../http/service/productsService";
import { IProduct } from "../../types/products";
import { Spin, Pagination } from "antd";

const AllProducts = () => {
  const [page, setPage] = React.useState(1);
  const { data, isError, isLoading, isFetching } = useGetAllProductsQuery(page);

  console.log(data);

  return (
    <div>
      <h1>AllProducts</h1>
      <div>
        <div className="add__product-container">
          <AddProductForm />
        </div>
        <h3>products</h3>

        <div className="show__products-container">
          {isLoading ||isFetching? <Spin />:<></>}
          {isError && <div className="err_msg">error</div>}
          {data?.count ? (
            <div className="my-20" >
              <div className="grid grid-cols-4 gap-x-4 gap-y-4 my-8 ">
                {data.rows.map((p: IProduct) => (
                  <Product
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

export default AllProducts;
