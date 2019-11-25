import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { DataService } from '../service.service';
import { NgForm } from '@angular/forms'
import { User } from 'src/shared/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {

  formStudent: User = {
    username: null,
    password: null,
    email: null,
  }


  constructor(private ds: DataService,private router:Router) { }

  ngOnInit() {

  }

  Addthongtin(studentForm:NgForm) {
    this.ds.postRegister(studentForm.value).subscribe(data => {
      if(data['message']){
        alert('user đã tồn tại');
        // console.log(data);
        
      }
      else{
        console.log(data.constructor());
        alert('đã đăng ký thành công');
        this.router.navigate(['/dangnhap']);  
        studentForm.reset();
      }
    })


  }

}
