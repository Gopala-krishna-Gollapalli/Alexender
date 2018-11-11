import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  method1():Observable<any>
  {
    return this.http.get('/profile',{responseType: 'text'});
  }
  method2(a):Observable<any>
  {
   return this.http.post('/loginpost',a,{responseType:'json'});
  }
  method3():Observable<any>
  {
    return this.http.get('/profile1',{responseType:'json'});
  }
  method4(a):Observable<any>
  {
   return this.http.post('/loginpost1',a,{responseType:'json'});
  }
  method5(a):Observable<any>
  {
    console.log(a.phno);
    return this.http.post('/register',a,{responseType:'json'});
       

  }

  method6():Observable<any>
  {
    return this.http.get('/search',{responseType:'json'});
  }

  method7():Observable<any>
  {
    return this.http.get('/main',{responseType:'json'});
  }

}
