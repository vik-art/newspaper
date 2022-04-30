import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../common/article.interface';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    const params = new HttpParams()
    .set("_limit", 15)
    return this.http.get<Article[]>(environment.articlesUrl, {params: params})
  }

  getById(id:number): Observable<Article> {
    return this.http.get<Article>(`${environment.articlesUrl}/${id}`)
  }
}
