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
      'Authorization': 'Bearer BQB8_hJqOXWK7j5RhgtdTFSN-3BjnXR9z_jZjdCu8p2X568WMVipokYBs_kRSU_9GmpwMrGXvHqyqjflWWM'
    });
  }

  getData(path: string) {
    return this.http.get(`${SpotifyService.URL}/${path}`, { headers: this.headers });
  }

  getNewReleases() {
    return this.getData(`browse/new-releases?limit=20`)
      .pipe(map(data => data['albums'].items));
  }

  getByArtist(query: string) {
    return this.getData(`search?q=${query}&type=artist&limit=10`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getData(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getData(`artists/${id}/top-tracks?country=es`)
      .pipe(map(data => data['tracks']));
  }
}
