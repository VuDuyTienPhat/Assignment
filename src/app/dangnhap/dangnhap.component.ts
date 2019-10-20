import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Location } from '@angular/common'
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
  logged =false;
  nhapsaithongtin = false;
  students: Student[] =
    [
      {
        id: 1,
        username: "teonv",
        password: "iloveyou",
        fullname: "Nguyễn Văn Tèo",
        email: "teonv@fpt.edu.vn",
        gender: "nam",
        birthday: new Date(1995, 12, 21),
      },
      {
        id: 2,
        username: "pheonv",
        password: "iloveyou",
        fullname: "Nguyễn Văn Chí Phèo",
        email: "pheonv@fpt.edu.vn",
        gender: "nam",
        birthday: new Date(1985, 10, 11),
      },
      {
        id: 3,
        username: "nopt",
        password: "iloveyou",
        fullname: "Phạm Thị Nở",
        email: "nopt@fpt.edu.vn",
        gender: "nu",
        birthday: new Date(1993, 5, 15),
      }
    ]
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
  }
  dem = 0;
  Dangnhap() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.formStudent.username === this.students[i].username && this.formStudent.password === this.students[i].password) {


        // this.location.back();
        // this.router.navigate(['../', { logged: true }]);
        this.logged = true;
        // this.formStudent={
        //   username:"",
        //   password:""
        // };


        // this.dem++;
      }
      else {
        this.nhapsaithongtin = true;
      }
    }


    // if (this.dem === 1) {
    // //  this.router.navigate(['/trangchu',{username:this.formStudent.username}])


    //   // this.router.navigate(['',{id:1}]);
    //   // this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});

    // }

  }

}

