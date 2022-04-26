import { Component, OnInit } from '@angular/core';
import { FetchvideoService } from '../fetchvideo.service';
import { Video, VideoFile } from '../interface/Video';

@Component({
  selector: 'app-display-video',
  templateUrl: './display-video.component.html',
  styleUrls: ['./display-video.component.css'],
})
export class DisplayVideoComponent implements OnInit {
  constructor(private fetchvideo: FetchvideoService) {}
  public videos: Video[] = [];

  ngOnInit(): void {
    this.fetchvideo
      .getVideo()
      .subscribe((response) => (this.videos = response.videos));
  }
}
