import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'ironman'
  age = 45
  showAge = true
  showName = true
  showReset = false

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'spiderman'
    this.showName = false
    this.showReset = true
  }

  changeAge(): void {
    this.age = 35
    this.showAge = false
    this.showReset = true
  }

  reset(): void {
    this.age = 45
    this.name = 'ironman'
    this.showName = true
    this.showAge = true
    this.showReset = false
  }
}
