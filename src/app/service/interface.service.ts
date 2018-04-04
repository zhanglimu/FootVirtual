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
    //summary接口
    bookieSummary(year,month,day){
        console.log(year,month,day,"service")
        return this.http.get(AppConfig.baseUrl+'/account/bookieSummary/queryAll?year='+year+'&month='+month+'&day='+day)//
        .map(res=>res.json());
    }
    //single接口
    bookieSingle(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/bookieSingle/queryAll?year='+year+'&month='+month+'&day='+day)//
        .map(res=>res.json());
    }
    //渠道接口
    queryAllAgent(){
        return this.http.get(AppConfig.baseUrl + '/account/bookieOrder/queryAllAgent')//,this.cookie 
        .map(res => res.json())
    }
    //虚拟订单接口
    queryAll(startime,endtime,agNum,pageNum,pageSize,state,inplay,tkId,uid){
        return this.http.get(AppConfig.baseUrl+'/account/bookieOrder/queryAll?startDate='+startime +'&endDate='+endtime+'&agentId='+agNum+'&page='+pageNum+'&size='+pageSize+'&state='+state+'&inplay='+inplay+'&tkId='+tkId+'&uid='+uid)
        .map(res=>res.json());
    }
    //点击详情接口
    bookieOrder(ticketid,ballType){
        console.log(ticketid,ballType,"uuu")
        return this.http.get(AppConfig.baseUrl+'/account/bookieOrder/queryDetail?ticketInfo_id='+ticketid +'&ballType='+ballType)
        .map(res=>res.json());
    }
    //虚拟ALLup接口
    bookieAllup(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/bookieAllup/queryAll?year='+year+'&month='+month+'&day='+day)//
        .map(res=>res.json());
    }
    //组合get拼接的参数
        // zuCan(order_id,lottery_type,agentId,flag){
        //     const params = new HttpParams()
        //     .set('tkId', order_id)
        //     .set('lottery_type', lottery_type)
        //     .set('agentId',agentId)
        //     .set('flag', flag);
        //     return params;
        // }
}   