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
import { ThiTNComponent } from './thi-tn/thi-tn.component';
import {HttpClientModule } from '@angular/common/http'
import { DataService } from './service.service';
import { EditinfoComponent } from './editinfo/editinfo.component';
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
    ThiTNComponent,
    EditinfoComponent,
    
    
    
  ],

  imports: [
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
        {path:'thiTN/:Id',component:ThiTNComponent},
       
        // { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
      ]
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  /*Trang chủ

      Trang giới thiệu
      Trang liên hệ
      Trang góp ý
      Trang hỏi đáp
      


      
      Trang đăng nhập

      Trang đăng ký
      Trang đổi mật khẩu
      Trang sửa đổi tài khoản
      Trang danh mục môn học
      Trang thi trắc nghiệm
 */