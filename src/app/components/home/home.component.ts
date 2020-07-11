import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  private releases: any[] = Array();
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.releases = data
      this.loading = false;
    });
  }

  getReleases(): any[] {
    return this.releases
  }

}
