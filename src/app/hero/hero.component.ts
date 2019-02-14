import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from './service';
import { Character } from '../model/character';
import { first, isEmpty } from 'lodash';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() playerId;
  @Input() playerName;
  @Output() heroDefined = new EventEmitter<any>();
  heroName: string = '';
  player: Character;

  constructor(
    private heroService: HeroService,
    private toasterService: ToasterService) {}

  loadPlayer(text: string) {

    if(isEmpty(text)) {
      this.showMessage('Plese, Enter a Name!')
    } else {
      this.heroService
        .getCharacter(text)
        .then(res => {
          if (isEmpty(res)) {
            this.showMessage('Hero not found!')
          } else {
            this.player = first(res)
            this.heroDefined.emit(this.playerId)
          }

          this.heroName = '';
        })
        .catch(err => {throw new Error(err)})
    }
  }

  showMessage(message: string) {
    this.toasterService.pop('warning', message);
  }


}
