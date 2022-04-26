import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPhotos } from './interface/Photos';
@Injectable({
  providedIn: 'root',
})
export class FetchphotoService {
  constructor(private _http: HttpClient) {}

  getPhoto() {
    return this._http.get<ApiPhotos>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 8iZog0Yb_ygZ0ejXy3sFcx3sk5HZ5aF2y-3rXZfZVPI',
      },
    });
  }
}
