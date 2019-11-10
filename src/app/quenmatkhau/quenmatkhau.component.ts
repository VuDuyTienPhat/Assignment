import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { DataService } from '../service.service';
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  formSudent = {
    username: "",
    email: "",
  }
  hiddenbaoloi: Boolean = true;
  hiddenshowpass: Boolean = true;
  students;
  constructor(private ds: DataService) { }

  ngOnInit() {

  }
  student = null;//tìm ra tg student trùng username và email
HienThiMatKhau() {
  this.student=null;//để khi mỗi lần bấm lại là nó xóa tg student cũ đi

    this.students = this.ds.students;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].username == this.formSudent.username &&
        this.students[i].email == this.formSudent.email) {
        this.student = this.students[i];
        break;
      }
    }
    console.log(this.student);
    if (this.student == null) {
      // alert('Username hoặc Email không đúng!');
      this.hiddenbaoloi = false;
      this.hiddenshowpass=true;
    }
    else {
      this.hiddenbaoloi = true;
      this.hiddenshowpass = false;

      alert(`your password is ${this.student.password}`)
    }


   



}

}
