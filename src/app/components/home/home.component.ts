import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/interfaces/race';
import { RacingService } from 'src/app/services/racing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'amb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  races$: Observable<Race[]>

  constructor(private racingService: RacingService) {}

  ngOnInit() {
    this.races$ = this.racingService.races
  }

}
