import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private ds: DataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //===========nếu chương đăng nhập thì k cho vào===========
    if (this.ds.logged == false) {
      alert('Hãy đăng nhập trước khi thi nào ^^')
      this.router.navigate(['/dangnhap']);
    }
    else {
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
    this.countdown();


  }
  // i=0;
  public backUpDapAnUser;
  public chuaChonDapAn;
  public soCauLamSai = 0;
  submit(quiz) {
    if (this.dapAnUser == null) {
      alert('bạn chưa chọn đáp án');
      this.chuaChonDapAn=true;
    }
    //chọn đáp án+ấn submit rồi mới cho chọn nút next
    else {
      this.chuaChonDapAn=false;
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
  fullTimeNavigateToResult() {
    this.router.navigate(['/trangchu']);
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



  countdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = `${hours}h:${minutes}m:${seconds}s`;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

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







