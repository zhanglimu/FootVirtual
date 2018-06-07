import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AppConfig} from "../const/app-config";
import { AppComponent } from '../app.component';
import 'rxjs/add/observable/forkJoin';
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";
import { connect } from 'tls';
@Injectable()
export class InterfaceService{
    param : any;
    // private cookie ={withCredentials: true};
    constructor(private http:Http){}
    //渠道报表接口
    bookieAgent(year,month,day,lottery_){
        return this.http.get(AppConfig.baseUrl+'/account/bookieAgent/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_)
        .map(res=>res.json());
    }
    Agentretry(year,month,day,lottery_,agentName){
        return this.http.get(AppConfig.baseUrl+'/account/recountData?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_+'&reportsName='+agentName)
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
        return this.http.get(AppConfig.baseUrl+'/account/bookieAllup/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_typ)
        .map(res=>res.json());
    }
    Allupretry(year,month,day,lottery_typ,allupName){
        return this.http.get(AppConfig.baseUrl+'/account/recountData?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_typ+'&reportsName='+allupName)
        .map(res=>res.json());
    }
    //虚拟break接口
    bookieBreakdown(year,month,day,lottery_type){
        return this.http.get(AppConfig.baseUrl+'/account/bookieBreakdown/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_type)
        .map(res=>res.json());
    }
    Breakretry(year,month,day,lottery_type,breakName){
        return this.http.get(AppConfig.baseUrl+'/account/recountData?year='+year+'&month='+month+'&day='+day+'&lottery_type='+lottery_type+'&reportsName='+breakName)
        .map(res=>res.json());
    }
//////////////////////////////CASH OUT/////////////////////////
    Allup(year,month,day,cashzhonglei){
        console.log(AppConfig.baseUrl+'/account/dailyAllup/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhonglei,"service")
        return this.http.get(AppConfig.baseUrl+'/account/dailyAllup/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhonglei)
        .map(res=>res.json());
    }
    cashallupretry(year,month,day,cashzhonglei,cashallupName){
        return this.http.get(AppConfig.baseUrl+'/account/cashOutRecount?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhonglei+'&reportsName='+cashallupName)
        .map(res=>res.json());
    }
    Single(year,month,day,cashzhongle){
        return this.http.get(AppConfig.baseUrl+'/account/detailSGL/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhongle)
        .map(res=>res.json());
    }
    cashsingleretry(year,month,day,cashzhongle,cashsingleName){
        return this.http.get(AppConfig.baseUrl+'/account/cashOutRecount?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhongle+'&reportsName='+cashsingleName)
        .map(res=>res.json());
    }
    Summary(year,month,day,cashzhongl){
        return this.http.get(AppConfig.baseUrl+'/account/summary/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhongl)
        .map(res=>res.json());
    }
    cashsummaryretry(year,month,day,cashzhongl,cashsummaryName){
        return this.http.get(AppConfig.baseUrl+'/account/cashOutRecount?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhongl+'&reportsName='+cashsummaryName)
        .map(res=>res.json());
    }
    MonthSummary(year,month){
        return this.http.get(AppConfig.baseUrl+'/account/dailyCollectStatements/queryAll?year='+year+'&month='+month)
        .map(res=>res.json());
    }
    cashmonthsummaryretry(year,month,day,cashmonthSummaryName){
        return this.http.get(AppConfig.baseUrl+'/account/cashOutRecount?year='+year+'&month='+month+'&day='+day+'&reportsName='+cashmonthSummaryName)
        .map(res=>res.json());
    }
    Breakdown(year,month,day,cashzhong){
        return this.http.get(AppConfig.baseUrl+'/account/dailyFinancialDetail/queryAll?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhong)
        .map(res=>res.json());
    }
    cashbreakretry(year,month,day,cashzhong,cashbreakdownName){
        return this.http.get(AppConfig.baseUrl+'/account/cashOutRecount?year='+year+'&month='+month+'&day='+day+'&lottery_type='+cashzhong+'&reportsName='+cashbreakdownName)
        .map(res=>res.json());
    }
    Order(cashstartime,cashendtime,cashagNum,pageNum,pageSize,cashdeal,cashstate,cashthird,cashinplay,cashtkId,cashuid,cashlottery_type):Observable<any>{
        let formData: FormData = new FormData(); 
        formData.append('startDate', cashstartime); 
        formData.append('endDate', cashendtime); 
        formData.append('agent_id', cashagNum); 
        formData.append('page', pageNum); 
        formData.append('size', pageSize); 
        formData.append('trade_type', cashdeal); 
        formData.append('state', cashstate); 
        formData.append('recycleState', cashthird); 
        formData.append('inplay', cashinplay); 
        formData.append('tkId', cashtkId); 
        formData.append('uid', cashuid); 
        formData.append('ballType', cashlottery_type); 
        return this.http.post(AppConfig.baseUrl +'/account/orderManage/queryAll',formData)
        .map(res =>res.json());
      }
    OrderAgent(){
        return this.http.get(AppConfig.baseUrl + '/account/orderManage/queryAllAgent')//,this.cookie 
        .map(res => res.json())
    }
    //详情接口
    Orderdetail(ticketid,ballType,cashendtime){
        return this.http.get(AppConfig.baseUrl+'/account/orderManage/queryDetail?ticketInfo_id='+ticketid +'&ballType='+ballType +'&endDate='+cashendtime)
        .map(res=>res.json());
    }
    //third接口
    Third(agentid,thirdstartime,thirdendtime,per){
        return this.http.get(AppConfig.baseUrl+'/account/orderTicket/queryAll?agentid='+agentid +'&startDate='+thirdstartime +'&endDate='+thirdendtime +'&page='+per)
        .map(res=>res.json());
    }
    Thirdid(tkId,agentid){
        return this.http.get(AppConfig.baseUrl+'/account/orderTicket/query?tkId='+tkId +'&agentid='+agentid)
        .map(res=>res.json());
    }
    //error接口
    Error(page,size,errorstartime,errorendtime){
        return this.http.get(AppConfig.baseUrl+'/account/errorTicket/getErrorTickets?page='+page +'&size='+size +'&startDate='+errorstartime +'&endDate='+errorendtime)
        .map(res=>res.json());
    }
    //channel接口
    Channel(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/channelStatistics/queryAll?year='+year+'&month='+month+'&day='+day)
        .map(res=>res.json());
    }
    Channeldetail(agentId){
        return this.http.get(AppConfig.baseUrl+'/account/channelStatistics/queryPreStoreDetail?agentCode='+agentId)
        .map(res=>res.json());
    }
    channelretry(year,month,day,cashagentName){
        return this.http.get(AppConfig.baseUrl+'/account/cashOutRecount?year='+year+'&month='+month+'&day='+day+'&reportsName='+cashagentName)
        .map(res=>res.json());
    }
//////////////////////////////EVENT/////////////////////////
//single
    eventSingle(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/event/queryEventSingle?year='+year+'&month='+month+'&day='+day)
        .map(res=>res.json());
    }
    Esingleretry(year,month,day,EsingleName){
        return this.http.get(AppConfig.baseUrl+'/account/eventRecount?year='+year+'&month='+month+'&day='+day+'&reportsName='+EsingleName)
        .map(res=>res.json());
    }
    eventsummary(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/event/queryEventSummary?year='+year+'&month='+month+'&day='+day)
        .map(res=>res.json());
    }
    Esummaryretry(year,month,day,EsummaryName){
        return this.http.get(AppConfig.baseUrl+'/account/eventRecount?year='+year+'&month='+month+'&day='+day+'&reportsName='+EsummaryName)
        .map(res=>res.json());
    }
    eventbreak(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/event/queryEventBreakDown?year='+year+'&month='+month+'&day='+day)
        .map(res=>res.json());
    }
    Ebreakretry(year,month,day,EbreakName){
        return this.http.get(AppConfig.baseUrl+'/account/eventRecount?year='+year+'&month='+month+'&day='+day+'&reportsName='+EbreakName)
        .map(res=>res.json());
    }
    eventOrder(eventstartime,eventendtime,eventagNum,pageNum,pageSize,eventdeal,eventstate,eventthird,eventinplay,eventtkId,eventuid):Observable<any>{
        let formData: FormData = new FormData(); 
        formData.append('startDate', eventstartime); 
        formData.append('endDate', eventendtime); 
        formData.append('agent_id', eventagNum); 
        formData.append('page', pageNum); 
        formData.append('size', pageSize); 
        formData.append('trade_type', eventdeal); 
        formData.append('state', eventstate); 
        formData.append('recycleState', eventthird); 
        formData.append('inplay', eventinplay); 
        formData.append('tkId', eventtkId); 
        formData.append('uid', eventuid); 
        formData.append('ballType', "3"); 
        console.log(AppConfig.baseUrl +'/account/orderManage/queryAll',formData)
        return this.http.post(AppConfig.baseUrl +'/account/orderManage/queryAll',formData)
        .map(res =>res.json());
      }
      eventmonthsummary(year,month){
        return this.http.get(AppConfig.baseUrl+'/account/event/queryEventMonthSummary?year='+year+'&month='+month)
        .map(res=>res.json());
    }
    Emonthsummaryretry(year,month,day,EmonthsummaryName){
        return this.http.get(AppConfig.baseUrl+'/account/eventRecount?year='+year+'&month='+month+'&day='+day+'&reportsName='+EmonthsummaryName)
        .map(res=>res.json());
    }
    eventagent(year,month,day){
        return this.http.get(AppConfig.baseUrl+'/account/event/queryEventAgent?year='+year+'&month='+month+'&day='+day)
        .map(res=>res.json());
    }
    Eagentretry(year,month,day,EagentName){
        return this.http.get(AppConfig.baseUrl+'/account/eventRecount?year='+year+'&month='+month+'&day='+day+'&reportsName='+EagentName)
        .map(res=>res.json());
    }

}   