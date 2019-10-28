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
  // students: Student[] =
  //   [
  //     {
  //       id: 1,
  //       username: "teonv",
  //       password: "iloveyou",
  //       fullname: "Nguyễn Văn Tèo",
  //       email: "teonv@fpt.edu.vn",
  //       gender: "nam",
  //       birthday: new Date(1995, 12, 21),
  //     },
  //     {
  //       id: 2,
  //       username: "pheonv",
  //       password: "iloveyou",
  //       fullname: "Nguyễn Văn Chí Phèo",
  //       email: "pheonv@fpt.edu.vn",
  //       gender: "nam",
  //       birthday: new Date(1985, 10, 11),
  //     },
  //     {
  //       id: 3,
  //       username: "nopt",
  //       password: "iloveyou",
  //       fullname: "Phạm Thị Nở",
  //       email: "nopt@fpt.edu.vn",
  //       gender: "nu",
  //       birthday: new Date(1993, 5, 15),
  //     }
  //   ]
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
        break;
      }
      else {
        this.nhapSaiThongTin = false;
        this.dangNhapThanhCong=!this.nhapSaiThongTin;
      }
    }


    // if (this.dem === 1) {
    // //  this.router.navigate(['/trangchu',{username:this.formStudent.username}])


    //   // this.router.navigate(['',{id:1}]);
    //   // this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});

    // }

  }

}

