import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  id: number;
  title: string;
  thumbnailUrl?: string;
}

export interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums'; // список
  private photosUrl = 'https://jsonplaceholder.typicode.com/albums'; // тот же самый но для фото

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<Album> {
    return this.http.put<Album>(`${this.albumsUrl}/${id}`, { title: newTitle });
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.albumsUrl}/${id}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.photosUrl}/${albumId}/photos`);
  }

  getFirstPhotoByAlbumId(albumId: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.photosUrl}/${albumId}/photos?_limit=1`);
  }
}