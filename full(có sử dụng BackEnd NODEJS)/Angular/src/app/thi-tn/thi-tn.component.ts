import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CountdownConfig,CountdownEvent} from 'ngx-countdown'
@Component({
  selector: 'app-thi-tn',
  templateUrl: './thi-tn.component.html',
  styleUrls: ['./thi-tn.component.css']
})
export class ThiTnComponent implements OnInit {
  //HIỂU CÁI TRANG THI TN NÀY GIỐNG NHƯ 1 TRANG CHI TIẾT DZẬY, OKE !!!!!!
  Id;//tên id môn trên địa chỉ url
  subject;//bao gồm tên môn học,Id,Logo
  tenMonHoc;// tên môn học đầy đủ
  Quizs;// những câu hỏi trong môn học đó
  dapAnUser = null;
  MangDapAn; cur = 1; mark = 0;
  disableButtonNext: Boolean = true;
  disableInput: Boolean = false; disableSubmit = false;
  xanhla = false;
  //đếm giờ
  text: string;
  config: CountdownConfig = { leftTime: 2000 };
  handleEvent2(e: CountdownEvent) {
    this.text = e.action;
    console.log(e);
    if (e.action == "done") {
      alert('hết giờ rồi ^^, điểm của bạn là: '+this.mark);
      this.disableSubmit=true;
      this.disableInput=true;
      this.disableButtonNext=true;
    }
  }

  //END đếm giờ
  constructor(private ds: DataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    //tìm tên môn học:
    this.ds.getSubjects().subscribe(data => {
      this.ds.subjects = data;
      this.route.paramMap.subscribe(params => {
        this.Id = params.get('Id');
        this.subject = this.ds.subjects.find(x => {
          return x.Id == this.Id
        });
        this.tenMonHoc = this.subject.Name;
        //END tìm tên mon học

        //tìm những câu hỏi:
        this.ds.getQuiz(this.Id).subscribe(data => {
          this.Quizs = data;
        })

      })

    });




  }
  // i=0;
  public backUpDapAnUser;
  public chuaChonDapAn;
  public soCauLamSai = 0;
  submit(quiz) {
    //TH chưa chọn đáp án :
    if (this.dapAnUser == null) {
      alert('bạn chưa chọn đáp án');
      this.chuaChonDapAn = true;
    }
    //TH submit và chọn đáp án rồi
    //chọn đáp án+ấn submit rồi mới cho chọn nút next
    else {
      this.chuaChonDapAn = false;
      this.disableButtonNext = false;
      this.disableSubmit = true;
      this.disableInput = true;
      if (quiz.AnswerId == +this.dapAnUser) {
        // alert('đúng rồi')
        this.mark++;
        this.thongBaoChonDung = true;

      }
      else {
        // alert('sai roi');
        this.thongBaoChonSai = true;
        this.soCauLamSai++;
      }
      console.log(typeof this.dapAnUser)
      this.isSubmited = true;
      this.backUpDapAnUser = this.dapAnUser;


    }
    // if(this.dapAnUser==this.Quizs[this.i].AnswerId){
    //   alert('bạn làm đung rồi')
    // }
    // else{
    //   alert('sai rồi ');
    // }
  }
  public thongBaoChonDung = false;
  public thongBaoChonSai = false;
  Next() {
    this.dapAnUser = null;
    this.cur++;
    this.disableButtonNext = true;//disable Next lại
    this.disableSubmit = false;//tắt disable submit
    this.disableInput = false;//tắt disable INput
    this.isSubmited = false;
    this.thongBaoChonDung = false;//ẩn thông báo chọn đúng
    this.thongBaoChonSai = false;


  }

  public isSubmited: Boolean;


  timCauDung(dapAnDung, dapAn) {
    if (dapAnDung == dapAn && this.isSubmited == true) {
      return true;
    }
    return false;
  }
  timCauSai(dapAnDung, dapAn) {
    if (dapAnDung != dapAn && this.isSubmited == true && dapAn == +this.backUpDapAnUser) {
      return true;
    }
    return false;
  }


  countdown2() {

    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }

}







