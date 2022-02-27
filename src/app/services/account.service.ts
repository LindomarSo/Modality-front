import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public urlBase = environment.urlAPI + 'account/';
  private currentUserSource = new ReplaySubject<User>(1);
  public currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  public login(model: any): Observable<void>
  {
    return this.http.post<User>(this.urlBase + 'login', model)
            .pipe(take(1),
                   map((response: User) =>{
                      let user = response;

                      if(user)
                      {
                        this.setCurrentUser(user);
                      }
                   }
            )
      )
  }

  public setCurrentUser(user: User): void
  {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  public logout(): void
  {
    localStorage.removeItem('user');
    this.currentUserSource.next(null!);
  }
}
