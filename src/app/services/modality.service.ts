import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class ModalityService {

  public urlBase = environment.urlAPI + 'contato';

  constructor(private http: HttpClient) { }

  public getAllContatos(page?: number, itemsPerPage?: number) : Observable<PaginationResult<Contato[]>>
  {
    const paginationResult: PaginationResult<Contato[]> = new PaginationResult<Contato[]>();

    let params = new HttpParams();

    if(page != null && itemsPerPage != null)
    {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
    }

    return this.http.get<Contato[]>(this.urlBase, { observe: 'response', params }).pipe(take(1), map((response: any) =>{
      paginationResult.result = response.body;

      if(response.headers.has('Pagination'))
      {
        paginationResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }

      return paginationResult;
    }));
  }

  public post(contato: Contato) : Observable<Contato>
  {
    return this.http.post<Contato>(this.urlBase + '', contato).pipe(take(1));
  }
}
