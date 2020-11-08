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
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: IloginrequestService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.isAuthenticated()){
    return next.handle(request);
    }
  }
}
