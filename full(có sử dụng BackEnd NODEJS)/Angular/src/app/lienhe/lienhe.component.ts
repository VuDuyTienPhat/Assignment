import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css']
})
export class LienheComponent implements OnInit {
  firstname;
  lastname;
  subject;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.firstname="";
    this.lastname="";
    this.subject=""
    alert('đã gửi');
  }

}
