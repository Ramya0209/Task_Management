import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from 'src/app/models/login.models';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  baseUrl = 'http://localhost:3000/employees';

  constructor(private httpClient:HttpClient) { }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}
getEmployee(id: String): Observable<IEmployee[]> {
    
    return this.httpClient.get<IEmployee[]>(`${this.baseUrl}?id=${id}`)
        .pipe(catchError(this.handleError));
}
updatePassword(password:string): Observable<void> {
  return this.httpClient.patch<void>(`${this.baseUrl}/${password}`,{
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
})
.pipe(catchError(this.handleError));
}
}