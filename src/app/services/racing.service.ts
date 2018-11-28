import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RacingService {

  private _ponies: Poney[] = []
  private _races: Race[] = []
  API_URL: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) {}

  get ponies(): Observable<Poney[]> {
    return this.http.get(`${this.API_URL}/ponies`)
      .pipe(map(ponies => <Poney[]>ponies))
  }

  get races(): Observable<Race[]> {
    return this.http.get(`${this.API_URL}/races`)
      .pipe(map(races => <Race[]>races))
  }

  getRaceById(id: number): Observable<Race> {
    return this.races
      .pipe(map(races => {
        return races.find(race => race.id === id)
      }))
  }
}
