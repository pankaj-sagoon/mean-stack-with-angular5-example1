import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/do';
@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req);


    /*const headers = new HttpHeaders({
      'Authorization': 'CUSTOM AUTHORIZATION TOKEN',
      'WEB-API-key': 'CUSTOME WEB API KEY'
    });

    const authReq = req.clone({ headers:headers});
    return next.handle(authReq);*/

  }
};
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
  ]
})
export class InterceptorModule { }
