import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  playerOne: boolean
  playerTwo: boolean
  playerNameOne: string
  playerNameTwo: string
  players: ['Player 1', 'Player 2']
  isVisible: boolean

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    this.isVisible = true;
    this.randomPlayer()
  }

  randomPlayer() {
    this.players = ['Player 1', 'Player 2'];
    const player = this.players[Math.floor(Math.random() * this.players.length)];

    this.playerNameOne = player;

    if(this.playerNameOne === 'Player 1') {
      this.playerNameTwo = 'Player 2'
    } else {
      this.playerNameTwo = 'Player 1'
    }
  }

  setHero(hero) {
    this[hero] = true
  }

}
