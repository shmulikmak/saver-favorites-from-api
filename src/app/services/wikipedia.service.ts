import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class WikipediaService {

  BASE_URL = 'https://en.wikipedia.org/w/api.php?';

  constructor(private httpClient: HttpClient) { }

  search(term: string) {
    let params = new HttpParams();
    params = params.append('action', 'opensearch');
    params = params.append('search', term);
    params = params.append('format', 'json');
    params = params.append('origin', '*');
    params = params.append('limit', '51');
    return this.httpClient.get(this.BASE_URL, { params: params });
  }

}
