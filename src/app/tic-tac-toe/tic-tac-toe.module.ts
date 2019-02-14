import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeService } from './service';


@NgModule({
  declarations: [TicTacToeComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    TicTacToeComponent
  ],
  providers: [
    TicTacToeService
  ]
})
export class TicTacToeModule {


}
