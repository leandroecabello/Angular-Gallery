import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../interfaces/Image';
import { Global } from './Global';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public url: string ;

  constructor(private http: HttpClient) {
      this.url = Global.url;
  }

  createImage( title: string, description: string, image: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', image);
    console.log(image);
    return this.http.post(`${this.url}/createPhoto`, fd);
  }

  getImages() {
    return this.http.get<Image[]>(this.url);
  }

  getImageById(id: string) {
    return this.http.get<Image>(`${this.url}/${id}`);
  }

  updateImage(id: string, title: string, description: string) {
    return this.http.put(`${this.url}/editPhoto/${id}`, {title, description});
  }

  deleteImage(id: string) {
    return this.http.delete(`${this.url}/deletePhoto/${id}`);
  }
}
