import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {
 

  constructor(private ds:DataService) { }
   //lấy thông tin student đã đnhập:
   loggedStudent;
   students;

  ngOnInit() {
  
      this.students=this.ds.students;
      this.loggedStudent=this.students.find(x=>{
        return x.username==this.ds.username
      });
      console.log('loggedStudent',this.loggedStudent)

  }
  luuThayDoi(){
      alert('đã thay đổi thành công!')
  }

}
