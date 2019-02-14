import { Injectable } from '@angular/core';

@Injectable()
export class TicTacToeService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private MOVES: number;
  private victory: any;

  private _player: number;
  private _showTheBegin: boolean;
  private _showTheBoard: boolean;
  private _showFinal: boolean;

  constructor() { }

  inicializar() {
    this._showTheBegin = true;
    this._showTheBoard = false;
    this._showFinal = false;
    this.MOVES = 0;
    this._player = this.X;
    this.victory = false;
    this.mainBoard();
  }

  mainBoard() {
    this.board = [this.TAM_TAB];

    for (let i = 0; i < this.TAM_TAB; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  get showMatch() {
    return this._showTheBegin;
  }

  get showBoard() {
    return this._showTheBoard;
  }

  get showFinal() {
    return this._showFinal;
  }

  get activePlayer(): number {
    return this._player;
  }

  startGame() {
    this._showTheBegin = false;
    this._showTheBoard = true;
  }

  playGame(posX: number, posY: number) {

    // Wrong movement
    if (this.board[posX][posY] !== this.EMPTY ||
      this.victory) {
      return;
    }

    this.board[posX][posY] = this._player;
    this.MOVES++;
    this.victory = this.endTheGame(posX, posY,
    this.board, this._player);
    this._player = (this._player === this.O) ? this.X : this.O;

    if (this.victory !== false) {
      this._showFinal = true;
    }

    if (!this.victory && this.MOVES === 9) {
      this._player = 0;
      this._showFinal = true;
    }
  }

  endTheGame(linha: number, column: number,
    board: any, activePlayer: number) {
    let end: any = false;

    if (board[linha][0] === activePlayer &&
      board[linha][1] === activePlayer &&
      board[linha][2] === activePlayer) {
      end = [[linha, 0], [linha, 1], [linha, 2]];
    }

    if (board[0][column] === activePlayer &&
      board[1][column] === activePlayer &&
      board[2][column] === activePlayer) {
      end = [[0, column], [1, column], [2, column]];
    }

    if (board[0][0] === activePlayer &&
      board[1][1] === activePlayer &&
      board[2][2] === activePlayer) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if (board[0][2] === activePlayer &&
      board[1][1] === activePlayer &&
      board[2][0] === activePlayer) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;
  }


  showTagX(posX: number, posY: number) {
    return this.board[posX][posY] === this.X;
  }

  showTagO(posX: number, posY: number) {
    return this.board[posX][posY] === this.O;
  }

  showVictory(posX: number, posY: number) {
    let showVictory: boolean = false;

    if (!this.victory) {
      return showVictory;
    }

    for (let pos of this.victory) {
      if (pos[0] === posX && pos[1] === posY) {
        showVictory = true;
        break;
      }
    }

    return showVictory;
  }

  novoJogo(): void {
    this.inicializar();
    this._showFinal = false;
    this._showTheBegin = false;
    this._showTheBoard = true;
  }

}
