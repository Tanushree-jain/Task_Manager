import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient
  ) { }

  get(url: any, data: any, headers: any) {
    var headersObj = new HttpHeaders();
    if (headers.contentType) {
      headersObj = headersObj.set('content-type', headers.contentType);
    } else {
      headersObj.append('Content-Type', 'application/json');
    }
    let options = {
      params: (data != null && data.params != null) ? new HttpParams({ fromObject: data.params }) : {},
      headers: headersObj
    };
    return this.http.get<any>(url, options).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        // this.handleError(err);
        console.log(err.status)
        if (err.status == 400) {
          localStorage.removeItem('Token')
          localStorage.removeItem('userType')
          document.cookie="Token=; expires=Thu, 18 Dec 1970 12:00:00 UTC";
        }
        return throwError(err);
      })
    )
  }

  post = (url: any, data: any, headers: any) => {
    var headersObj = new HttpHeaders();
    if (headers.contentType) {
      headersObj = headersObj.set('content-type', headers.contentType);
    } else {
      headersObj.append('Content-Type', 'application/json');
    }
    return this.http.post<any>(url, data, { headers: headersObj }).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        console.log('err.status', err.status)
       
        if (err.status == 400) {
       console.log("error",err)
        }
        return throwError(err);
      })
    )
  }
}
