import { Component, Input } from '@angular/core';
import { MenuEntry } from '../menu-entry';
import { MenuCategories } from '../menu-categories';
import { OrderService } from '../order.service';

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
  total: number = 0

  constructor(private orderService: OrderService) { }

  addEntry(entry: MenuEntry): void {
    this.order.set(entry, (this.order.get(entry) ?? 0) + 1)
    this.catPresent.set(entry.categoryID, (this.catPresent.get(entry.categoryID) ?? 0) + 1)
    this.total += entry.price
  }

  removeEntry(entry: MenuEntry): void {
    this.order.set(entry, (this.order.get(entry) ?? 0) - 1)
    if (this.order.get(entry) === 0) {
      this.order.delete(entry)
    }
    this.catPresent.set(entry.categoryID, (this.catPresent.get(entry.categoryID) ?? 0) - 1)
    this.total -= entry.price
  }

  printAndClear(): void {
    this.orderService.postPrintOrder(this.order, this.total).subscribe(res => {
      this.order.clear()
      this.catPresent.clear()
      this.total = 0
      console.log(res)
    })
  }
}
