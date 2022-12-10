import { Component, ViewChild } from '@angular/core';
import { MenuEntry } from './menu-entry';
import { MenuCategories } from './menu-categories';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuService } from './menu.service';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sagraPOS';
  menus: Menu[] = []
  categories: MenuCategories[] = []
  menuEntries: MenuEntry[] = []

  constructor(private menuService: MenuService) { }

  @ViewChild('sidenav') sidenav!: MatDrawer;

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(menus => this.menus = menus)
    this.menuService.getCategories(1).subscribe(categories => this.categories = categories)
    this.menuService.getMenuEntries(1).subscribe(menuEntries => this.menuEntries = menuEntries)
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenav.open()
    })
  }
}
