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
  MangDapAn;
  cur = 1;
  mark = 0;
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

  this.countdown()

  }
  // i=0;
  submit(quiz) {
    console.log(this.dapAnUser)
    console.log(typeof this.dapAnUser);
    console.log(quiz.AnswerId);
    console.log(typeof quiz.AnswerId);
    if (this.dapAnUser == null) {
      alert('bạn chưa chọn đáp án');
    }
    else {
      if (quiz.AnswerId == +this.dapAnUser) {
        alert('đúng rồi')
        this.cur++;
        this.mark++;
      }
      else {
        alert('sai roi');
        this.cur++;
      }
      this.dapAnUser = null;
    }
    // if(this.dapAnUser==this.Quizs[this.i].AnswerId){
    //   alert('bạn làm đung rồi')
    // }
    // else{
    //   alert('sai rồi ');
    // }
  }
  fullTimeNavigateToResult() {
    this.router.navigate(['/trangchu']);
  }

  countdown() {
    // Set the date we're counting down to
    var distance = 3600000;   // 
    // Update the count down every 1 second
    var x = setInterval(function () {
      // var distance = countDownDate - now;
      distance = distance - 1000;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance == 0) {
        clearInterval(x);
        alert('hết giờ')
      }
    }, 1000);

  
  }
  onSubmit(x){
    console.log(x.value);
  }



}
