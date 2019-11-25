import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Location } from '@angular/common'
import { DataService } from '../service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  student: Student;


  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private ds: DataService) { }

  ngOnInit() {

  }

  login(formLogin: NgForm) {
    console.log('form.value=',formLogin.value)
    this.ds.postAuthenticate(formLogin.value).subscribe(
      //data tức là trả về token
      //err tức là trả error hoặc info, bởi vì 2 thằng này đều có mã là 4xx(mã lỗi) 
      data => {
        localStorage.setItem('token', data['token']);
        this.router.navigate(['/trangchu'])
      },
      err=>{
        alert(err.error.message);
      }
    )

  }

}

