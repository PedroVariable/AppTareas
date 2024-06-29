import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ITarea } from '../interfaces/tarea';
@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private _endpoint: string = environment.endPoint;
  private apiUrl: string = this._endpoint + "Tareas/"

  constructor(private _http: HttpClient) { }

  //definir los metodos que estaran invocando los endpoints

  getTareas(): Observable<ITarea[]>{
    return this._http.get<ITarea[]>(`${this.apiUrl}`);
  }
  newTarea(request: ITarea): Observable<ITarea>{
    return this._http.post<ITarea>(`${this.apiUrl}`,request);
  }
  editTarea(request: ITarea): Observable<void>{
    return this._http.put<void>(`${this.apiUrl}${request.idTarea}`,request);
  }
  deleteTarea(idTarea: number): Observable<void>{
    return this._http.delete<void>
    (`${this.apiUrl}${idTarea}`);
  }
}
