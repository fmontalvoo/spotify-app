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
      'Authorization': 'Bearer BQAzADlDzVBBCKzxlMf13yuaSl1MxKUt01qTifB6QH88TpqI2zo5HmhgvIL4DXe2_fqALXJqA4CB1lF3aHY'
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

  getArtist(id: string) {
    return this.getData(`${SpotifyService.URL}/artists/${id}`);
  }
}
