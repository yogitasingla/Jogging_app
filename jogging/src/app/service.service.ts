import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse,HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient : HttpClient, private router :Router) { }
  jogging_deatil(data){


    const url = `http://localhost:3600/savingDetail`;

  return this.httpClient.post(url, data).pipe(
    tap(result =>{})
  );
}


jogging_list(data){


  const url = `http://localhost:3600/showList`;

return this.httpClient.post(url,data).pipe(
  tap(result =>{})
);

}
aveSpeed(data){


  const url = `http://localhost:3600/calculations`;

return this.httpClient.post(url,data).pipe(
  tap(result =>{})
);

}
}
