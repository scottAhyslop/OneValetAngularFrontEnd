import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interfaces/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public devices: Device[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
