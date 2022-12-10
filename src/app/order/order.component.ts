import { Component, Input } from '@angular/core';
import { MenuEntry } from '../menu-entry';
import { MenuCategories } from '../menu-categories';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input() categories: MenuCategories[] = [];
  @Input() menu: MenuEntry[] = [];

  order: Map<MenuEntry, number> = new Map()
  catPresent: Map<number, number> = new Map()

  addEntry(entry: MenuEntry): void {
    this.order.set(entry, (this.order.get(entry) ?? 0) + 1)
    this.catPresent.set(entry.categoryID, (this.catPresent.get(entry.categoryID) ?? 0) + 1)
  }

  removeEntry(entry: MenuEntry): void {
    this.order.set(entry, (this.order.get(entry) ?? 0) - 1)
    this.catPresent.set(entry.categoryID, (this.catPresent.get(entry.categoryID) ?? 0) - 1)
  }
}
