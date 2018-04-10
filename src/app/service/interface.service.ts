import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AppConfig} from "../const/app-config";
import { AppComponent } from '../app.component';
import 'rxjs/add/observable/forkJoin';
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";
@Injectable()
export class InterfaceService{
    param : any;
    // private cookie ={withCredentials: true};
    constructor(private http:Http){}
    //渠道报表接口
    bookieAgent(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/bookieAgent/queryAll?year='+year+'&month='+month+'&day='+day)
        .map(res=>res.json());
    }
    Agentretry(year,month,day,agentName){
        return this.http.get(AppConfig.baseUrl+'/account/recountData?year='+year+'&month='+month+'&day='+day+'&reportsName='+agentName)
        .map(res=>res.json());
    }
    //summary接口
    bookieSummary(year,month,day,lottery){
        return this.http.get(AppConfig.baseUrl+'/account/bookieSummary/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery)
        .map(res=>res.json());
    }
    Summaryretry(year,month,day,lottery,summaryName){
        return this.http.get(AppConfig.baseUrl+'/account/recountData?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery+'&reportsName='+summaryName)
        .map(res=>res.json());
    }
    //渠道接口
    queryAllAgent(){
        return this.http.get(AppConfig.baseUrl + '/account/bookieOrder/queryAllAgent')//,this.cookie 
        .map(res => res.json())
    }
    //虚拟订单接口
    queryAll(startime,endtime,agNum,pageNum,pageSize,state,inplay,tkId,uid,lottery_t){
        return this.http.get(AppConfig.baseUrl+'/account/bookieOrder/queryAll?startDate='+startime +'&endDate='+endtime+'&agentId='+agNum+'&page='+pageNum+'&size='+pageSize+'&state='+state+'&inplay='+inplay+'&tkId='+tkId+'&uid='+uid+'&ballType='+lottery_t)
        .map(res=>res.json());
    }
    //点击详情接口
    bookieOrder(ticketid,ballType){
        console.log(ticketid,ballType,"uuu")
        return this.http.get(AppConfig.baseUrl+'/account/bookieOrder/queryDetail?ticketInfo_id='+ticketid +'&ballType='+ballType)
        .map(res=>res.json());
    }
    //single接口
    bookieSingle(year,month,day,lottery_ty){
        return this.http.get(AppConfig.baseUrl+'/account/bookieSingle/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_ty)
        .map(res=>res.json());
    }
    Singleretry(year,month,day,lottery_ty,singleName){
        return this.http.get(AppConfig.baseUrl+'/account/recountData?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_ty+'&reportsName='+singleName)
        .map(res=>res.json());
    }
    //虚拟ALLup接口
    bookieAllup(year,month,day,lottery_typ){
        // console.log(year,month,day,lottery_typ,"service")
        return this.http.get(AppConfig.baseUrl+'/account/bookieAllup/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_typ)
        .map(res=>res.json());
    }
    Allupretry(year,month,day,lottery_typ,allupName){
        return this.http.get(AppConfig.baseUrl+'/account/recountData?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_typ+'&reportsName='+allupName)
        .map(res=>res.json());
    }

}   