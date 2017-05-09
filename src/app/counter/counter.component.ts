import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <button (click) = "decrement()">
        -
      </button>
      <input type="text" [value]="count">
       <button (click) = "increment()">
        +
      </button>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  count: number = 0;  

  ngOnInit() {
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
