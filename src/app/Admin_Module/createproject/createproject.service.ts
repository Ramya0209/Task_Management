import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProject } from "src/app/models/project.models";
import { IEmployee } from "src/app/models/login.models";

@Injectable({
    providedIn:'root'
    
})
export class CreateProjectService{
    baseUrl = 'http://localhost:3000/projects';
    url='http://localhost:3000/employees';
    constructor(private httpClient: HttpClient) {
    }
   

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }
    createProject(project: IProject): Observable<IProject> {
        return this.httpClient.post<IProject>(this.baseUrl, project, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
        .pipe(catchError(this.handleError));
        }
    // getUserId(role:string):Observable<IEmployee>{
    //     return this.httpClient.get<IEmployee>(`${this.baseUrl}/role=${role}`)
    //     .pipe(catchError(this.handleError));
    // }
}