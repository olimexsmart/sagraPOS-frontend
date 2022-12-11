import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MenuCategories } from './menu-categories';
import { MenuEntry } from './menu-entry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl = 'http://localhost:4200/proxy/db/'

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.baseUrl + 'getMenus/')
  }

  getCategories(menuID: number): Observable<MenuCategories[]> {
    return this.http.get<MenuCategories[]>(this.baseUrl + `getMenuCategories/${menuID}`)
  }

  getMenuEntries(menuID: number): Observable<MenuEntry[]> {
    return this.http.get<MenuEntry[]>(this.baseUrl + `getMenuEntries/${menuID}`)
  }
}
