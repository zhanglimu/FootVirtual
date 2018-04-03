import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http'; // (1)
import { InterfaceService} from '../service/interface.service';
import 'rxjs/add/operator/map'; // (2)
import { ElMessageService } from 'element-angular';
import { AppConfig } from "../const/app-config";
import * as $ from "jquery";
@Component({
  selector: 'app-vsummary',
  templateUrl: './vsummary.component.html',
  styleUrls: ['./vsummary.component.scss'],
})
export class VsummaryComponent implements OnInit {
  summarytotal: string[];   
  summaryToday:string[];
  summaryList:string[];
  summaryWeek:string[];
  summaryYear:string[];
  summaryMonth:string[];
  
  date:string;
  monthing:any;
  weeking:any;
  checkDate:any;
 
  Nodata:boolean; //是否显示提示信息
  data:string;  //显示提示信息
  constructor(private QUERY: InterfaceService, private message: ElMessageService) { } // (3)
  
  ngOnInit() {
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
//初始默认时间
    var timeing =  new Date();
    var year = timeing.getFullYear();
    var month = timeing.getMonth()+1;
    var day = timeing.getDate();
    $("#startime").val(year+"-"+month+"-"+day);
  }

  onCha(reslt) {
    var	year = "";
		var	month = "";
		var	day = "";
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
        console.log(year,month,day,"41444")
        this.QUERY.bookieSummary(year,month,day).subscribe(data => {
          console.log(data,"7474")
          if (data!=null) {
            this.Nodata = false;
            this.summarytotal = data.total;
            this.summaryToday = data.modelToday;
            this.summaryList = data.modelList;
            this.summaryWeek = data.modelWeek;
            this.summaryYear = data.modelYear;
            this.summaryMonth = data.modelMonth;
          }else{
            // this.summaryToday = data.modelToday;
            this.Nodata = true;
            this.data = "暂无新数据";
          }
        },error=>{
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
  //导出
  export() {
    var	year = "";
		var	month = "";
		var	day = "";
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
        window.open(AppConfig.baseUrl +'/account/bookieSummary/summaryExcel?year='+year+'&month='+month+'&day='+day);
      } 
    }
}
