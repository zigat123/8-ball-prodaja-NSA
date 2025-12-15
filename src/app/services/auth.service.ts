import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserRecord { email: string; password: string }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth$ = new BehaviorSubject<boolean>(!!localStorage.getItem('auth_token'));
  authState = this.auth$.asObservable();

  isAuthenticated(): boolean { return !!localStorage.getItem('auth_token'); }

  login(email: string, password: string){
    const users = this._getUsers();
    const ok = users.find(u => u.email === email && u.password === password);
    if(ok){
      localStorage.setItem('auth_token', 'mock-jwt-token');
      this.auth$.next(true);
      return true;
    }
    return false;
  }

  register(email: string, password: string){
    const users = this._getUsers();
    if(users.find(u => u.email === email)) return false;
    users.push({ email, password });
    localStorage.setItem('mock_users', JSON.stringify(users));
    // auto-login after register
    localStorage.setItem('auth_token', 'mock-jwt-token');
    this.auth$.next(true);
    return true;
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.auth$.next(false);
  }

  hasUsers(): boolean { return this._getUsers().length > 0; }

  private _getUsers(): UserRecord[]{
    try{ return JSON.parse(localStorage.getItem('mock_users') || '[]') as UserRecord[] }catch{ return [] }
  }
}
