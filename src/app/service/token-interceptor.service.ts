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

  constructor(public auth: IloginrequestService, private injector: Injector) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestService=this.injector.get(IloginrequestService);
    console.log("token o duoi");
    console.log(`Bearer ${requestService.getToken()}`);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${requestService.getToken()}`
        }
      });
    return next.handle(request);
  }
}




