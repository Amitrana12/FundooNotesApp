import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl=environment.baseUrl
  constructor(private httpservice:HttpServiceService) { 

  }
  registerUser(data: any){
    console.log("Data in userservice",data)
    return this.httpservice.post(`${this.baseUrl}/api/User/register`,data);
  }

  
}
