import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  static URL: string = "https://api.spotify.com/v1";

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer '
    });
  }

  getData(url: string) {
    return this.http.get(url, { headers: this.headers });
  }

  getNewReleases() {
    return this.getData(`${SpotifyService.URL}/browse/new-releases?limit=20`)
      .pipe(map(data => data['albums'].items));
  }

  getByArtist(query: string) {
    return this.getData(`${SpotifyService.URL}/search?q=${query}&type=artist&limit=10`)
      .pipe(map(data => data['artists'].items));
  }
}
