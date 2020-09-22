import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from '../../shared/service/common-http.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { APIController, commonVariable } from '../../shared/common/Common';

@Component({
  selector: 'app-interstital',
  templateUrl: './interstital.component.html',
  styleUrls: ['./interstital.component.scss']
})
export class InterstitalComponent implements OnInit {

  isProfileExist: Boolean = false;
  templateFlag:any;
 
  selectedWineRecommendation: any;
  lastSuggestion:any;
  profileRecord: any;

  constructor(private _httpService: CommonHttpService, private route: Router) {
    this.checkProfile();

  }

  ngOnInit(): void {
  }

  checkProfile() {
    try {
      // ------ previous running application token
      if (!localStorage.getItem(commonVariable.localStorgeKey["pre-running"])) {
        localStorage.setItem(commonVariable.localStorgeKey["pre-running"], 'true');
      }
      // ----- get Uniqu id base of browser information
      if (!localStorage.getItem(commonVariable.localStorgeKey.userId)) {
        this.createAnonymousUserId();
      }
      else {
        // ----------Fetch user details
        this.fetchUserDetails();
      }
    }
    catch (ex) {

    }
  }

  // -----------------Create User Id---------
  createAnonymousUserId() {
    try {
      let uniqueId;
      const agent = window.navigator;
      this._httpService.Wyne_GlobalHttpRequest(APIController.getIp).get().subscribe(res => {
        let data = {
          "uuid": uuidv4(),
          "ip_address": res.ip,
          "browser": agent.userAgent,
          "device": "iphone"
        }
        this._httpService.Wyne_HttpRequest(APIController.userquestionnaire).post(data)
          .subscribe(res => {
            let Responsedata = res;
            uniqueId = Responsedata.data.anonymous_user_id
            localStorage.setItem(commonVariable.localStorgeKey.userId, uniqueId);
            if (!localStorage.getItem(commonVariable.localStorgeKey["quiz-data"])) {
              // -------Start Quize
              localStorage.setItem(commonVariable.localStorgeKey["quiz-data"], uniqueId);
            }
            else {
              //  -----------Welcome page
              this.isProfileExist = false;
            }

          });
      });
    }
    catch (ex) {

    }
  }

  showWienDetails(obj) {
    try{
      this.selectedWineRecommendation = obj;
      this.templateFlag=commonVariable.templateFlag.recommendations;
    }
    catch(ex){

    }
   
  }

  // --------------fetch user Profile (if user is available)----------

  fetchUserDetails() {
    try {
      this.isProfileExist = true;
      this.templateFlag=commonVariable.templateFlag.winelist;
      let data = {
        "anonymous_user_id": parseInt(localStorage.getItem(commonVariable.localStorgeKey.userId)),
        "restaurant_id": 1
      };
      this._httpService.Wyne_HttpRequest(APIController.winerecommendation).post(data)
        .subscribe(res => {
          this.profileRecord = res.data['recommendation'];
          this.profileRecord = res.data['recommendation'];
        });
    }
    catch (ex) {

    }
  }

  Back(flagName){
    try{
      this.templateFlag=flagName
    }
    catch(ex){

    }
  }

  // -----------------Rating component--------------
  LastRecommendation(){
    try{
      this.lastSuggestion={
        title:'Rate our most recent recommendation to you?',
      description:'2013 Peter Michael Winery Cabernet Sauvignon Blend ‘L’esprit des pavots’ Knights Valley, Sonoma CA US $224.99'
    }
      this.templateFlag=commonVariable.templateFlag.rating;
    }
    catch(ex){

    }
  }
}
