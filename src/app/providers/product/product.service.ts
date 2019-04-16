import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProductDetail } from '../../product-list/product-detail/product-detail.model';

type ResponseBody = HttpResponse<IProductDetail>;
type ResponseArray = HttpResponse<IProductDetail[]>;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  resourceUrl = 'http://localhost:5000/api/v1/products';

  constructor(private http: HttpClient) { }

  findAll(): Observable<ResponseArray> {
    return this.http.get<IProductDetail[]>(this.resourceUrl, {observe: 'response'});
  }

  findAllById(ids: string[]): Observable<ResponseArray> {
    return this.http.post<IProductDetail[]>(`${this.resourceUrl}/findAllById`, ids, {observe: 'response'});
  }

  find(id: string): Observable<ResponseBody>  {
    return this.http.get<IProductDetail>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  saveProduct(product: IProductDetail): Observable<ResponseBody> {
    return this.http.post<IProductDetail>(this.resourceUrl, product, { observe: 'response' });
  }

  update(product: IProductDetail): Observable<ResponseBody> {
    return this.http.put<IProductDetail>(`${this.resourceUrl}/${product._id}`, product, { observe: 'response' });
  }
}
