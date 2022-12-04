import { Component, ViewChild } from '@angular/core';
import { MenuEntry } from './menu-entry';
import { MenuCategories } from './menu-categories';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sagraPOS';

  categories: MenuCategories[] = [
    { id: 0, name: 'Primi' },
    { id: 1, name: 'Secondi' },
    { id: 2, name: 'Bere' },
    { id: 3, name: 'Dolci' }
  ]

  menu: MenuEntry[] = [
    { id: 1, name: 'Capponadda', price: 8, category: 0 },
    { id: 2, name: 'Trofie', price: 6, category: 0 },
    { id: 3, name: 'Testarolo Pesto', price: 4, category: 0 },
    { id: 4, name: 'Salsiccia e patatine', price: 4, category: 1 },
    { id: 5, name: 'Patatine', price: 4, category: 1 },
    { id: 6, name: 'Frittura Acciughe', price: 4, category: 1 },
    { id: 7, name: 'Acqua Nat', price: 1, category: 2 },
    { id: 8, name: 'Acqua Friz', price: 1, category: 2 },
    { id: 9, name: 'Vino Rosso', price: 3, category: 2 },
    { id: 10, name: 'Vino Bianco', price: 3, category: 2 },
    { id: 11, name: 'Testarolo Nutella', price: 3, category: 3 },
    { id: 12, name: 'Meringa', price: 3, category: 3 },
  ]

  @ViewChild('sidenav') sidenav!: MatDrawer;

  ngOnInit(): void {
    // TODO Call to backend here
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidenav.open()
    })
  }
}
