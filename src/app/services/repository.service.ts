import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../interfaces/device';
import { OutputUrlService } from './output-url.service';

@Injectable({
  providedIn: 'root'
})

export class RepositoryService {
  [x: string]: any;
  _baseURL: string = "api/Devices";

  constructor(private http: HttpClient, private outUrl: OutputUrlService) { }

  public getData = (route: string) => this.http.get(this.createCompleteRoute(route, this.outUrl.urlAddress));

  public getAllDevices(){
    return this.http.get<Device[]>(this.createCompleteRoute(this._baseURL, this.outUrl.urlAddress+"/GetAllDevices")); 
  }

  public getDeviceById(deviceId: number){
    return this.http.get(this.createCompleteRoute(this._baseURL, this.outUrl.urlAddress+"/GetDeviceById/"+ deviceId )) ;
  }

  public create = (route: string, body: any)=>{
    return this.http.post(this.createCompleteRoute(route, this.outUrl.urlAddress), body, this.generateHeaders());
  }

  public update = (route: string) => {
    return this.http.put(this.createCompleteRoute(route, this.outUrl.urlAddress), body, this.generateHeaders());
  }

  private createCompleteRoute = (route: string, outUrl: string) => {
    return "${outUrl}/${route}";
  }

  private generateHeaders = () => {
    return{ 
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
  
}
function body(arg0: any, body: any, arg2: any) {
  throw new Error('Function not implemented.');
}

