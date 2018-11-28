import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';

@Injectable({
  providedIn: 'root'
})
export class RacingService {

  private _ponies: Poney[] = [
    {
      id: 0,
      name: "Romain",
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    },
    {
      id: 1,
      name: "Jeremy",
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    },
    {
      id: 2,
      name: "Jason",
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif"
    }
  ]

  private _races: Race[] = [
    {
      id: 0,
      name: "Tokyo",
      poneyIds: [1, 2]
    },
    {
      id: 1,
      name: "Madrid",
      poneyIds: [0, 1]
    }
  ]

  constructor() {}

  get ponies(): Poney[] {
    return this._ponies
  }

  get races(): Race[] {
    return this._races
  }

  getRaceById(id: number): Race {
    return this.races.find(race => race.id == id)
  }
}
