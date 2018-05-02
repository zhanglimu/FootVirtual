import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)
import{ Router} from '@angular/router';
import{ LoginoutService} from '../service/loginout.service';
import { ElMessageService } from 'element-angular';
import { AppConfig } from "../const/app-config";
import { InterfaceService} from '../service/interface.service';
import { LiveOrdermanage } from '../modules/ordermanage';
import * as $ from "jquery";
import { element } from 'protractor';
import * as swal from 'sweetalert';

interface Member {
    id: string;
    login: string;
    avatar_url: string;
}

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
  })
export class OrdersComponent implements OnInit {
    public switchIndex: string = '6';
    public loading = false;
    // username:string;
    // loginNum:string;
    people:any;
    lo: string;
    //summary开始
    summarytotal: string[];   
    summaryToday:string[];
    summaryList:string[];
    summaryWeek:string[];
    summaryYear:string[];
    summaryMonth:string[];
    summaryName:string;

    date:string;
    monthing:any;
    weeking:any;
    checkDate:any;
    lottery:any;
    lot: string;
    //agent开始
    agentdata: string[];   //订单变量
    agentdatas:LiveOrdermanage;
    agentName:string;
    lottery_:any;

    //order开始
    resut: any[];   //返回所有渠道信息变量
    shuju:LiveOrdermanage;
    shu:string[];
    details:string[];
    tkIding:any;
    refund:any;
  
    startime: any;
    endtime: any;
    agNum: any;
    state: any;
    inplay: any;
    tkId: any;
    uid: any;
    lottery_t:any;
    timekai:any;
    timejie:any;
  
    count: number = 0; //总条数
    pageCount:number;   
    pageNum: number = 1;  //默认第一页
    pageSize: number = 16;  //每页条数
  
    ding: string;
    yong: string;
    in: string;
    sta: string;
    agent: string;  //渠道默认值
    lott:string;
    //single开始
    total: string[];   //订单变量
    totaldian:string[];
    lottery_ty:any;
    lotte:string;
    singleName:string;
    //allup
    allupdata: string[];   //订单合计变量
    allupHAD:string[];
    allHAD:string[];
    allupHHAD:string[];
    allHHAD:string[];
    allupHAFU:string[];
    allHAFU:string[];
    allupTTG:string[];
    allTTG:string[];
    allupCRS:string[];
    allCRS:string[];
    allupFHAD:string[];
    allFHAD:string[];
    allupAHC:string[];
    allAHC:string[];
    allupFAHC:string[];
    allFAHC:string[];
    allupHL:string[];
    allHL:string[];
    allupFHL:string[];
    allFHL:string[];
    allupFGS:string[];
    allFGS:string[];
    allupFCA:string[];
    allFCA:string[];
    //电竞
    allupdiandata:string[];
    allupFBL:string[];
    allFBL:string[];
    allupSHDC:string[];
    allSHDC:string[];
    allupdianHL:string[];
    alldianHL:string[];
    allupHDC:string[];
    allHDC:string[];
    allupSHL:string[];
    allSHL:string[];
    allupMNL:string[];
    allMNL:string[];
    allupHS:string[];
    allHS:string[];
    allupdianFCA:string[];
    alldianFCA:string[];

    lottery_typ:any;
    lotter:string;
    allupName:string;
    //break
    breakpro:string[];
    totalpro:string[];
    breakweeking:any;
    lottery_type:any;
    loery:string;
    breakName:string;

    time0:string;
    Nodata:boolean; //是否显示提示信息
    data:string;  //显示提示信息
    Nodata3:boolean;
    data3:string;
    zuqiu:boolean;
    dianjing:boolean;
    allupzuqiu:boolean;
    allupdianjing:boolean;
    caizhong:boolean;
//cash out/////////////////
//cashallup
    cashallupdata: string[];   //订单合计变量
    cashallupHAD:string[];
    outallHAD:string[];
    cashallupHHAD:string[];
    outallHHAD:string[];
    cashallupHAFU:string[];
    outallHAFU:string[];
    cashallupTTG:string[];
    outallTTG:string[];
    cashallupCRS:string[];
    outallCRS:string[];
    cashallupFCA:string[];
    outallFCA:string[];
    //lanqiu
    cashalluplandata:string[];
    cashalluplanHILO:string[];
    outalllanHILO:string[];
    cashalluplanFCA:string[];
    outalllanFCA:string[];
    cashalluplanHDC:string[];
    outalllanHDC:string[];
    cashalluplanWNM:string[];
    outalllanWNM:string[];
    cashalluplanMNL:string[];
    outalllanMNL:string[];

    cashlot:any;
    cashzhonglei:any;
    cashallupName:string;
    cashallupzuqiu:boolean;
    alluplanqiu:boolean;
    //cashsingle
    cashsingletotal:string[];
    cashsinglelan:string[];
    cashlott:any;
    cashzhongle:any;
    cashsingleName:string;
    cashzuqiu:boolean;
    cashlanqiu:boolean;
    //cashsummary
    summaryweeking:any;
    modelToday:string[];
    modelWeek:string[];
    modelMonth:string[];
    modelYear:string[];
    modelList:string[];
    modelTotal:string[];
    cashlotte:any;
    cashzhongl:any;
    cashsummaryName:string;
    //cashmonthsummary
    monthTotal:string[];
    monthList:string[];
    tmpnewchar:any;
    time1:string;
    cashmonthSummaryName:string;
    //cashbreak
    cashbreakpro:string[];
    cashtotalpro:string[];
    cashlottery:any;
    cashzhong:any;
    cashbreakdownName:string;
    //cashorder
    cashresut: any[];
    cashshuju:LiveOrdermanage;
    cashshu:string[];
    cashdetails:LiveOrdermanage;
    cashtkIding:any;
    contents:string;
    betents:string;

    cashtkId: any;
    cashuid: any;
    cashstartime: any;
    cashendtime: any;
    cashagNum: any;
    cashstate: any;
    cashinplay: any;
    cashdeal: any;
    cashthird: any;
    cashlottery_type: any;

    cashding: string;
    cashyong: string;
    cashtimekai:any;
    cashtimejie:any;
    cashin: string;
    cashsta: string;
    cashagent: string;  //渠道默认值
    cashdea:string;
    cashthir:string;
    cashlotter:string;
    cashcount: number = 0; //总条数
    cashpageCount:number;
    //cashthird
    thirdshuju:string[];
    thirdshu:string[];
    thirdstartime: any;
    thirdendtime: any;
    agentid: any;
    per: any;
    thirdtkId:any;
    thirdtimekai:any;
    thirdtimejie:any;
    thirdagent:any;
    thirdper: any;
    thirdtk:any;
    thirdngif:boolean;
    //casherror
    errorstartime: any;
    errorendtime: any;
    errortimekai:any;
    errortimejie:any;
    errorshuju:LiveOrdermanage;
    errorcount: number = 0; //总条数
    errorpageCount:number;
    //channel
    channeltotal:string[];
    channelshuju:LiveOrdermanage;
    cashagentName:string;
    constructor(private router:Router,private QUERY: InterfaceService,private message: ElMessageService,private Loginout:LoginoutService) { 
      // this.username = localStorage.getItem("username");
      // this.loginNum = localStorage.getItem("loginCount")
      // 折叠导航
      $(document).ready(function(){
        $(".one_bar").click(function(){
              $(this).next().slideToggle();
              $(this).parent().siblings().children("ul").slideUp();
        });
      });
      //order开始时间和结束时间
      var time =  new Date();
      var year = time.getFullYear();
      var month = time.getMonth()+1;
      var day = time.getDate();
      var hour = time.getHours();
      // var hour = 10;
      var minutes = time.getMinutes();  
      var second = time.getSeconds();
      if(hour>=12){
        var s1 = this.GetDateStr(0)+" 14:00:00";
        var end = this.GetDateStr(0)+" 23:59:59";
      }else{
        var s1 = this.GetDateStr(-1)+" 14:00:00";
        var end =this. GetDateStr(0)+" 23:59:59";
      }
      this.timekai=s1;
      this.timejie =end;
      this.cashtimekai=s1;
      this.cashtimejie =end;
      //third
      var s2 = this.GetDateStr(-1);
      var end2 =this. GetDateStr(0);
      this.thirdtimekai=s2;
      this.thirdtimejie =end2;
      this.errortimekai=s2;
      this.errortimejie =end2;
      //默认显示虚拟订单数据
      this.all(this.timekai,this.timejie,"",this.pageNum,this.pageSize,"","","","",2)
    }
/**
   * 切换选项卡
   * @param index
   */
  switch(index: string): void {
    this.switchIndex = index;
    localStorage.setItem('SWITCH_INDEX', this.switchIndex);
    //summary
    this.summarytotal =[];
    this.summaryToday =[];
    this.summaryList =[];
    this.summaryWeek =[];
    this.summaryYear =[];
    this.summaryMonth =[];
    //agent
    this.agentdata = [];
    this.agentdatas =null;
    //order
    this.count=null;
    this.shu = [];
    this.shuju = null;
    //single
    this.total = null;
    this.totaldian = null;
    //allup
    this.allupdata = [];
    this.allupHAD = [];
    this.allHAD = [];
    this.allupHHAD = [];
    this.allHHAD = [];
    this.allupHAFU = [];
    this.allHAFU = [];
    this.allupTTG = [];
    this.allTTG = [];
    this.allupCRS = [];
    this.allCRS = [];
    this.allupFHAD = [];
    this.allFHAD = [];
    this.allupAHC = [];
    this.allAHC = [];
    this.allupFAHC = [];
    this.allFAHC = [];
    this.allupHL = [];
    this.allHL = [];
    this.allupFHL = [];
    this.allFHL = [];
    this.allupFGS = [];
    this.allFGS = [];
    this.allupFCA = [];
    this.allFCA = [];
    //电竞
    this.allupdiandata=[];
    this.allupFBL=[];
    this.allFBL=[];
    this.allupSHDC=[];
    this.allSHDC=[];
    this.allupdianHL=[];
    this.alldianHL=[];
    this.allupHDC=[];
    this.allHDC=[];
    this.allupSHL=[];
    this.allSHL=[];
    this.allupMNL=[];
    this.allMNL=[];
    this.allupHS=[];
    this.allHS=[];
    this.allupdianFCA=[];
    this.alldianFCA=[];
    //break
    this.breakpro=[];
    this.totalpro=[];
    //cash out/////////////////
//cashallup
    this.cashallupdata=[];   //订单合计变量
    this.cashallupHAD=[];
    this.outallHAD=[];
    this.cashallupHHAD=[];
    this.outallHHAD=[];
    this.cashallupHAFU=[];
    this.outallHAFU=[];
    this.cashallupTTG=[];
    this.outallTTG=[];
    this.cashallupCRS=[];
    this.outallCRS=[];
    this.cashallupFCA=[];
    this.outallFCA=[];
    //cashsingle
    this.cashsingletotal=[];
    this.cashsinglelan=[];
    //cashsummary
    this.modelToday=[];
    this.modelWeek=[];
    this.modelMonth=[];
    this.modelYear=[];
    this.modelList=[];
    this.modelTotal=[];
    //cashmonthsummary
    this.monthTotal=[];
    this.monthList=[];
    //cashbreak
    this.cashbreakpro=[];
    this.cashtotalpro=[];
    //cashorder
    this.cashshuju = null;
    this.cashshu=[];
    //cashthird
    this.thirdshuju=[];
    this.thirdshu=[];
    //channel
    this.channeltotal=[];
    this.channelshuju = null;
  }
  //退出登录
  Signout(){
    this.Loginout.Loginout().subscribe(response=>{
      localStorage.removeItem("username");
      localStorage.removeItem("loginCount");
      this.router.navigate(['./login'])
      }) 
  }

  ngOnInit() {
    this.lo = "2";//彩种值
    //summary开始
    this.lot = "2";//彩种值
    this.summaryName = "summary";
    var woDate = new Date();
    this.date = woDate.toLocaleDateString(); 
      
    var womonth = woDate.getMonth()+1;
    this.monthing = (womonth<10 ? "0"+womonth:womonth);
    
    var time,week,checkDate:any = new Date(new Date());
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    week=Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
    this.weeking =week;
    this.summaryweeking =week;
    this.breakweeking =week;
    //初始默认时间
    var timeing =  new Date();
    var year = timeing.getFullYear();
    var month = timeing.getMonth()+1;
    var day = timeing.getDate();
    this.time0=year+"-"+month+"-"+day;
    this.time1=year+"-"+month;
    //order开始
    this.ding = "";
    this.yong = "";
    this.in = '';
    this.sta = '';
    this.agent = ""; //渠道值
    this.lott = "2";//彩种值
    this.Nodata =false;

    //返回渠道信息
    this.QUERY.queryAllAgent().subscribe(data => {
      if (data)
        this.resut = data.agentList;
    });
    //返回cashout渠道信息
    this.QUERY.OrderAgent().subscribe(data => {
      if (data)
        this.cashresut = data.agentList;
    });
    
    //order结束
    this.lotte = "2";//彩种值
    this.lotter = "2";//彩种值
    this.loery = "2"
    this.agentName = "agent";
    this.singleName = "single";
    this.allupName = "allup";
    this.breakName = "breakdown";
    this.zuqiu =false;
    this.dianjing =false;
    this.allupzuqiu =false;
    this.allupdianjing =false;
    // this.caizhong=false;
    
    this.people = localStorage.getItem("people")
    if(this.people==0){
      this.caizhong=false;
    }else{
      this.caizhong=true;
    }
    //cashout ////
    this.cashallupzuqiu =false;
    this.alluplanqiu =false;
    this.cashlot = "1";//彩种值
    this.cashlott = "1";
    this.cashlotte = "1";
    this.cashlottery = "1";
    //cashsingle
    this.cashzuqiu =false;
    this.cashlanqiu =false;
    //cashorder
    this.cashding = "";
    this.cashyong = "";
    this.cashin = '';
    this.cashsta = '';
    this.cashagent = '';
    this.cashdea = '';
    this.cashthir = '';
    this.cashlotter = "1";
    //cashthird
    this.thirdagent = "";
    this.thirdper = "1";
    this.thirdtk = "";

    this.cashallupName ="allup";
    this.cashsingleName ="single";
    this.cashsummaryName ="summary";
    this.cashmonthSummaryName ="monthSummary";
    this.cashbreakdownName ="breakdown";
    this.cashagentName ="agent";
  }
  summaryCha(reslt) {
    this.loading = true;
    var year = "";
        var month = "";
    var day = "";
    if(this.people==0){
      this.lottery = "2";
    }else{
      this.lottery = $("#lottery_type").val();
    }
    // this.lottery = $("#lottery_type").val();
        var time:any = $("#startime").val();
        if(time =="" || time ==null){
              this.message.error("请先选择日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        // console.log(year,month,day,this.lottery,"41444")
        this.QUERY.bookieSummary(year,month,day,this.lottery).subscribe(data => {
          if (data!=null) {
            this.loading = false;
            this.Nodata = false;
            this.summarytotal = data.total;
            this.summaryToday = data.modelToday;
            this.summaryList = data.modelList;
            this.summaryWeek = data.modelWeek;
            this.summaryYear = data.modelYear;
            this.summaryMonth = data.modelMonth;
          }else{
            this.loading = false;
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.loading = false;
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });
        
      } 
      this.weeking =this.getYearWeek(year, month, day);
      document.getElementById("week").innerText = this.weeking; 
      document.getElementById("month").innerText = month;
  }
  getYearWeek (a, b, c) { 
    var d1:any = new Date(a, b-1, c), d2:any = new Date(a, 0, 1), 
    d = Math.round((d1 - d2) / 86400000); 
    return Math.ceil((d + ((d2.getDay() + 1) - 1)) / 7); 
  }
  summaryretry() {
    var year = "";
        var month = "";
    var day = "";
    if(this.people==0){
      this.lottery = "2";
    }else{
      this.lottery = $("#lottery_type").val();
    }
    var time:any = $("#startime").val();
        if(time =="" || time ==null){
      this.message.error("请先选择要重算的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
          this.message.error("请先精确到日");
          return false;
        }else{
          year=sort;
          this.message.error("请先精确到日");
          return false;
        }
        this.QUERY.Summaryretry(year,month,day,this.lottery,this.summaryName).subscribe(data => {
          if (data.ResultCode=1) {
            this.Nodata = false;
          }else{
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });      
    } 
  }
  //导出
  summaryexport() {
    var year = "";
        var month = "";
    var day = "";
    if(this.people==0){
      this.lottery = "2";
    }else{
      this.lottery = $("#lottery_type").val();
    }
        var time:any = $("#startime").val();
        if(time =="" || time ==null){
              this.message.error("请先选择要导出的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        window.open(AppConfig.baseUrl +'/account/bookieSummary/summaryExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery);
      } 
  }
//agent开始
// 降序方法
compare(property){
  return function(a,b){
      var value1 = a[property];
      var value2 = b[property];
      return value2 - value1;
  }
}
  agentCha(reslt) {
    this.loading = true;
    var year = "";
    var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_ = "2";
    }else{
      this.lottery_ = $("#lottery_type").val();
    }
    // this.lottery_ = $("#lottery_type").val();
    var time:any = $("#d12").val();
    if(time =="" || time ==null){
        this.message.error("请先选择日期");
    }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        this.QUERY.bookieAgent(year,month,day,this.lottery_).subscribe(Response => {
          if (Response.agentInfoModels!=null) {
            this.loading = false;
            this.Nodata = false;
            this.agentdata = Response.total;
          // console.log(Response.agentInfoModels.sort(this.compare('agentSell')))//降序数据
            this.agentdatas = Response.agentInfoModels.sort(this.compare('agentSell'));
            for (var k = 0; k < Response.agentInfoModels.sort(this.compare('agentSell')).length; k++) {
              if(this.agentdatas[k].agentSell =="-1"){
                this.agentdatas[k].agentSellMess = "停售";
              }else if(this.agentdatas[k].agentId == this.agentdatas[k].agentSell){
                this.agentdatas[k].agentSellMess = "开售";
              }
              if(this.agentdatas[k].recyclePriceFb ==null){
                this.agentdatas[k].recyclePriceName= "-"; 
              }else{
                this.agentdatas[k].recyclePriceName = this.agentdatas[k].recyclePriceFb ;
              }
            }
          }else{
            this.loading = false;
            this.agentdatas = Response.agentInfoModels;
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.loading = false;
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });
      } 
  }
  agentretry() {
    var year = "";
        var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_ = "2";
    }else{
      this.lottery_ = $("#lottery_type").val();
    }
    var time:any = $("#d12").val();
        if(time =="" || time ==null){
              this.message.error("请先选择要重算的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
          this.message.error("请先精确到日");
          return false;
        }else{
          year=sort;
          this.message.error("请先精确到日");
          return false;
        }
        this.QUERY.Agentretry(year,month,day,this.lottery_,this.agentName).subscribe(data => {
          if (data.ResultCode=1) {
            this.Nodata = false;
          }else{
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });      
    } 
  }
  agentexport() {
    var year = "";
        var month = "";
        var day = "";
    if(this.people==0){
      this.lottery_ = "2";
    }else{
      this.lottery_ = $("#lottery_type").val();
    }
        var time:any = $("#d12").val();
        if(time =="" || time ==null){
              this.message.error("请先选择要导出的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        window.open(AppConfig.baseUrl +'/account/bookieAgent/channelStatisticsExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery_);
      } 
  }
//order开始
  all(startime,endtime,agNum,pageNum,pageSize,state,inplay,tkId,uid,lottery_t) {
    this.QUERY.queryAll(startime,endtime,agNum,pageNum,pageSize,state,inplay,tkId,uid,lottery_t).subscribe(data => {
      if (data.modelList!=null) {
        this.loading = false;
        this.Nodata = false;
        this.count=data.total.size;
        this.pageCount = Math.ceil(this.count/this.pageSize);
        this.shu = data.total;
        this.shuju = data.modelList;
        for (var i = 0; i < data.modelList.length; i++) {
          switch (this.shuju[i].ballType) {
            case null:
              this.shuju[i].ballType_name = "--";
              break;
            case 1:
              this.shuju[i].ballType_name = "足球";
              break;
            case 2:
              this.shuju[i].ballType_name = "电竞";
              break;
          }
          switch (this.shuju[i].inplay) {
            case null:
              this.shuju[i].inplay_name = "--";
              break;
            case 0:
              this.shuju[i].inplay_name = "死球";
              break;
            case 1:
              this.shuju[i].inplay_name = "即场";
              break;
          }
          switch (this.shuju[i].state) {
            case null:
              this.shuju[i].state_name = "--";
              break;
            case 1:
              this.shuju[i].state_name = "中奖";
              break;
            case 2:
              this.shuju[i].state_name = "未中奖";
              break;
            case 3:
              this.shuju[i].state_name = "Alive";
              break;
          }
        }
      }else{
        this.loading = false;
        this.count = 0;
        this.Nodata = true;
        this.data = "暂无新数据";
      }
    },error=>{
      this.loading = false;
      this.Nodata = true;
      this.data = "数据异常请联系开发人员";
    });
  }
  orderCha(reslt) {
    this.loading = true;
    this.startime = $("#stime").val();
    this.endtime = $("#etime").val();
    this.agNum =$('#agentNum option:selected').val();
    this.state =$('#state option:selected').val();
    this.inplay =$('#inplay option:selected').val();
    this.tkId = $("#tk").val();
    this.uid = $("#uid").val();
    if(this.people==0){
      this.lottery_t = "2";
    }else{
      this.lottery_t = $("#lottery_type").val();
    }
    // this.lottery_t = $("#lottery_type").val();
    this.all(this.startime,this.endtime,this.agNum,this.pageNum,this.pageSize,this.state,this.inplay,this.tkId,this.uid,this.lottery_t)
  }
  GetDateStr(AddDayCount) { 
    var dd = new Date(); 
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear(); 
    var m = dd.getMonth()+1;//获取当前月份的日期 
    var d = dd.getDate(); 
    return y+"-"+m+"-"+d; 
}
  //分页
  modelChange(currentPage){
    this.all(this.startime,this.endtime,this.agNum,currentPage,this.pageSize,this.state,this.inplay,this.tkId,this.uid,this.lottery_t)
  }
  //点击详情
  showdiv(ticketid,ballType,tkId,refund) {
    console.log(ticketid,ballType,tkId,refund,"jjj")
    this.tkIding=tkId;
    this.refund=refund;
    this.QUERY.bookieOrder(ticketid,ballType).subscribe(response => {
      if (response!=null) {
        this.Nodata3 = false;
        this.details = response.detailList;
      }else {
      this.details = [];
      this.Nodata3 = true;
      this.data3 = "暂无新数据";
      }
    }, error => {
      this.Nodata3 = true;
      this.data3 = "数据异常请联系开发人员";
    })
    document.getElementById("bg").style.display = "block";
    document.getElementById("show").style.display = "block";
  }
  hidediv() {
    document.getElementById("bg").style.display = 'none';
    document.getElementById("show").style.display = 'none';
  }
//导出
  orderexport(){
    this.startime = $("#stime").val();
    this.endtime =$("#etime").val();
    this.agNum =$('#agentNum option:selected').val();
    this.state =$('#state option:selected').val();
    this.inplay =$('#inplay option:selected').val();
    this.tkId = $("#tk").val();
    this.uid = $("#uid").val();
    if(this.people==0){
      this.lottery_t = "2";
    }else{
      this.lottery_t = $("#lottery_type").val();
    }
      window.open(AppConfig.baseUrl + "/account/bookieOrder/userManagementExcel?startDate="+this.startime +"&endDate="+this.endtime+"&agentId="+this.agNum+"&state="+this.state+"&inplay="+this.inplay+"&tkId="+this.tkId+"&uid="+this.uid+'&ballType='+this.lottery_t);
  }
  //single开始
  singleCha(reslt) {
    this.loading = true;
    var year = "";
        var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_ty = "2";
    }else{
      this.lottery_ty = $("#lottery_type").val();
    }
    // this.lottery_ty = $("#lottery_type").val();
    var time:any = $("#d12").val();
        if(time =="" || time ==null){
              this.message.error("请先选择日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        this.QUERY.bookieSingle(year,month,day,this.lottery_ty).subscribe(data => {
          if (data!=null) {
            this.loading = false;
            this.Nodata = false;
            this.total = data.total;
            this.totaldian = data.total;
            // this.singlebox = data.curInfo;
            // this.singlehis = data.hisInfo;
            if (this.lottery_ty==2) {
              this.dianjing =true;
              this.zuqiu =false;
            }else{
              this.zuqiu =true;
              this.dianjing =false;
            }
          }else{
            this.loading = false;
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.loading = false;
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });
      } 
  }
  singleretry() {
    var year = "";
    var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_ty = "2";
    }else{
      this.lottery_ty = $("#lottery_type").val();
    }
        var time:any = $("#d12").val();
        if(time =="" || time ==null){
      this.message.error("请选择要重算的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
          this.message.error("请先精确到日");
          return false;
        }else{
          year=sort;
          this.message.error("请先精确到日");
          return false;
        }
        this.QUERY.Singleretry(year,month,day,this.lottery_ty,this.singleName).subscribe(data => {
          if (data.ResultCode=1) {
            this.Nodata = false;
          }else{
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });      
    } 
  }
  //导出
  singleexport() {
    var year = "";
        var month = "";
        var day = "";
    if(this.people==0){
      this.lottery_ty = "2";
    }else{
      this.lottery_ty = $("#lottery_type").val();
    }
        var time:any = $("#d12").val();
        if(time =="" || time ==null){
              this.message.error("请先选择要导出的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        window.open(AppConfig.baseUrl +'/account/bookieSingle/detailSGLExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery_ty);
      } 
  }
  //allup开始
  allupCha(reslt) {
    this.loading = true;
    var year = "";
        var month = "";
        var day = "";
    if(this.people==0){
      this.lottery_typ = "2";
    }else{
      this.lottery_typ = $("#lottery_type").val();
    }
    // this.lottery_typ = $("#lottery_type").val();
        var time:any = $("#d12").val();
        if(time =="" || time ==null){
              this.message.error("请先选择日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        this.QUERY.bookieAllup(year,month,day,this.lottery_typ).subscribe(data => {
          if (data!=null) {
            this.loading = false;
            this.Nodata = false;
            
            if (this.lottery_typ==2) {
              this.allupdianjing =true;
              this.allupzuqiu =false;
              this.allupdiandata = data.alluptotal;

              this.allupFBL = data.FBL;
              this.allFBL = data.FBL[7];
              var str = this.allupFBL.splice(7,1);
              
              this.allupSHDC = data.SHDC;
              this.allSHDC = data.SHDC[7];
              var str = this.allupSHDC.splice(7,1);

              this.allupdianHL = data.HL;
              this.alldianHL = data.HL[7];
              var str = this.allupdianHL.splice(7,1);

              this.allupHDC = data.HDC;
              this.allHDC = data.HDC[7];
              var str = this.allupHDC.splice(7,1);

              this.allupSHL = data.SHL;
              this.allSHL = data.SHL[7];
              var str = this.allupSHL.splice(7,1);

              this.allupMNL = data.MNL;
              this.allMNL = data.MNL[7];
              var str = this.allupMNL.splice(7,1);

              this.allupHS = data.HS;
              this.allHS = data.HS[7];
              var str = this.allupHS.splice(7,1);

              this.allupdianFCA = data.FCA;
              this.alldianFCA = data.FCA[7];
              var str = this.allupdianFCA.splice(7,1);
            }else{
              this.allupzuqiu =true;
              this.allupdianjing =false;
              this.allupdata = data.alluptotal;

              this.allupHAD = data.HAD;
              this.allHAD = data.HAD[7];
              // this.allHAD.local_m = "HAD";
              // this.allupHAD = this.allupHAD;
              var str = this.allupHAD.splice(7,1);

              this.allupHHAD = data.HHAD;
              this.allHHAD = data.HHAD[7];
              var str = this.allupHHAD.splice(7,1);

              this.allupHAFU = data.HAFU;
              this.allHAFU = data.HAFU[7];
              var str = this.allupHAFU.splice(7,1);

              this.allupTTG = data.TTG;
              this.allTTG = data.TTG[7];
              var str = this.allupTTG.splice(7,1);

              this.allupCRS = data.CRS;
              this.allCRS = data.CRS[7];
              var str = this.allupCRS.splice(7,1);

              this.allupFHAD = data.FHAD;
              this.allFHAD = data.FHAD[7];
              var str = this.allupFHAD.splice(7,1);

              this.allupAHC = data.AHC;
              this.allAHC = data.AHC[7];
              var str = this.allupAHC.splice(7,1);

              this.allupFAHC = data.FAHC;
              this.allFAHC = data.FAHC[7];
              var str = this.allupFAHC.splice(7,1);

              this.allupHL = data.HL;
              this.allHL = data.HL[7];
              var str = this.allupHL.splice(7,1);

              this.allupFHL = data.FHL;
              this.allFHL = data.FHL[7];
              var str = this.allupFHL.splice(7,1);

              this.allupFGS = data.FGS;
              this.allFGS = data.FGS[7];
              var str = this.allupFGS.splice(7,1);

              this.allupFCA = data.FCA;
              this.allFCA = data.FCA[7];
              var str = this.allupFCA.splice(7,1);
            }
            
          }else{
            this.loading = false;
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.loading = false;
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });
      } 
  }

  allupretry() {
    var year = "";
        var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_typ = "2";
    }else{
      this.lottery_typ = $("#lottery_type").val();
    }
        var time:any = $("#d12").val();
        if(time =="" || time ==null){
      this.message.error("请选择要重算的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
          this.message.error("请先精确到日");
          return false;
        }else{
          year=sort;
          this.message.error("请先精确到日");
          return false;
        }
        this.QUERY.Allupretry(year,month,day,this.lottery_typ,this.allupName).subscribe(data => {
          if (data.ResultCode=1) {
            this.Nodata = false;
          }else{
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });      
    } 
  }
  //导出
  allupexport() {
    var year = "";
        var month = "";
        var day = "";
    if(this.people==0){
      this.lottery_typ = "2";
    }else{
      this.lottery_typ = $("#lottery_type").val();
    }
        var time:any = $("#d12").val();
        if(time =="" || time ==null){
              this.message.error("请先选择要导出的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        window.open(AppConfig.baseUrl +'/account/bookieAllup/dailyAllupExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery_typ);
      } 
  }
  breakCha(reslt) {
    this.loading = true;
    var year = "";
    var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_type = "2";
    }else{
      this.lottery_type = $("#lottery_type").val();
    }
    var time:any = $("#d12").val();
    if(time =="" || time ==null){
        this.message.error("请先选择日期");
    }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        this.QUERY.bookieBreakdown(year,month,day,this.lottery_type).subscribe(data => {
          if (data!=null) {
            this.loading = false;
            this.Nodata = false;
            this.breakpro = data.prolist;
            this.totalpro = data.proTotal;
          }else{
            this.loading = false;
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.loading = false;
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });
        
      } 
  }
  breakretry() {
    var year = "";
        var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_type = "2";
    }else{
      this.lottery_type = $("#lottery_type").val();
    }
    var time:any = $("#d12").val();
        if(time =="" || time ==null){
      this.message.error("请先选择要重算的日期");
        }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
          this.message.error("请先精确到日");
          return false;
        }else{
          year=sort;
          this.message.error("请先精确到日");
          return false;
        }
        this.QUERY.Breakretry(year,month,day,this.lottery_type,this.breakName).subscribe(data => {
          if (data.ResultCode=1) {
            this.Nodata = false;
          }else{
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
          this.Nodata = true;
          this.data = "数据异常请联系开发人员";
        });      
    } 
  }
  breakexport() {
    var year = "";
    var month = "";
    var day = "";
    if(this.people==0){
      this.lottery_type = "2";
    }else{
      this.lottery_type = $("#lottery_type").val();
    }
    var time:any = $("#d12").val();
    if(time =="" || time ==null){
        this.message.error("请先选择要导出的日期");
    }else{
        var sort = time.split("-");
        if(sort.length ==3){
          year=sort[0];
          month=sort[1];
          day=sort[2];
        }else if(sort.length ==2){
          year=sort[0];
          month=sort[1];
        }else{
          year=sort;
        }
        window.open(AppConfig.baseUrl +'/account/bookieBreakdown/breakdownExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery_type);
      } 
  }
//cashallup开始
cashallupCha(reslt) {
  this.loading = true;
  var   year = "";
  var   month = "";
  var   day = "";
  this.cashzhonglei = $("#lottery_type").val();
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      this.QUERY.Allup(year,month,day,this.cashzhonglei).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
            if (this.cashzhonglei==2) {
              this.alluplanqiu =true;
              this.cashallupzuqiu =false;
              
              this.cashalluplandata = data.total;

              this.cashalluplanHILO = data.HILO;
              this.outalllanHILO = data.HILO[7];
              var str = this.cashalluplanHILO.splice(7,1);

              this.cashalluplanFCA = data.FCA;
              this.outalllanFCA = data.FCA[7];
              var str = this.cashalluplanFCA.splice(7,1);

              this.cashalluplanHDC = data.HDC;
              this.outalllanHDC = data.HDC[7];
              var str = this.cashalluplanHDC.splice(7,1);

              this.cashalluplanWNM = data.WNM;
              this.outalllanWNM = data.WNM[7];
              var str = this.cashalluplanWNM.splice(7,1);

              this.cashalluplanMNL = data.MNL;
              this.outalllanMNL = data.MNL[7];
              var str = this.cashalluplanMNL.splice(7,1);
            }else{
              this.cashallupzuqiu =true;
              this.alluplanqiu =false;
              
              this.cashallupdata = data.total;

              this.cashallupHAD = data.HAD;
              this.outallHAD = data.HAD[7];
              var str = this.cashallupHAD.splice(7,1);

              this.cashallupHHAD = data.HHAD;
              this.outallHHAD = data.HHAD[7];
              var str = this.cashallupHHAD.splice(7,1);

              this.cashallupHAFU = data.HAFU;
              this.outallHAFU = data.HAFU[7];
              var str = this.cashallupHAFU.splice(7,1);

              this.cashallupTTG = data.TTG;
              this.outallTTG = data.TTG[7];
              var str = this.cashallupTTG.splice(7,1);

              this.cashallupCRS = data.CRS;
              this.outallCRS = data.CRS[7];
              var str = this.cashallupCRS.splice(7,1);

              this.cashallupFCA = data.FCA;
              this.outallFCA = data.FCA[7];
              var str = this.cashallupFCA.splice(7,1);
            }
        }else{
          this.loading = false;
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.loading = false;
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });
    } 
}
cashallupretry() {
  var year = "";
  var month = "";
  var day = "";
  this.cashzhonglei = $("#lottery_type").val();
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
    this.message.error("请选择要重算的日期");
      }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
        this.message.error("请先精确到日");
        return false;
      }else{
        year=sort;
        this.message.error("请先精确到日");
        return false;
      }
      this.QUERY.cashallupretry(year,month,day,this.cashzhonglei,this.cashallupName).subscribe(data => {
        if (data.ResultCode=1) {
          this.Nodata = false;
        }else{
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });      
  } 
}
cashallupexport(){
  var   year = "";
  var   month = "";
  var   day = "";
  // if(this.people==0){
  //   this.cashlot = "2";
  // }else{
  //   this.cashlot = $("#lottery_type").val();
  // }
  this.cashlot = $("#lottery_type").val();
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择要导出的日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      window.open(AppConfig.baseUrl +'/account/dailyAllup/dailyAllupExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.cashlot);
    } 
}
cashsingleCha(reslt) {
  this.loading = true;
  var   year = "";
  var   month = "";
  var   day = "";
  this.cashzhongle = $("#lottery_type").val();
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      this.QUERY.Single(year,month,day,this.cashzhongle).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
          this.cashsingletotal = data.total;
          this.cashsinglelan = data.total;
          if (this.cashzhongle==2) {
            this.cashlanqiu =true;
            this.cashzuqiu =false;
          }else{
            this.cashzuqiu =true;
            this.cashlanqiu =false;
          }
        }else{
          this.loading = false;
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.loading = false;
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });
    } 
}
cashsingleretry() {
  var year = "";
  var month = "";
  var day = "";
  this.cashzhongle = $("#lottery_type").val();
      var time:any = $("#d12").val();
      if(time =="" || time ==null){
    this.message.error("请选择要重算的日期");
      }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
        this.message.error("请先精确到日");
        return false;
      }else{
        year=sort;
        this.message.error("请先精确到日");
        return false;
      }
      this.QUERY.cashsingleretry(year,month,day,this.cashzhongle,this.cashsingleName).subscribe(data => {
        if (data.ResultCode=1) {
          this.Nodata = false;
        }else{
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });      
  } 
}
cashsingleexport(){
  var   year = "";
  var   month = "";
  var   day = "";
  // this.cashlott = $("#lottery_type").val();
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择要导出的日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      window.open(AppConfig.baseUrl +'/account/detailSGL/detailSGLExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.cashlot);
    } 
}
cashsummaryCha(reslt) {
  this.loading = true;
  var   year = "";
  var   month = "";
  var   day = "";
  this.cashzhongl = $("#lottery_type").val();
  var time:any = $("#startime").val();
  if(time =="" || time ==null){
      this.message.error("请先选择日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      this.QUERY.Summary(year,month,day,this.cashzhongl).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
          this.modelToday = data.modelToday;
          this.modelWeek = data.modelWeek;
          this.modelMonth = data.modelMonth;
          this.modelYear = data.modelYear;
          this.modelList = data.modelList;
          this.modelTotal = data.total;
        }else{
          this.loading = false;
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.loading = false;
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });
      
    } 
    this.summaryweeking =this.getYearWeek(year, month, day);
    document.getElementById("week").innerText = this.summaryweeking;    
    document.getElementById("month").innerText = month;
}
cashsummaryretry() {
  var year = "";
      var month = "";
  var day = "";
  this.cashzhongl = $("#lottery_type").val();
  var time:any = $("#startime").val();
      if(time =="" || time ==null){
    this.message.error("请先选择要重算的日期");
      }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
        this.message.error("请先精确到日");
        return false;
      }else{
        year=sort;
        this.message.error("请先精确到日");
        return false;
      }
      this.QUERY.cashsummaryretry(year,month,day,this.cashzhongl,this.cashsummaryName).subscribe(data => {
        if (data.ResultCode=1) {
          this.Nodata = false;
        }else{
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });      
  } 
}
cashsummaryexport() {
  var   year = "";
  var   month = "";
  var   day = "";
  // this.cashlotte = $("#lottery_type").val();
  var time:any = $("#startime").val();
  if(time =="" || time ==null){
      this.message.error("请先选择要导出的日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      window.open(AppConfig.baseUrl +'/account/dailyCollectStatements/dailySummaryExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery);
    } 
}
cashmonthsummaryCha(reslt) {
  this.loading = true;
  var   year = "";
  var   month = "";
  var   day = "";
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      this.QUERY.MonthSummary(year,month).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
          console.log(data);
          var objj = [];
          for(let i in  data){
             if(i !='monthTotal'){
              data[i].week =this.week(i)
              objj.push(data[i]);
             }
          }
          this.monthList = objj;
          this.monthTotal = data.monthTotal;
          var obj=Object.keys(data).length-1;
        }else{
          this.loading = false;
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.loading = false;
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });
      
    }
}
cashmonthsummaryretry() {
  var year = "";
  var month = "";
  var day = "";
  var time:any = $("#d12").val();
      if(time =="" || time ==null){
    this.message.error("请先选择要重算的日期");
      }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
        return false;
      }else{
        year=sort;
        return false;
      }
      this.QUERY.cashmonthsummaryretry(year,month,day,this.cashmonthSummaryName).subscribe(data => {
        if (data.ResultCode=1) {
          this.Nodata = false;
        }else{
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });      
  } 
}
//获取第多少周
week(i){
 var result = 0;
  var i; 
  switch (i) {
    case '0': i = "零"; 
    result = i;
    break;
    case '1': i = "一";  
    result = i;
    break;
    case '2': i = "二"; 
    result = i;
    break;
    case '3': i= "三"; 
    result = i;
    break;
    case '4': i = "四";
    result = i;
    break;
    case '5': i = "五";
    result = i;
    break;
    case '6': i = "六"; 
    result = i;
    break;
    case '7': i = "七"; 
    result = i;
    break;
    case '8': i = "八"; 
    result = i;
    break;
    case '9': i = "九"; 
    result = i;
    break;
   }
  return result;
}
cashmonthsummaryexport() {
  var   year = "";
  var   month = "";
  var   day = "";
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择要导出的日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      window.open(AppConfig.baseUrl +'/account/dailyCollectStatements/dailySummaryExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery);
    } 
}
cashbreakCha(reslt) {
  this.loading = true;
  var   year = "";
  var   month = "";
  var   day = "";
  this.cashzhong = $("#lottery_type").val();
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      this.QUERY.Breakdown(year,month,day,this.cashzhong).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
          this.cashbreakpro = data.prolist;
          this.cashtotalpro = data.proTotal;
        }else{
          this.loading = false;
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.loading = false;
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });
      
    } 
}
cashbreakretry() {
  var year = "";
  var month = "";
  var day = "";
  this.cashzhong = $("#lottery_type").val();
  var time:any = $("#d12").val();
      if(time =="" || time ==null){
    this.message.error("请先选择要重算的日期");
      }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
        this.message.error("请先精确到日");
        return false;
      }else{
        year=sort;
        this.message.error("请先精确到日");
        return false;
      }
      this.QUERY.cashbreakretry(year,month,day,this.cashzhong,this.cashbreakdownName).subscribe(data => {
        if (data.ResultCode=1) {
          this.Nodata = false;
        }else{
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });      
  } 
}
cashbreakexport() {
  var   year = "";
  var   month = "";
  var   day = "";
  // this.cashlotte = $("#lottery_type").val();
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择要导出的日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      window.open(AppConfig.baseUrl +'/account/dailyCollectStatements/dailySummaryExcel?year='+year+'&month='+month+'&day='+day+'&lottery_type='+this.lottery);
    } 
}
//order开始
cashall(cashstartime,cashendtime,cashagNum,pageNum,pageSize,cashdeal,cashstate,cashthird,cashinplay,cashtkId,cashuid,cashlottery_type) {
  this.QUERY.Order(cashstartime,cashendtime,cashagNum,pageNum,pageSize,cashdeal,cashstate,cashthird,cashinplay,cashtkId,cashuid,cashlottery_type).subscribe(data => {
    if (data.modelList!=null) {
      this.loading = false;
      this.Nodata = false;
      this.cashcount=data.total.size;
      this.cashpageCount = Math.ceil(this.cashcount/this.pageSize);
      this.cashshu = data.total;
      this.cashshuju = data.modelList;
      for (var i = 0; i < data.modelList.length; i++) {
        switch (this.cashshuju[i].trade_type) {
          case null:
            this.cashshuju[i].tradeName = "--";
            break;
          case 0:
            this.cashshuju[i].tradeName = "未交易";
            break;
          case 1:
            this.cashshuju[i].tradeName = "交易成功";
            break;
          case 2:
            this.cashshuju[i].tradeName = "等待";
            break;
          case 3:
            this.cashshuju[i].tradeName = "交易失败";
            break;
          case 4:
            this.cashshuju[i].tradeName = "取消申请";
            break;
          case 5:
            this.cashshuju[i].tradeName = "通过";
            break;
          case 6:
            this.cashshuju[i].tradeName = "拒绝";
            break;
          case 7:
            this.cashshuju[i].tradeName = "取消";
            break;
          case 44:
            this.cashshuju[i].tradeName = "取消申请";
            break;
        }
        if(this.cashshuju[i].trade_type=="4"){
          this.cashshuju[i].iscancel=true;
        }else{
          this.cashshuju[i].iscancel=false;
        }
        switch (this.cashshuju[i].ballType) {
          case null:
            this.cashshuju[i].ballType_name = "--";
            break;
          case 1:
            this.cashshuju[i].ballType_name = "足球";
            break;
          case 2:
            this.cashshuju[i].ballType_name = "电竞";
            break;
        }
        switch (this.cashshuju[i].inplay) {
          case null:
            this.cashshuju[i].inplay_name = "--";
            break;
          case 0:
            this.cashshuju[i].inplay_name = "死球";
            break;
          case 1:
            this.cashshuju[i].inplay_name = "即场";
            break;
        }
        switch (this.cashshuju[i].state) {
          case null:
            this.cashshuju[i].state_name = "--";
            break;
          case 1:
            this.cashshuju[i].state_name = "中奖";
            break;
          case 2:
            this.cashshuju[i].state_name = "未中奖";
            break;
          case 3:
            this.cashshuju[i].state_name = "Alive";
            break;
        }
        if(this.cashshuju[i].addAwardAmount =="0"){
          this.cashshuju[i].addAwardAmount ="-";
        }else{
          this.cashshuju[i].addAwardAmount = this.cashshuju[i].addAwardAmount;
        }
        
        if(this.cashshuju[i].rakeRate =="0" || this.cashshuju[i].rakeRate ==null ){
          this.cashshuju[i].rakeRate ="-";
        }else{
          this.cashshuju[i].rakeRate = this.cashshuju[i].rakeRate;
        }
        if(this.cashshuju[i].recyclePrice =="-1" || this.cashshuju[i].recyclePrice ==="" || this.cashshuju[i].recyclePrice==null){
          this.cashshuju[i].recycleP ="未回收";
          if(this.cashshuju[i].recyclePrice =="-1"){
            this.cashshuju[i].isNorecycle=false;
          }else{
            this.cashshuju[i].isNorecycle=true;
          }
        }else{
          this.cashshuju[i].recycleP = this.cashshuju[i].recyclePrice;
        }
      }
    }else{
      this.loading = false;
      this.cashcount = 0;
      this.Nodata = true;
      this.data = "暂无新数据";
    }
  },error=>{
    this.loading = false;
    this.Nodata = true;
    this.data = "数据异常请联系开发人员";
  });
}
cashorderCha(reslt) {
  this.loading = true;
  this.cashstartime = $("#cashstime").val();
  this.cashendtime = $("#cashetime").val();
  this.cashagNum =$('#cashagentNum option:selected').val();
  this.cashstate =$('#cashstate option:selected').val();
  this.cashinplay =$('#cashinplay option:selected').val();
  this.cashtkId = $("#cashtk").val();
  this.cashuid = $("#cashuid").val();
  this.cashthird =$('#cashthird option:selected').val();
  this.cashdeal =$('#cashdeal option:selected').val();
  if(this.people==0){
    this.cashlottery_type = "2";
  }else{
    this.cashlottery_type = $("#cashlottery_type").val();
  }
  this.cashall(this.cashstartime,this.cashendtime,this.cashagNum,this.pageNum,this.pageSize,this.cashdeal,this.cashstate,this.cashthird,this.cashinplay,this.cashtkId,this.cashuid,this.cashlottery_type)
}
//分页
cashmodelChange(currPage){
  this.cashall(this.cashstartime,this.cashendtime,this.cashagNum,currPage,this.pageSize,this.cashdeal,this.cashstate,this.cashthird,this.cashinplay,this.cashtkId,this.cashuid,this.cashlottery_type)
}
//点击详情
cashshowdiv(ticketInfo_id,ballType,tkId) {
  this.cashendtime = $("#cashetime").val();
  this.cashtkIding=tkId;
  this.QUERY.Orderdetail(ticketInfo_id,ballType,this.cashendtime).subscribe(response => {
    if (response!=null) {
      this.cashdetails = response.detailList;
console.log(this.cashdetails,"llll")
      for (var i = 0; i < response.detailList.length; i++) {
        var l_code= response.detailList[i].l_code;// level match code: 一场比赛的赛事编码 +,+ 降关情况
        var l_codes=l_code.split(",");
        var betContents= response.detailList[i].betContent.split("/");
        var canceled = response.detailList[i].canceled;
        var cancel = canceled.split(",");
        this.contents=""; 
        this.betents="";
        for (var j = 0; j < l_codes.length; j++) {
          if(this.contents==""){
            if(l_codes[j]=="0"){
                if(cancel[j] == "VOID" ){
                  this.contents=betContents[j];
                  this.cashdetails[i].isA=true;
                }else{
                  this.contents=betContents[j]; 
                  this.cashdetails[i].isB=true;
                }
             }else{
              this.contents=betContents[j]; 
            }
          }else{
            if(l_codes[j]=="0"){
               if(cancel[j] == "VOID" ){
                this.contents=this.contents+'/';
                this.betents=betContents[j]; 
                this.cashdetails[i].isA=true;
              }else{ 
                this.contents=this.contents+'/';
                this.betents=betContents[j]; 
                this.cashdetails[i].isB=true;
               } 
            }else{
                this.contents=this.contents+'/'+betContents[j];
            }
          } 
        }
      }

      this.Nodata3 = false;
    }else {
    this.details = [];
    this.Nodata3 = true;
    this.data3 = "暂无新数据";
    }
  }, error => {
    this.Nodata3 = true;
    this.data3 = "数据异常请联系开发人员";
  })
  document.getElementById("bg").style.display = "block";
  document.getElementById("show").style.display = "block";
}
cashhidediv() {
  document.getElementById("bg").style.display = 'none';
  document.getElementById("show").style.display = 'none';
}
//导出
cshorderexport(){
  this.cashstartime = $("#cashstime").val();
  this.cashendtime = $("#cashetime").val();
  this.cashagNum =$('#cashagentNum option:selected').val();
  this.cashstate =$('#cashstate option:selected').val();
  this.cashinplay =$('#cashinplay option:selected').val();
  this.cashtkId = $("#cashtk").val();
  this.cashuid = $("#cashuid").val();
  this.cashthird =$('#cashthird option:selected').val();
  this.cashdeal =$('#cashdeal option:selected').val();
  if(this.people==0){
    this.cashlottery_type = "2";
  }else{
    this.cashlottery_type = $("#cashlottery_type").val();
  }
    window.open(AppConfig.baseUrl + "/account/orderManage/userManagementExcel?startDate="+this.cashstartime +"&endDate="+this.cashendtime+"&agent_id="+this.cashagNum+"&trade_type="+this.cashdeal+"&state="+this.cashstate+"&recycleState="+this.cashthird+"&inplay="+this.cashinplay+"&tkId="+this.cashtkId+"&uid="+this.cashuid+"&ballType="+this.cashlottery_type);
}
cashthirdCha(reslt) {
  this.loading = true;
  this.thirdstartime = $("#thirdstartime").val();
  this.thirdendtime = $("#thirdendtime").val();
  this.agentid =$('#thirdagentNum option:selected').val();
  this.per =$("#paper").val();
  this.thirdtkId =$("#thirdtk").val();
  this.thirdngif=true;
  if(this.thirdtkId !="" && this.thirdtkId !=null){
    this.QUERY.Thirdid(this.thirdtkId,this.agentid).subscribe(data => {
      if (data!=null) {
        this.loading = false;
        this.Nodata = false;
        if(this.agentid =="110"){   //110-彩票宝
          this.message.error("该渠道未开发此接口");
        }else{
          this.thirdshu = data.ticketResult;
          this.thirdngif=false;
        }
      }else{
        this.loading = false;
        this.Nodata = true;
        this.data = "暂无新数据";
      }
    },error=>{
      this.loading = false;
      this.Nodata = true;
      this.data = "数据异常请联系开发人员";
    });		
  }else{
    this.QUERY.Third(this.agentid,this.thirdstartime,this.thirdendtime,this.per).subscribe(data => {
      if (data!=null) {
        this.loading = false;
        this.Nodata = false;
            if(this.agentid =="110"||data.resultList.length<100){
              if(this.agentid =="110"){
                this.message.error("该渠道未开发此接口");
              }else{
                this.message.error("已是最后一页");
                this.thirdshuju = data.resultList;
              }
            }else{
              this.thirdshuju = data.resultList;
            }
      }else{
        this.loading = false;
        this.Nodata = true;
        this.data = "暂无新数据";
      }
    },error=>{
      this.loading = false;
      this.Nodata = true;
      this.data = "数据异常请联系开发人员";
    });
  }
}
cashthirdexport() {
  this.thirdstartime = $("#thirdstartime").val();
  this.thirdendtime = $("#thirdendtime").val();
  this.agentid =$('#thirdagentNum option:selected').val();
  this.per =$("#paper").val();
      window.open(AppConfig.baseUrl +'/account/orderTicket//orderExcel?startDate='+this.thirdstartime+'&endtime='+this.thirdendtime+'&agentid='+this.agentid+'&page='+this.per);
}
//errorticket开始
errorall(pageNum,pageSize,errorstartime,errorendtime) {
  this.QUERY.Error(pageNum,pageSize,errorstartime,errorendtime).subscribe(data => {
    if (data.ticketResult!=null) {
      this.loading = false;
      this.Nodata = false;
      this.errorcount=data.total.size;
      this.errorpageCount = Math.ceil(this.errorcount/this.pageSize);
      this.errorshuju = data.ticketResult;
      for (var i = 0; i < data.ticketResult.length; i++) {
        switch (this.errorshuju[i].state) {
          case 0:
            this.errorshuju[i].state = "未处理";
            break;
          case 1:
            this.errorshuju[i].state = "已处理";
            break;
        }
      }
    }else{
      this.loading = false;
      this.errorcount = 0;
      this.Nodata = true;
      this.data = "暂无新数据";
    }
  },error=>{
    this.loading = false;
    this.Nodata = true;
    this.data = "数据异常请联系开发人员";
  });
}
casherrorCha(reslt) {
  this.loading = true;
  this.errorstartime = $("#errorstartime").val();
  this.errorendtime = $("#errorendtime").val();
  this.errorall(this.pageNum,this.pageSize,this.errorstartime,this.errorendtime)
}
//分页
errormodelChange(currPage){
  this.errorall(currPage,this.pageSize,this.errorstartime,this.errorendtime)
}
//channel
channelCha(reslt) {
  this.loading = true;
  var  year = "";
  var  month = "";
  var  day = "";
  var time:any = $("#d12").val();
  if(time =="" || time ==null){
      this.message.error("请先选择日期");
  }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
      }else{
        year=sort;
      }
      this.QUERY.Channel(year,month,day).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
          this.channeltotal = data.total;
          this.channelshuju = data.agentInfoModels;
          for(var i=0; i<data.agentInfoModels.length; i++){
            if(this.channelshuju[i].recyclePrice =="0"){
              this.channelshuju[i].recyclePriceName ="-";
            }else{
              this.channelshuju[i].recyclePriceName = this.channelshuju[i].recyclePrice;
            }
            if(this.channelshuju[i].agentSell =="-1"){
              this.channelshuju[i].agentSellMess = "停售";
              
            }else if(this.channelshuju[i].agentId == this.channelshuju[i].agentSell){
              this.channelshuju[i].agentSellMess = "开售";
            }
          }
        }else{
          this.loading = false;
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.loading = false;
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });
    } 
}
channelretry() {
  var year = "";
  var month = "";
  var day = "";
  var time:any = $("#d12").val();
      if(time =="" || time ==null){
    this.message.error("请先选择要重算的日期");
      }else{
      var sort = time.split("-");
      if(sort.length ==3){
        year=sort[0];
        month=sort[1];
        day=sort[2];
      }else if(sort.length ==2){
        year=sort[0];
        month=sort[1];
        this.message.error("请先精确到日");
        return false;
      }else{
        year=sort;
        this.message.error("请先精确到日");
        return false;
      }
      this.QUERY.channelretry(year,month,day,this.cashagentName).subscribe(data => {
        if (data.ResultCode=1) {
          this.Nodata = false;
        }else{
          this.Nodata = true;
          this.data = "暂无新数据";
        }
      },error=>{
        this.Nodata = true;
        this.data = "数据异常请联系开发人员";
      });      
  } 
}

}