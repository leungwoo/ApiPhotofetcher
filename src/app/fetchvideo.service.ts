import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FreeVideo, Video } from './interface/Video';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FetchvideoService {
  constructor(private _http: HttpClient) {}

  getVideo() {
    return this._http.get<FreeVideo>(
      'https://api.pexels.com/videos/search?query=caribbean&per_page=1',
      {
        headers: {
          Authorization:
            '563492ad6f9170000100000175fc3791ef6f4a68905ee387fd4448bc',
        },
      }
    );
  }
}
