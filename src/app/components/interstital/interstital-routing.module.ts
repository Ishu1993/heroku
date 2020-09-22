import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterstitalComponent} from './interstital.component';

const routes: Routes = [{
  path:'',component:InterstitalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterstitalRoutingModule { }
