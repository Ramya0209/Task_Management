import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProject } from 'src/app/models/project.models';

@Injectable({
  providedIn: 'root'
})
export class ViewprojectAdminService {
  baseUrl = 'http://localhost:3000/projects';
  
  constructor(private httpClient:HttpClient) { }
  
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}
getProject(): Observable<IProject[]> {
        
  return this.httpClient.get<IProject[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
}
}

