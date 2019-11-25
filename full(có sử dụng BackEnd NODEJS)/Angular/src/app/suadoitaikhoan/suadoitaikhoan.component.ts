import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { DataService } from '../service.service';
@Component({
  selector: 'app-suadoitaikhoan',
  templateUrl: './suadoitaikhoan.component.html',
  styleUrls: ['./suadoitaikhoan.component.css']
})
export class SuadoitaikhoanComponent implements OnInit {
  formSudent = {
    id: 0,
    username: "",
    fullname: "",
    email: "",
    password: "",
    gender: "",
    birthday: new Date().toISOString().substring(0, 10),
  }
  students;
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.students=this.ds.students;
  }
  selectStudentId = -1;
  ShowEditStudent(student: Student) {
    this.formSudent = {
      id: student.id,
      username: student.username,
      fullname: student.fullname,
      email: student.email,
      password: student.password,
      gender: student.gender,
      birthday: new Date().toISOString().substring(0, 10),
    }
    this.selectStudentId = this.formSudent.id
  }
  SaveStudentEdit(id: number) {
    let index = this.students.indexOf(this.students.find(sv => sv.id === id));
    this.students[index] = Object.assign(this.formSudent);
    this.selectStudentId = -1;
    this.formSudent = {
      id: 0,
      username: "",
      fullname: "",
      email: "",
      password: "",
      gender: "",
      birthday: new Date().toISOString().substring(0, 10),
    }
  }
}
