import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from './students';
import { User } from 'src/shared/user.model';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:1234/"
  constructor(private http: HttpClient) { }
  //==============cách làm BackEnd NOdeJS==============
  postRegister(user: User) {
    return this.http.post("api/register", user);
  }
  postAuthenticate(authCredentials) {
    return this.http.post("api/authenticate", authCredentials);
  }
  postQuenMatKhau(thongtinUserNameAndEmail){
    return this.http.post("api/quenmatkhau",thongtinUserNameAndEmail);
  }
  postDoiMauKhau(_id,formValue){
    return this.http.put("api/updateUser/"+_id,formValue)
  }
  



  //==============END BackEnd NOdeJS==============

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
  ];
  urlSubject = "../assets/Subjects.json";
  urlQuiz = "../assets/Quizs";
  urlStudents = "../assets/Students.json"

  getSubjects() {
    return this.http.get(this.urlSubject)
  }
  getQuiz(Id: String) {
    // return this.http.get(this.urlQuiz + `/${Id}.json`)
    return this.http.get(`${this.urlQuiz}/${Id}.json`);
  }
  getStudents() {
    return this.http.get(this.urlStudents)
  }
  //lấy họ tên của user sau khi đăng nhập:
  username;
  getUsername() {
    if (!localStorage.getItem('token')) {
      return "";
    }
    let payload = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    return payload['username'];

  }
  getId() {
    if (!localStorage.getItem('token')) {
      return "";
    }
    let payload = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    return payload['_id'];

  }
  getUserPayLoad() {
    var token = localStorage.getItem('token');
    //TH nếu có token
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      //nhận vào một chuỗi JSON và chuyển đổi (transform) nó thành một đối tượng JavaScript.
      return JSON.parse(userPayload)
    }
    //nếu k có token thì trả về null
    return null;
  }
  isLoggedIn() {
    //lấy userPayload từ token trong localStorage
    var userPayload = this.getUserPayLoad();
     //nếu k có userPayload <=> k có token <=> chưa đăng nhập
    if (!userPayload) {
      return false;

    }
    //lấy userPayLoad để check xem còn thời hạn hay k
   
    else {
      if (userPayload.exp > Date.now() / 1000) {
        return true
      }
      return false;
    }
  }



  themTaiKhoan(s) {
    this.students.push(s);
  }




  //chứa subjects.json
  subjects;
  //xác định xem đã đăng nhập hay chưa:
  logged: Boolean = false;






}
