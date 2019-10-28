import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from './students';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public students = [
    {
      "username": "teonv",
      "password": "iloveyou",
      "fullname": "Nguyễn Văn Tèo",
      "email": "teonv@fpt.edu.vn",
      "gender": "true",
      "birthday": "1995-12-21",
      "schoolfee": "1500000",
      "marks": "0",
      "id": 0
    },
    {
      "username": "pheonv",
      "password": "iloveyou",
      "fullname": "Nguyễn Văn Chí Phèo",
      "email": "pheonv@fpt.edu.vn",
      "gender": "true",
      "birthday": "1985-10-11",
      "schoolfee": "2500000",
      "marks": "0",
      "id": 1
    },
    {
      "username": "nopt",
      "password": "iloveyou",
      "fullname": "Phạm Thị Nở",
      "email": "nopt@fpt.edu.vn",
      "gender": "false",
      "birthday": "1993-05-15",
      "schoolfee": "2000000",
      "marks": "0",
      "id": 2
    }
  ]
  urlSubject = "../assets/Subjects.json";
  urlQuiz = "../assets/Quizs";
  urlStudents = "../assets/Students.json"
  constructor(private http: HttpClient) { }
  getSubjects() {
    return this.http.get(this.urlSubject)
  }
  getQuiz(Id) {
    return this.http.get(this.urlQuiz + `/${Id}.json`)
  }
  getStudents() {
    return this.http.get(this.urlStudents)
  }
  //lấy họ tên của user sau khi đăng nhập:
  public username;
  themTen(u){
    this.username=u;
  }
  getTen(){
    return this.username;
  }

  updateStudent(student: Student) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put(`../assets/Students.json`, student, httpOptions)

  }





}
