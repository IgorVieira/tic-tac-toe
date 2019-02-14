import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl: string = 'http://gateway.marvel.com/v1/public'
  private baseType: string = 'characters'
  private apiKey: string = '058792e99f804e01f47b78f008e41e2f'
  private hash: string = 'dc34d0cc8602b31155a21644bdeee016'
  private timeStamp: string = '1'
  private hero: string = ''

  constructor(private http: HttpClient) { }

  getCharacter(heroName: string) {
    return this.http
      .get(`${this.baseUrl}/${this.baseType}?name=${heroName}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.hash}`)
      .toPromise()
      .then((res:any) => res.data.results.map( character => {
        const { id, name, thumbnail } = character;
        return {
          id,
          name,
          thumbnail
        }
      }))
      .catch(err => { throw new Error(err)})
  }
}
