import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProject } from 'src/app/models/project.models';

@Injectable({
  providedIn: 'root'
})
export default class CompletionService {

  baseUrl='http://localhost:3000/projects'

  constructor(private httpclient:HttpClient) { 
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}

getProjectname():Observable<IProject>{
  return this.httpclient.get<IProject>(this.baseUrl)
  .pipe(catchError(this.handleError));

}


}

