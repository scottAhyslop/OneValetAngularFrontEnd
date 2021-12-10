import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OutputUrlService {

  public urlAddress: string = environment.urlAddress;

  constructor() { }
}
