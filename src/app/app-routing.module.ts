import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {MenuComponent} from './menu/menu.component';
import {StatusComponent} from './status/status.component';

const routes: Routes = [
  {
    path:'employees',
    component:EmployeesComponent,
  },
  {
    path:'menu',
    component:MenuComponent,
  },
  {
    path:'status',
    component:StatusComponent,
  },
  {
    
  path:'',
  redirectTo:'/employees',
  pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
