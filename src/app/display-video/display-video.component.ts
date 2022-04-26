import { Component, OnInit } from '@angular/core';
import { FetchvideoService } from '../fetchvideo.service';
import { Video, VideoFile } from '../interface/Video';

@Component({
  selector: 'app-display-video',
  templateUrl: './display-video.component.html',
  styleUrls: ['./display-video.component.css'],
})
export class DisplayVideoComponent implements OnInit {
  public video: VideoFile[] = [];
  constructor(private fetchvideo: FetchvideoService) {}

  ngOnInit(): void {
    this.fetchvideo
      .getVideo()
      .subscribe((video) => (this.video = video.video_files));
  }
}
