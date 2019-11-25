import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {


  constructor(private ds: DataService) { }
  //lấy thông tin student đã đnhập:
  username;
  fullname;
  birthday;
  gender;


  ngOnInit() {
    this.username = this.ds.getUsername();


  }
  luuThayDoi(formControl) {
    formControl.reset();
    alert('đã thay đổi thành công!')
  }

}
