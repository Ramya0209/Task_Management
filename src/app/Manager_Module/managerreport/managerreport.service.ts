import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IReport } from 'src/app/models/report.models';

@Injectable({
  providedIn: 'root'
})
export class ManagerReportService {
  
  baseUrl = 'http://localhost:3000/reports'; 
  constructor(private httpClient: HttpClient) { }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}
addManagerreport(managerreport: IReport): Observable<IReport> {
  return this.httpClient.post<IReport>(this.baseUrl, managerreport, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
  .pipe(catchError(this.handleError));
}
}
