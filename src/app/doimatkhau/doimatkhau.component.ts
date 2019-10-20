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
    passwordCu:null
    passwordMoi:null
  
    
  public student;
  public;//để so sánh với password khi lấy student từ db về
  public students;//chứa dl students.json

  constructor(private ds: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ds.getStudents().subscribe(data => {
      this.students = data;

    })

  }
  DoiMatKhau() {
    // this.ds.getStudents().subscribe(data => {
    //   this.students = data;
    //   console.log(`${JSON.stringify(this.students)}`);
    //   console.log(`this.passwordCu=${this.passwordCu}`)
    //   this.student=this.students.find(x=>{
    //     return x.username==this.username&&x.password==this.passwordCu;
    //   })

    //   console.log(`this.student=${JSON.stringify(this.student)}`)
    // })
    // this.router.navigate(['/trangchu',{username:this.student.username}])

  }


}
