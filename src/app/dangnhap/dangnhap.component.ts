import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Location } from '@angular/common'
import { DataService } from '../service.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  student: Student;
  formStudent = {
    username: "",
    password: "",
  }
  dangNhapThanhCong =true;
  nhapSaiThongTin = true;
  students;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location,private ds:DataService) { }

  ngOnInit() {
    this.students=this.ds.students;
  }
 
  Dangnhap() {
    console.log(this.students);
    for (let i = 0; i < this.students.length; i++) {
      if (this.formStudent.username ===this.students[i].username && this.formStudent.password === this.students[i].password) {
        this.dangNhapThanhCong=false;
        this.nhapSaiThongTin=!this.dangNhapThanhCong;
        alert(`Đăng nhập thành công`);
        this.ds.themTen(this.students[i].username);
        this.router.navigate(['/trangchu']);
        this.ds.logged=true;
        break;
      }
      else {
        this.nhapSaiThongTin = false;
        this.dangNhapThanhCong=!this.nhapSaiThongTin;
      }
    }
 }

}

