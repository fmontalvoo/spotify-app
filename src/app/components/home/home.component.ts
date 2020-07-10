import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  private releases: any[] = Array();

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().subscribe((data: any) =>
      this.releases = data
    );
  }

  ngOnInit(): void {
  }

  getReleases(): any[] {
    return this.releases
  }

}
