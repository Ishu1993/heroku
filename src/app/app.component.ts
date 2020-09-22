import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from './shared/service/common-http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'wyneApp';
  constructor(private commonHttpService: CommonHttpService, private route: Router) {
    this.commonHttpService.getTokenAPI('frontend', 'wyneforyou');
  }
 





}
