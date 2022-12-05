import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedOperationsComponent } from './advanced-operations/advanced-operations.component';
import { BasicOperationsComponent } from './basic-operations/basic-operations.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"basic", component:BasicOperationsComponent},
  {path:"advanced", component:AdvancedOperationsComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
