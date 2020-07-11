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

  private artista = {};
  public loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string): void {
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artista = artist;
      this.loading = false;
    });
  }

  getArtista() {
    return this.artista;
  }
}
