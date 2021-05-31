import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from '../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class ChangepassService {
  url='http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) { }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}
getEmployee(id: String,password:string): Observable<IEmployee[]> {
        
  return this.httpClient.get<IEmployee[]>(`${this.url}?id=${id}&password=${password}`)
      .pipe(catchError(this.handleError));
}
updatePassword(employee:IEmployee): Observable<IEmployee[]> {
  return this.httpClient.patch<IEmployee[]>(`${this.url}/${employee.id}`, employee,{
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
})
.pipe(catchError(this.handleError));
}

}
