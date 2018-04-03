import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import { InterfaceService} from '../service/interface.service';
import 'rxjs/add/operator/map'; // (2)

import { LiveOrdermanage } from '../modules/ordermanage';
import { ElMessageService } from 'element-angular';

import { AppConfig } from "../const/app-config";
import * as $ from "jquery";
@Component({
  selector: 'app-vordermanage',
  templateUrl: './vordermanage.component.html',
  styleUrls: ['./vordermanage.component.scss'],
})
export class VordermanageComponent implements OnInit {
  resut: any[];   //返回所有渠道信息变量
  shuju:LiveOrdermanage;
  shu:string[];
  details:string[];

  // AddDayCount:any;
  // GetDateStr:any;

  startime: any;
  endtime: any;
  agNum: any;
  state: any;
  inplay: any;
  tkId: any;
  uid: any;

  count: number = 0; //总条数  
  pageNum: number = 1;  //默认第一页
  pageSize: number = 18;  //每页条数

  ding: string;
  yong: string;
  in: string;
  sta: string;
  agent: string;  //渠道默认值
  rec: string;
  tra: string;
  ca: string;     //彩种默认值
  da: string;     //时间默认值
 
  Nodata:boolean; //是否显示提示信息
  data:string;  //显示提示信息
  Nodata3:boolean;
  data3:string;
  constructor(private QUERY: InterfaceService, private message: ElMessageService) { } // (3)
  // var time =  new Date();
  // var year = time.getFullYear();
  // var month = time.getMonth()+1;
  // var day = time.getDate();
  // var hour = time.getHours();
  // var minutes = time.getMinutes();  
  // var second = time.getSeconds(); 
  // console.log(time,year,month,day,hour,minutes,second,"5535")
  // GetDateStr(AddDayCount) { 
  //   var dd = new Date(); 
  //   dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
  //   var y = dd.getFullYear(); 
  //   var m = dd.getMonth()+1;//获取当前月份的日期 
  //   var d = dd.getDate(); 
  //   var hour = time.getHours();
  //   var minutes = time.getMinutes();  
  //   var second = time.getSeconds(); 
  //   return y+"-"+m+"-"+d; 
  // } 
  //   //time.setTime(time.getTime()-1*24*60*60*1000);
  //   // console.log(GetDateStr(1),"11");
  // if(hour>=12){
  //   var s1 = this.GetDateStr(0)+" 12:00:00";
  //   var end = this.GetDateStr(0)+" 23:59:59";
  // }else{
  //   var s1 = this.GetDateStr(-1)+" 12:00:00";
  //   var end =this. GetDateStr(0)+" 23:59:59";
  // }
  // var star =$("#startime").val(s1);
  // var startime=star.val();
  // var end =$("#endtime").val(end);
  // var endtime =end.val();
  
  ngOnInit() {
    this.ding = "";
    this.yong = "";
    this.in = '0';
    this.sta = '1';
    this.agent = "100"; //渠道值
    this.rec = '1';
    this.tra = '1';
    this.Nodata =false;
    //返回渠道信息
    this.QUERY.queryAllAgent().subscribe(data => {
      if (data)
        this.resut = data.agentList;
    });
  }
  all(startime,endtime,agNum,pageNum,pageSize,state,inplay,tkId,uid) {
    this.QUERY.queryAll(startime,endtime,agNum,pageNum,pageSize,state,inplay,tkId,uid).subscribe(data => {
      if (data.modelList!=null) {
        this.count=data.total.size;
        this.shu = data.total;
        this.Nodata = false;
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
              this.shuju[i].ballType_name = "篮球";
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
        this.shuju=data.data;
        this.Nodata = true;
        this.data = "暂无新数据";
      }
    },error=>{
      this.Nodata = true;
      this.data = "数据异常请联系开发人员";
    });
  }
  onCha(reslt) {
    this.startime = $("#startime").val();
    this.endtime = $("#endtime").val();
    this.agNum =$('#agentNum option:selected').val();
		this.state =$('#state option:selected').val();
		this.inplay =$('#inplay option:selected').val();
		this.tkId = $("#tk").val();
    this.uid = $("#uid").val();
    this.all(this.startime,this.endtime,this.agNum,this.pageNum,this.pageSize,this.state,this.inplay,this.tkId,this.uid)
  }
  //分页
  modelChange(currentPage){
    this.all(this.startime,this.endtime,this.agNum,currentPage,this.pageSize,this.state,this.inplay,this.tkId,this.uid)
  }
  //点击详情
  showdiv(ticketid,ballType) {
    console.log(ticketid,ballType,"jjj")
    this.QUERY.bookieOrder(ticketid,ballType).subscribe(response => {
      console.log(response,"jjj")
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
  export(){
    var startime = $("#startime").val();
    var endtime =$("#endtime").val();
    var agNum =$('#agentNum option:selected').val();
    var state =$('#state option:selected').val();
    var inplay =$('#inplay option:selected').val();
    var tkId = $("#tk").val();
    var uid = $("#uid").val();
    console.log(startime,endtime,agNum,state,inplay,tkId,uid,"hhhh");
    
      window.open(AppConfig.baseUrl + "account/bookieOrder/userManagementExcel?startDate="+startime +"&endDate="+endtime+"&agentId="+agNum+"&state="+state+"&inplay="+inplay+"&tkId="+tkId+"&uid="+uid);
    
  }

}
