import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Observable } from 'rxjs';
import { RacingService } from 'src/app/services/racing.service';

@Component({
  selector: 'amb-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  ponies$: Observable<Poney[]>

  constructor(
    private location: Location,
    private racingService: RacingService
  ) {}

  ngOnInit() {
    this.ponies$ = this.racingService.ponies
  }

  goBack() {
    this.location.back()
  }

}
