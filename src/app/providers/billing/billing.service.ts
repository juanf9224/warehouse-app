import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  resourceUrl = environment.baseApisUrl + 'api/v1/checkout';
  constructor(
    private http: HttpClient
  ) {}

  makePayment(payment): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.resourceUrl, payment, {observe: 'response'});
  }
}
