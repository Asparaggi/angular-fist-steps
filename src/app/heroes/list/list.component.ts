import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames = ['Spiderman', 'Ironman', 'Hulk', 'Shehulk', 'Thor']
  lastDeletedHero = ""

  removeHeroLastHero(): void {
    this.lastDeletedHero = this.heroNames.pop() ?? ""
  }
}
