import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuEntry } from './menu-entry';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:4200/proxy/print/'

  constructor(private http: HttpClient) { }

  postPrintOrder(order : Map<MenuEntry, number>, total :  number) : Observable<boolean> {
    let plainOrder: any = {
      total: total,
      items: []
    }
    for(const [key, value] of order) {
      let plain : any = key
      plain.quantity = value
      plainOrder.items.push(plain)
    }
    console.log(plainOrder)
    return this.http.post<boolean>(this.baseUrl + 'order', plainOrder)
  }
}
