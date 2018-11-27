import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input('poney') poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()

  constructor() {}

  ngOnInit() {
    this.run()
  }

  handleClick() {
    this.win.emit(this.poney)
  }

  run() {
    this.poney.distance = 0

    setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 10) + 1
    }, 1000)
  }
}
