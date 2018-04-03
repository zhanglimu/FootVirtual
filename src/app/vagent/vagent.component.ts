import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import { InterfaceService} from '../service/interface.service';
import 'rxjs/add/operator/map'; // (2)

import { ElMessageService } from 'element-angular';

import { AppConfig } from "../const/app-config";
import * as $ from "jquery";
@Component({
  selector: 'app-vagent',
  templateUrl: './vagent.component.html',
  styleUrls: ['./vagent.component.scss'],
})
export class VagentComponent implements OnInit {
  agentdata: string[];   //订单变量
  agentdatas:string[];
 
  Nodata:boolean; //是否显示提示信息
  data:string;  //显示提示信息
  constructor(private QUERY: InterfaceService, private message: ElMessageService) { } // (3)
  
  ngOnInit() {
    var time =  new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    $("#d12").val(year+"-"+month+"-"+day);
  }

  onCha(reslt) {
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
        // console.log(year,month,day,"41444")
        this.QUERY.bookieAgent(year,month,day).subscribe(Response => {
            // console.log(Response.agentInfoModels,"5555")
          if (Response.agentInfoModels!=null) {
            this.Nodata = false;
            this.agentdata = Response.total;
            this.agentdatas = Response.agentInfoModels;
          }else{
            this.agentdatas = Response.agentInfoModels;
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
  export() {
    var	year = "";
		var	month = "";
		var	day = "";
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
        window.open(AppConfig.baseUrl +'/account/bookieAgent/channelStatisticsExcel?year='+year+'&month='+month+'&day='+day);
      } 
    }
}
