import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { DataService } from '../service.service';
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  formStudent = {
    username: null,
    password: null,
    email: null,
  }
  students: any;//chứa dl students.json


  constructor(private ds: DataService) { }

  ngOnInit() {
    // this.ds.getStudents().subscribe(data=>{
    //   this.students=data;
    // })
    this.students=this.ds.students;
    console.log(`this.students=`, this.students)
  }
  Addthongtin() {
    this.ds.themTaiKhoan(this.formStudent);
    this.formStudent = {
      username: null,
      password: null,
      email: null,
    }
    alert('đăng kí thành công!')
  }

}
