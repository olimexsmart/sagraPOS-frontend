import { Component } from '@angular/core';
import { MenuEntry } from './menu-entry';
import { MenuCategories } from './menu-categories';

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
    { name: 'Capponadda', price: 8, category: 0 },
    { name: 'Trofie', price: 6, category: 0 },
    { name: 'Testarolo Pesto', price: 4, category: 0 },
    { name: 'Salsiccia e patatine', price: 4, category: 1 },
    { name: 'Patatine', price: 4, category: 1 },
    { name: 'Frittura Acciughe', price: 4, category: 1 },
    { name: 'Acqua Nat', price: 1, category: 2 },
    { name: 'Acqua Friz', price: 1, category: 2 },
    { name: 'Vino Rosso', price: 3, category: 2 },
    { name: 'Vino Bianco', price: 3, category: 2 },
    { name: 'Testarolo Nutella', price: 3, category: 3 },
    { name: 'Meringa', price: 3, category: 3 },
  ]

  ngOnInit(): void {
  }
}
