import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Notificacao } from '../interfaces/Notificacao';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiURL = environment.urlAPITWO;

  constructor(private httpCliente: HttpClient) { 

  }

  SendNotification(notification: Notificacao): Observable<any>{
    return this.httpCliente.post<any>(this.apiURL, notification);
  }

}
