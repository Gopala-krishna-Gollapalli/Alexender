import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { ProfileComponent } from './profile/profile.component';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot([{path:"profile",component:ProfileComponent},
   {path:"",component:MainComponent},
   {path:"login",component:LoginComponent},{path:'regi',component:MainComponent},
   {path:'showdetails',component:ShowdetailsComponent}
  ])
  ],
  exports: [RouterModule]
})
export class RouteModule 
{

}
