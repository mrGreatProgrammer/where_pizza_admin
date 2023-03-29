import React from "react";
import AddProductForm from "../../compoents/form/product/AddProductForm";
import Product from "../../compoents/form/product/Product";
import { useGetAllProductsQuery } from "../../http/service/productsService";
import { IProduct } from "../../types/products";
import { Spin, Pagination, Empty } from "antd";
import pizzaEmpty from "../../imgs/empty-pizza-box.png";

const AllProducts = () => {
  const [page, setPage] = React.useState(1);
  const { data, isError, isLoading, isFetching } = useGetAllProductsQuery(page);

  return (
    <div>
      <h1>AllProducts</h1>
      <div>
        <div className="add__product-container">
          <AddProductForm />
        </div>
        <h3>products</h3>

        <div className="show__products-container">
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
            <Empty
                imageStyle={{
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                }}
                image={pizzaEmpty}
                description={
                  <p className="my-3 text-lg font-medium">
                    Продукты не найдены
                  </p>
                }
              />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
