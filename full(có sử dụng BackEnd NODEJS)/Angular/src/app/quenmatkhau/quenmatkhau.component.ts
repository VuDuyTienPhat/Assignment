import { Component, OnInit } from '@angular/core';
import { Student } from '../students'
import { DataService } from '../service.service';
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  hiddenbaoloi: Boolean = true;
  hiddenshowpass: Boolean = true;
  formSudent = {
    username: '',
    email: ''
  }
  constructor(private ds: DataService) { }

  ngOnInit() {

  }
  password;
  HienThiMatKhau(form) {
    this.ds.postQuenMatKhau(form.value).subscribe(data => {
      if (data['password']) {
        console.log(`this.form.value`, form.value)
        this.password = data['password'];
        alert(this.password);
      }
      else if(data['message']){
        alert(data['message'])
      }

    })
  }

}
