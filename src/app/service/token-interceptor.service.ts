import { Injectable } from '@angular/core';
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


@Injectable()
export class TokenInterceptor implements HttpInterceptor {  constructor(public auth: IloginrequestService) {}  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.isAuthenticated){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });
    } else if(sessionStorage.getItem('rbnbuser')!=null){
      sessionStorage.removeItem('rbnbuser');
      window.location.assign("http://localhost:4200");
    }
    return next.handle(request);
  }
}
