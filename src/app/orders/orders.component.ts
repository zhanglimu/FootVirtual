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
    public switchIndex: string = '8';
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
    da: string;     //时间默认值
    lott:string;
    timek:string;
    timej:string;
    //single开始
    total: string[];   //订单变量
    // singlebox:string[];
    // singlehis:string[];
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
    //break
    breakpro:string[];
    totalpro:string[];
    breakweeking:any;
    lottery_type:any;
    loery:string;
    breakName:string;
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
    cashlot:any;
    //cashsingle
    cashsingletotal:string[];
    cashsingledata:string[];
    cashlott:any;
    //cashsummary
    summaryweeking:any;
    modelToday:string[];
    modelWeek:string[];
    modelMonth:string[];
    modelYear:string[];
    modelList:string[];
    modelTotal:string[];
    cashlotte:any;
    //cashmonthsummary
    monthTotal:string[];
    monthList:string[];
    WeekList:string[];
    Weektotal:string[];
    tmpnewchar:any;
    time1:string;
    //cashbreak
    cashbreakFB:string[];
    cashFBtotal:string[];
    cashbreakBK:string[];
    cashBKtotal:string[];
    cashbreaktotal:string[];
    cashbreakweeking:any;
    //cashorder
    dea:string;
    thir:string;
    cashlotter:string;
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
    // this.pageCount =null;
    this.shu = [];
    this.shuju = null;
    //single
    this.total = null;
    // this.singlebox = null;
    // this.singlehis = [];
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
    this.cashsingledata=[];
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
    this.WeekList=[];
    this.Weektotal=[];
    //cashbreak
    this.cashbreakFB=[];
    this.cashFBtotal=[];
    this.cashbreakBK=[];
    this.cashBKtotal=[];
    this.cashbreaktotal=[];
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
    this.cashbreakweeking =week;
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
    //order结束
    this.lotte = "2";//彩种值
    this.lotter = "2";//彩种值
    this.loery = "2"
    this.agentName = "agent";
    this.singleName = "single";
    this.allupName = "allup";
    this.breakName = "break";
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
    this.cashlot = "1";//彩种值
    this.cashlott = "1";
    this.cashlotte = "1";
    //cashorder
    this.dea = '';
    this.thir = '';
    this.cashlotter = "1";
  }
  summaryCha(reslt) {
    this.loading = true;
    var	year = "";
		var	month = "";
    var	day = "";
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
    var	year = "";
		var	month = "";
    var	day = "";
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
    var	year = "";
		var	month = "";
    var	day = "";
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
    var	year = "";
    var	month = "";
    var	day = "";
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
    var	year = "";
		var	month = "";
    var	day = "";
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
    var	year = "";
		var	month = "";
		var	day = "";
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
    // var hour = time.getHours();
    // var minutes = time.getMinutes();  
    // var second = time.getSeconds(); 
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
    var	year = "";
		var	month = "";
    var	day = "";
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
    var	year = "";
		var	month = "";
    var	day = "";
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
    var	year = "";
		var	month = "";
		var	day = "";
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
    var	year = "";
		var	month = "";
		var	day = "";
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
    var	year = "";
		var	month = "";
    var	day = "";
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
    var	year = "";
		var	month = "";
		var	day = "";
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
    var	year = "";
    var	month = "";
    var	day = "";
    if(this.people==0){
      this.lottery_type = "2";
    }else{
      this.lottery_type = $("#lottery_type").val();
    }
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
      this.breakweeking =this.getYearWeek(year, month, day);
      document.getElementById("week").innerText = this.breakweeking;	
      document.getElementById("month").innerText = month;
  }
  breakretry() {
    var	year = "";
		var	month = "";
    var	day = "";
    if(this.people==0){
      this.lottery_type = "2";
    }else{
      this.lottery_type = $("#lottery_type").val();
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
    var	year = "";
    var	month = "";
    var	day = "";
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
//cashallup开始
cashallupCha(reslt) {
  this.loading = true;
  var	year = "";
  var	month = "";
  var	day = "";
  // this.cashlot = $("#lottery_type").val();
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
      this.QUERY.Allup(year,month,day).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
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
cashallupexport(){
  var	year = "";
  var	month = "";
  var	day = "";
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
  var	year = "";
  var	month = "";
  var	day = "";
  // if(this.people==0){
  //   this.lottery_ty = "2";
  // }else{
  //   this.lottery_ty = $("#lottery_type").val();
  // }
  this.cashlott = $("#lottery_type").val();
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
      this.QUERY.Single(year,month,day).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
          this.cashsingletotal = data.total;
          this.cashsingledata = data.modelList;
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
cashsingleexport(){
  var	year = "";
  var	month = "";
  var	day = "";
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
  var	year = "";
  var	month = "";
  var	day = "";
  // this.cashlotte = $("#lottery_type").val();
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
      this.QUERY.Summary(year,month,day).subscribe(data => {
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
cashsummaryexport() {
  var	year = "";
  var	month = "";
  var	day = "";
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
  var	year = "";
  var	month = "";
  var	day = "";
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
          this.monthList = data;
          console.log(this.monthList,"ddd")
          this.monthTotal = data.monthTotal;
          var obj=Object.keys(data).length-1;
          this.tmpnewchar ='';
          for (var i = 1; i <=obj; i++) {	
            switch (i) {
                  case 0: this.tmpnewchar = "零"; break;
                  case 1: this.tmpnewchar = "一"; break;
                  case 2: this.tmpnewchar = "二"; break;
                  case 3: this.tmpnewchar = "三"; break;
                  case 4: this.tmpnewchar = "四"; break;
                  case 5: this.tmpnewchar = "五"; break;
                  case 6: this.tmpnewchar = "六"; break;
                  case 7: this.tmpnewchar = "七"; break;
                  case 8: this.tmpnewchar = "八"; break;
                  case 9: this.tmpnewchar = "九"; break;
                 }
                //  this.monthList.forEach(weekList => {
                //   this.WeekList.map(item => {
                    // item.selected = this.selectedAll
                    // if (this.selectedAll) {
                    //   this.leagues.push(item.name);
                    // }
                //   })
                // });	
            for (var j = 0; j <data[i].weekList.length; j++) {
              this.WeekList = data[i].weekList;
              this.Weektotal = data[i].Weektotal;
              // console.log(this.WeekList,"4444")
              // console.log(this.Weektotal,"252")
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
cashmonthsummaryexport() {
  var	year = "";
  var	month = "";
  var	day = "";
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
cashbreakCha(reslt) {
  this.loading = true;
  var	year = "";
  var	month = "";
  var	day = "";
  // this.cashlotte = $("#lottery_type").val();
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
      this.QUERY.Breakdown(year,month,day).subscribe(data => {
        if (data!=null) {
          this.loading = false;
          this.Nodata = false;
          this.cashbreakFB = data.modelList;
          this.cashFBtotal = data.FBtotal;
          this.cashbreakBK = data.basketBallModelList;
          this.cashBKtotal = data.BKtotal;
          this.cashbreaktotal = data.total;
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
    this.cashbreakweeking =this.getYearWeek(year, month, day);
    document.getElementById("week").innerText = this.cashbreakweeking;	
    document.getElementById("month").innerText = month;
}
cashbreakexport() {
  var	year = "";
  var	month = "";
  var	day = "";
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


}