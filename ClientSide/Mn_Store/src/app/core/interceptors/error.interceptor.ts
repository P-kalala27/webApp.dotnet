import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error : HttpErrorResponse) =>{
        if(error){
          if(error.status === 404){
            this.router.navigateByUrl('/not-found')
          };
          if(error.status === 500){
            this.router.navigateByUrl('/server-error')
          };
        }
        return throwError(()=>{new Error(error.message);})
      })
    )
  }
}
