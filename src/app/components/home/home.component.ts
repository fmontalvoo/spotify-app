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
  public loadingError: boolean;
  public errorMessage: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.loadingError = false;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.releases = data
      this.loading = false;
    }, err => {
      this.loadingError = true;
      this.loading = false;
      this.errorMessage = err.error.error.message;
    });
  }

  getReleases(): any[] {
    return this.releases
  }

}
