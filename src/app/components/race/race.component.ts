import { RacingService } from 'src/app/services/racing.service';
import { FilterPoniesPipe } from './../../pipes/filter-ponies.pipe';
import { Component, OnInit, Input } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Race } from 'src/app/interfaces/race';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  race: Race

  constructor(
    private filterPoniesPipe: FilterPoniesPipe,
    private racingService: RacingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.race = this.racingService.getRaceById(params.id)
    })

    this.ponies = this.racingService.ponies
  }

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
  }

  listPonies() {
    console.log(this.filterPoniesPipe.transform(this.ponies, this.race.poneyIds))
  }

  ponies: Poney[] = []

}
