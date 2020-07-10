import { Component } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  constructor(private spotifyService: SpotifyService) { }

  buscar(query: string) {
    this.spotifyService.getByArtist(query).subscribe((data: any) => {
      console.log(data);
    });
  }

}
