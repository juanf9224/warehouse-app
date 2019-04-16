import { IProductDetail } from 'src/app/product-list/product-detail/product-detail.model';

export interface IOrder {
    product: IProductDetail;
    itemsCount: number;
}
