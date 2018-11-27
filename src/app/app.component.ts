import { Component, ViewEncapsulation } from '@angular/core';
import { Poney } from './interfaces/poney';
import { Race } from './interfaces/race';
import { RacingService } from './services/racing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ambient IT';

  races: Race[] = []

  constructor(private racingService: RacingService) {}

  ngOnInit() {
    this.races = this.racingService.races
  }
}
