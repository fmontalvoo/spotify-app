import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  private artista: any = {};
  private topTracks: any[] = [];
  public loading: boolean;
  public loadingError: boolean;
  public errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.loadingError = false;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string): void {
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artista = artist;
      this.loading = false;
    }, err => {
      this.loadingError = true;
      this.loading = false;
      this.errorMessage = err.error.error.message;
    });
  }

  getTopTracks(id: string): void {
    this.spotifyService.getTopTracks(id).subscribe(tracks => this.topTracks = tracks, err => {
      this.loadingError = true;
      this.loading = false;
      this.errorMessage = err.error.error.message;
    });
  }

  getArtista() {
    return this.artista;
  }

  getTracks() {
    return this.topTracks;
  }

}
