import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

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
  styles: [`
    .counter {
      position: relative;
    }
    input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
    }
    button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `],
})
export class CounterComponent implements OnInit {

  @Input() 
  count: number = 0;  


  
  @Output() 
  change: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }



  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}
