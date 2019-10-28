import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {

  username: null
  passwordCu: null
  passwordMoi: null
  nhapLaiPasswordMoi: null

  public student;
  public;//để so sánh với password khi lấy student từ db về
  public students;//chứa dl students.json

  constructor(private ds: DataService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ds.getStudents().subscribe(data => {
      this.students = data;

    })

  }
  DoiMatKhau() {
    //thay đổi password trongg this.ds.students
    for (let i = 0; i < this.ds.students.length; i++) {
      if (this.ds.students[i].username == this.username && this.ds.students[i].password == this.passwordCu) {
        if (this.passwordMoi !== this.nhapLaiPasswordMoi) {
          alert('nhập lại mật khẩu mới k trùng khớp ')
        }
        else {
          this.ds.students[i].password = this.passwordMoi;
          console.log(this.ds.students);
          alert('đổi mật khẩu thành công');
          this.router.navigate(['/dangnhap'])
          return;
        }
      }
    }
    //=====================CÁCH CŨ XÀI ĐC=====================//
    //   this.ds.getStudents().subscribe(data => {
    //     this.students = data;
    //     for (let i = 0; i < this.students.length; i++) {
    //       if (this.students[i].username == this.username && this.students[i].password == this.passwordCu) {
    //         if (this.passwordMoi !== this.nhapLaiPasswordMoi) {
    //           alert('nhập lại mật khẩu mới k trùng khớp ')
    //         }
    //         else {
    //           this.students[i].password = this.passwordMoi;
    //           alert('đổi mật khẩu thành công')
    //           return;
    //         }
    //       }
    //     }
    //     alert('username hoặc mật khẩu cũ không đúng')
    //   })
    // }
    //=====================END CÁCH CŨ XÀI ĐC=====================//




    // console.log('student phù hợp=', this.student)

    //2 password giống nhau thì mới put len:

    //   else{
    //     this.student.password=this.passwordMoi;//thay đổi giá trị password mới cho student này rồi gửi lên db
    //     this.ds.updateStudent(this.student).subscribe(function(){
    //       alert('update thành công')
    //     })

    //   }


  }
}
