import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {

  passwordMoi: null
  public student;
  public;//để so sánh với password khi lấy student từ db về
  public students;//chứa dl students.json

  constructor(private ds: DataService,
    private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  _id;
  ngOnInit() {
    this._id = this.ds.getId();

  }
  coLoi: Boolean;
  DoiMatKhau(formControl) {
    console.log('_id', this._id);
    this.ds.postDoiMauKhau(this._id, formControl.value).subscribe(data => {
      console.log(data);
      alert('đã đổi');
      this.router.navigate(['/trangchu']);
    });
    //data tức là trả về token <=> đúng
    //err tức là trả error hoặc info, bởi vì 2 thằng này đều có mã là 4xx(mã lỗi)

  }
}
