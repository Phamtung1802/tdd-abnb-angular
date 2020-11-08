import { Injectable, Injector, Input } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { IloginrequestService } from 'src/app/service/iloginrequest.service';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Iloginrequest } from '../object-interfaces/Iloginrequest';


@Injectable()
<<<<<<< Updated upstream
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestService=this.injector.get(IloginrequestService);
=======
export class TokenInterceptor implements HttpInterceptor {  constructor(public auth: IloginrequestService) {}  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.isAuthenticated()){
>>>>>>> Stashed changes
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${requestService.getToken()}`
        }
      });
<<<<<<< Updated upstream
=======
    }
>>>>>>> Stashed changes
    return next.handle(request);
  }
}
