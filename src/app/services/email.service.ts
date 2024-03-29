import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendMessage(data): Observable<any> {
    return this.http.post('https://fast-temple-08528.herokuapp.com/api/contacts/email', data);
  }
}
