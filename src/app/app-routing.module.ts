import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DeviceComponent } from './components/device/device.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'device', component:DeviceComponent},
  {path: 'device-list', component:DeviceListComponent},
  {path: 'search', component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
