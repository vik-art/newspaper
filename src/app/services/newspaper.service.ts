import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<any> {
    const params = new HttpParams()
    .set("_limit", 15)
    return this.http.get(environment.articlesUrl, {params: params})
  }
}
