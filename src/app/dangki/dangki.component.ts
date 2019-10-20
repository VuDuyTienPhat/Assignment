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
    fullname: null,
    email: null,
    gender: null,
    birthday: new Date(),
  }
  students:any;//chứa dl students.json

    
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getStudents().subscribe(data=>{
      this.students=data;
    })
  }
  Addthongtin() {
    this.students.push(this.formStudent)
    this.formStudent = {
      username: null,
      password: null,
      fullname: null,
      email: null,
      gender: null,
      birthday: new Date(),
    }
  }

}
