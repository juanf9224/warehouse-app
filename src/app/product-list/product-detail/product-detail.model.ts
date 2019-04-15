export interface IProductDetail {
  name: string;
  price: number;
  quantity: number;
  expirationDate?: Date;
  warranty?: Date;
}

export class ProductDetail implements IProductDetail {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public expirationDate?: Date,
    public warranty?: Date
  ) {}
}
