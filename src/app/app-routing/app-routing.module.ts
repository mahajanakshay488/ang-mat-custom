import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from "../Components/navigation/navigation.component";
import { SignupComponent } from '../Components/forms/signup/signup.component';
import { LoginComponent } from '../Components/forms/login/login.component';

const appRoutes: Routes = [
  
  { path:'signup', component:SignupComponent},
  { path:'', component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
