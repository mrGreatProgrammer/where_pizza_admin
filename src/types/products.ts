export interface IProduct {
  id?: number;
  name: string;
  about: string;
  price: number | string;
  discount?: number | string | null | undefined;
  img: any;
  productLabelTxt?: any;
}

export type IProductsResponse = IProduct[];
// export type IProductsResponse = {
//   count: number;
//   items: IProduct[]
// }
// export interface IProductsResponse {

// }
