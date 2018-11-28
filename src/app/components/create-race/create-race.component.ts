import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  constructor(
    private location: Location
  ) {}

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
