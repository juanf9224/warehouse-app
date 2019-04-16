import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  resourceUrl = 'http://localhost:5000/api/v1/checkout';
  constructor(
    private http: HttpClient
  ) {}

  makePayment(payment): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.resourceUrl, payment, {observe: 'response'});
  }
}
