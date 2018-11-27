import { Component, OnInit, Input } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Race } from 'src/app/interfaces/race';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
  }

  @Input() race: Race

}
