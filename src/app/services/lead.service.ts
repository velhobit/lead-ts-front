import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = `${environment.apiUrl}/leads`;

  constructor(private http: HttpClient) {}

  getInviteds(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/invited`);
  }

  getAccepteds(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/accepted`);
  }

  changeStatus(id: number, newStatus: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/change-status`, {
      newStatus,
    });
  }
}
