import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import { InterfaceService} from '../service/interface.service';
import 'rxjs/add/operator/map'; // (2)

import { ElMessageService } from 'element-angular';

import { AppConfig } from "../const/app-config";
import * as $ from "jquery";
@Component({
  selector: 'app-vallup',
  templateUrl: './vallup.component.html',
  styleUrls: ['./vallup.component.scss'],
})
export class VallupComponent implements OnInit {
  allupdata: string[];   //订单变量
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
        this.QUERY.bookieAllup(year,month,day).subscribe(data => {
            console.log(data.HAD,"5555")
          if (data!=null) {
            this.Nodata = false;
            this.allupdata = data.total;

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

          }else{
            // this.allupdatas = data.agentInfoModels;
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
        window.open(AppConfig.baseUrl +'/account/bookieAllup/dailyAllupExcel?year='+year+'&month='+month+'&day='+day);
      } 
    }
}
