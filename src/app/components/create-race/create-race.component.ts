import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Observable } from 'rxjs';
import { RacingService } from 'src/app/services/racing.service';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'amb-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  ponies$: Observable<Poney[]>
  raceForm: FormGroup

  constructor(
    private location: Location,
    private racingService: RacingService
  ) {}

  ngOnInit() {
    this.ponies$ = this.racingService.ponies

    this.raceForm = new FormGroup({
      name: new FormControl('', [Validators.required, this.firstLetter('M')], [this.nameTaken.bind(this)]),
      poneyIds: new FormControl([], [Validators.required, Validators.minLength(2)])
    })
  }

  firstLetter(letter: string): ValidatorFn {

    return (control: FormControl) => {
      if (control.value.charAt(0) === letter) {
        return undefined
      }
  
      return { firstLetter: true }
    }

  }

  nameTaken(control: FormControl): Observable<ValidationErrors | undefined> {

    return this.racingService.races.pipe(map(races => {
      return races.find(race => race.name === control.value) ? {nameTaken: true} : undefined
    }))

  }

  goBack() {
    this.location.back()
  }

  handleSubmit() {
    this.racingService.createRace(this.raceForm.value).subscribe(() => {
      this.goBack()
    })
  }

}
