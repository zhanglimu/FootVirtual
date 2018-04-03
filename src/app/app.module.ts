import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';

import { OrdersComponent } from './orders/orders.component';
import { InterfaceService} from './service/interface.service';
import { LoginComponent }  from './login/login.component';
import { LoginService} from './service/login.service';
import { LoginoutService} from './service/loginout.service';

import { VsummaryComponent } from './vsummary/vsummary.component';
import { VordermanageComponent } from './vordermanage/vordermanage.component';
import { VallupComponent } from './vallup/vallup.component';
import { VagentComponent } from './vagent/vagent.component';
import { VsingleComponent } from './vsingle/vsingle.component';


//路由配置方法
export const ROUTES : Routes =[
  {path: '', pathMatch:'full', redirectTo:'login'}, //默认访问页面
  {path :'login', component:LoginComponent},
  {path :'orders', component:OrdersComponent},
  {path :'vsummary', component:VsummaryComponent},
  {path :'vagent', component:VagentComponent},
  {path :'vordermanage', component:VordermanageComponent},
  {path :'vsingle', component:VsingleComponent},
  {path :'vallup', component:VallupComponent},
  
]
//引用文件
@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    ElModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    AppComponent, 
    LoginComponent, 
    OrdersComponent,
    VsummaryComponent,
    VagentComponent,
    VordermanageComponent,
    VsingleComponent,
    VallupComponent,
  ],
  providers: [InterfaceService,LoginService,LoginoutService],
  bootstrap: [AppComponent]
 
})

export class AppModule { }
