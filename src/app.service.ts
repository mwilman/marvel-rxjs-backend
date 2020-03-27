import { HttpService, Injectable } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {
  }

  getHeroes(name: string) {
    let URL = 'https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=dc98babb5a914cce3258693779c3e1b5&hash=34d63b967e6935a3f8456bf1ca7dce48';
    if (name) {
      URL = `${URL}&nameStartsWith=${name}`
    }
    console.log(URL);
    return this.http
      .get(URL)
      .pipe(
        map(res => res.data.data.results)
      );
  }
}
