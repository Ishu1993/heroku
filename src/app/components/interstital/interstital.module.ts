import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { InterstitalRoutingModule } from './interstital-routing.module';
import { InterstitalComponent } from './interstital.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [InterstitalComponent],
  imports: [
    CommonModule,
    RouterModule,
    InterstitalRoutingModule,    
    SharedModule
  ]
})
export class InterstitalModule { }
