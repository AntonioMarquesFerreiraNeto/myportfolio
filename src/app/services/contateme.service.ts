import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../interfaces/Contato';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContatemeService {
  private urlAPI = environment.urlAPI;
  constructor(private httpCliente: HttpClient) { 

  }

  EnviarMensagem(contato: Contato): Observable<any>{
    return this.httpCliente.post<any>(this.urlAPI, contato);
  }
}
