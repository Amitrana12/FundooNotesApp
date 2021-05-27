import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { environment } from 'src/environments/environment';
//import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  
  httpClient: any;
  constructor(private http:HttpClient) {
   }

 token: any;

  // post(url: string, data: any, isHeaderRequired : any=false,headers =null){
  //   this.token=localStorage.getItem('token');
  //   console.log("token is",this.token);
  //   let options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization':this.token,
        
  //     })
  //   }
  //   //return this.http.post(this.baseUrl + url,data,options);
  //   return this.http.post(this.baseUrl + url,data,isHeaderRequired && headers);
  // }
   post(url : string, data :any, isHeaderRequired : any=false,headers =null){
     console.log(url,data)
   return this.http.post(url,data,isHeaderRequired && headers)
   }
   
}
