import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../interfaces/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  _baseURL: string = "api/Devices";
  constructor(private http: HttpClient) { }

  //get a list of all devices service
  getAllDevices(){
    return this.http.get<Device[]>(this._baseURL+"/GetAllDevices/");
  }// end getAllDevices()

  //get a specific device service that is added to the device display View
  getDeviceById(deviceId: number){
    return this.http.get(this._baseURL+"/GetDeviceById/" + deviceId);
  }//end getDeviceById
}
