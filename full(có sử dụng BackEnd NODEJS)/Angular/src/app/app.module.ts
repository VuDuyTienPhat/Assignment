import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // phân trang


import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { SuadoitaikhoanComponent } from './suadoitaikhoan/suadoitaikhoan.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';

import { LienheComponent } from './lienhe/lienhe.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { ThiTnComponent } from './thi-tn/thi-tn.component';
import {HttpClientModule } from '@angular/common/http'
import { DataService } from './service.service';
import { EditinfoComponent } from './editinfo/editinfo.component';

import { ResultComponent } from './result/result.component';
import { AuthGuard } from 'auth/auth.guard';
import { CountdownModule } from 'ngx-countdown';
@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    GopyComponent,
    HoidapComponent,
    DangkiComponent,
    DangnhapComponent,
    DoimatkhauComponent,
    SuadoitaikhoanComponent,
    DanhmucmonhocComponent,
    
    LienheComponent,
    QuenmatkhauComponent,
    ThiTnComponent,
    EditinfoComponent,
    ResultComponent,
    
    
    
    
  ],

  imports: [
    CountdownModule,
    HttpClientModule,   
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      [
        {path:'',component:TrangchuComponent},
        {path:'trangchu',component:TrangchuComponent},
        {path:'dangki',component:DangkiComponent},
        {path:'dangnhap',component:DangnhapComponent},
        {path:'lienhe',component:LienheComponent},
        {path:'danhmucmonhoc',component:DanhmucmonhocComponent},
        {path:'doimatkhau',component:DoimatkhauComponent},
        {path:'quenmatkhau',component:QuenmatkhauComponent},
        {path:'gioithieu',component:GioithieuComponent},
        {path:'gopy',component:GopyComponent},
        {path:'hoidap',component:HoidapComponent},
        {path:'suadoitaikhoan',component:EditinfoComponent},
        {
          path:'thiTN/:Id',component:ThiTnComponent,canActivate:[AuthGuard]
        },
        {path:'result',component:ResultComponent},
       
        { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
      ]
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
  