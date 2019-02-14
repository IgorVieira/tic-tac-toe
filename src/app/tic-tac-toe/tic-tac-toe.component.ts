import { Component, OnInit, Input } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';
import { sample, first, last } from 'lodash';
import { TicTacToeService } from './service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  @Input() showStart
  @Input() players
  typeX
  typeO

  constructor(private ticTacToeService: TicTacToeService, private toaster: ToasterService) { }

  ngOnInit() {
    this.ticTacToeService.inicializar();
  }

  showMessage(player: string, message: string) {
    this.toaster.pop('success', `${player}`, `${message}`);
  }

  get showMatch(): boolean {
  	return this.ticTacToeService.showMatch;
  }

  get showBoard(): boolean {
  	return this.ticTacToeService.showBoard;
  }

  get showFinal(): boolean {
  	return this.ticTacToeService.showFinal;
  }

  startGame(): void {
    this.typeX = sample(this.players)

    if(this.typeX === first(this.players)) {
      this.typeO = first(this.players)
    } else {
      this.typeO = last(this.players)
    }

  	this.ticTacToeService.startGame();
  }

  playGame(posX: number, posY: number): void {
    this.ticTacToeService.playGame(posX, posY);

    if(this.showFinal) {
      console.log(this.activePlayer)
      if(this.activePlayer === 1) {
        this.showMessage(`Player 2`, 'You Won!')
      } else if(this.activePlayer === 2) {
        this.showMessage(`Player 1`, 'You Won!')

      } else {
        this.showMessage('We have', 'a draw!' );
      }
    }
  }

  showTagX(posX: number, posY: number): boolean {
  	return this.ticTacToeService.showTagX(posX, posY);
  }

  showTagO(posX: number, posY: number): boolean {
  	return this.ticTacToeService.showTagO(posX, posY);
  }

  showVictory(posX: number, posY: number): boolean {
  	return this.ticTacToeService.showVictory(posX, posY);
  }

  get activePlayer(): number {
  	return this.ticTacToeService.activePlayer;
  }

  novoJogo(): void {
  	this.ticTacToeService.novoJogo();
  }


}
