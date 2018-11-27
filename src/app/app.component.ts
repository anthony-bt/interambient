import { Component, ViewEncapsulation } from '@angular/core';
import { Poney } from './interfaces/poney';
import { Race } from './interfaces/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ambient IT';

  ponies: Poney[] = [
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

  races: Race[] = [
    {
      id: 0,
      name: "Tokyo",
      ponies: [
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
    },
    {
      id: 1,
      name: "Madrid",
      ponies: [
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
    }
  ]
}
