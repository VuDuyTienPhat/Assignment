import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
    public p; //  trang hiện tại trong pagination
  listMonHoc;
  STTCauHoi=0;
  username;//nhận giá trị dc gửi từ trang đổi mk

  constructor(private y:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
      this.y.getSubjects().subscribe(data=>{
          this.listMonHoc=data;
          console.log(`${JSON.stringify(this.listMonHoc)}`)
      });

      this.route.paramMap.subscribe(params=>{
        this.username=params.get('username')
      })
  }

}
