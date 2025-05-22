import { inject, Injectable } from '@angular/core';
import { Tarea } from './tarea.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
 

      http= inject( HttpClient)
       urlBase= environment.urlBase
      
  gettask(): Observable<Tarea[]> {
   return this.http.get<Tarea[]>(this.urlBase);
  }

  gettaskbyid(id: number): Observable<Tarea> {
   return this.http.get<Tarea>(`${this.urlBase}/${id}`);
  }
  posttask(tarea: Tarea): Observable<Tarea> {
   return this.http.post<Tarea>(`${this.urlBase}`,tarea);
  }

  puttask(tarea: Tarea, id: number): Observable<Tarea> {
   return this.http.put<Tarea>(`${this.urlBase}/${id}`,tarea)
  }
   
  deletetaskbyid(id: number): Observable<Tarea> {
   return this.http.delete<Tarea>(`${this.urlBase}/${id}`);
  }


 }