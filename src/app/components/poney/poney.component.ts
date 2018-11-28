import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input('poney') poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  intervalId: any
  @ViewChild('poneyImg') poneyImg

  constructor() {}

  ngOnInit() {
  
    this.run()

    this.poneyImg.nativeElement.style.transform = 'scale(1)'
  }

  run() {
    this.poney.distance = 0

    this.intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 10) + 1

      if (this.poney.distance >= 85) {
        this.win.emit(this.poney)
        this.poney.distance = 85
        this.stopRunning()
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }
}
