export interface IProductDetail {
  _id?: string;
  name?: string;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  quantity?: number;
  expirationDate?: Date;
  warranty?: Date;
}
