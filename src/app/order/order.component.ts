import { Component } from '@angular/core';
import { MenuEntry } from '../menu-entry';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order : string[] = []
  addEntry(entry: MenuEntry) : void {
    this.order.push(entry.name)
  }
}
