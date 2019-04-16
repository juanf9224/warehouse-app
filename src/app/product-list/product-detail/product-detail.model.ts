export interface IProductDetail {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  expirationDate?: Date;
  warranty?: Date;
}

export class ProductDetail implements IProductDetail {
  constructor(
    public id?: number,
    public name?: string,
    public price?: number,
    public quantity?: number,
    public expirationDate?: Date,
    public warranty?: Date
  ) {}
}
