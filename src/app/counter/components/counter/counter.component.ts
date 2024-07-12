import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter = 10;

  increaseBy(n: number) {
    this.counter +=n;
  }

  resetCounter() {
    this.counter = 10;
  }
}
