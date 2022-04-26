import { Component, OnInit } from '@angular/core';
import { FetchphotoService } from '../fetchphoto.service';

@Component({
  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrls: ['./displayphoto.component.css'],
})
export class DisplayphotoComponent implements OnInit {
  public urlImage: string | undefined;

  constructor(private fetchphotoService: FetchphotoService) {}
  onClick() {
    this.fetchphotoService
      .getPhoto()
      .subscribe((m) => (this.urlImage = m.urls.regular));
  }
  ngOnInit(): void {
    this.fetchphotoService
      .getPhoto()
      .subscribe((m) => (this.urlImage = m.urls.regular));
    {
    }
  }
}
