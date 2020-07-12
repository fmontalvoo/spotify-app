import { Component } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  private artists: any[] = Array();
  public loading: boolean;
  public loadingError: boolean;
  public errorMessage: string;

  constructor(private spotifyService: SpotifyService) { }

  buscar(query: string) {
    if (query.length > 0) {
      this.loading = true;
      this.spotifyService.getByArtist(query).subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      }, err => {
        this.loadingError = true;
        this.loading = false;
        this.errorMessage = err.error.error.message;
      });
    }
  }

  getArtists() {
    return this.artists;
  }

}
