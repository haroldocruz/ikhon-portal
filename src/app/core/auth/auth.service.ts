import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';

interface IUserDataLogin {
  username?: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //TODO: pegar a URL base das variaveis de ambiente
  private baseUrl = `http://`;

  static user: IUser;
  static token: string;

  constructor(private http: HttpClient) {
    AuthService.init();
  }

  static init() {
    //TODO: definir onde será guardado os dados do usuários (storages, cookies, ...)
    const user = sessionStorage.getItem('user') || localStorage.getItem('user');
    AuthService.user = user ? JSON.parse(user) : new User();
  }
  
  static headers() {
    return new HttpHeaders({
      //TODO: definir o padrão de cabecalhos
      // 'Accept': 'application/json',
      // 'Content-Type': 'multipart/form-data',
      'Content-Type': 'application/json',
      //TODO: definir como será guardado o token (service, ...)
      'authorization': AuthService.token || ''
    });
  }

  
  login(userDataLogin: IUserDataLogin): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<IUser>(url, userDataLogin, { headers: AuthService.headers() });
  }

  logout(id: string): Observable<any> {
    const url = `${this.baseUrl}/logout/${id}`;
    return this.http.post<any>(url, {}, { headers: AuthService.headers() });
  }
}
