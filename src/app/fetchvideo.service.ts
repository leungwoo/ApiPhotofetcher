import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FreeVideo, Video } from './interface/Video';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FetchvideoService {
  constructor(private _http: HttpClient) {}

  public videoUrl =
    'https://api.pexels.com/videos/search?query=nature&per_page=1';

  getVideo(): Observable<Video> {
    return this._http.get<Video>(this.videoUrl);
  }
}
