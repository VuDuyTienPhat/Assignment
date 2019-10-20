import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { nextTick } from 'q';

@Component({
  selector: 'app-thi-tn',
  templateUrl: './thi-tn.component.html',
  styleUrls: ['./thi-tn.component.css']
})
export class ThiTNComponent implements OnInit {
  subjects;//subjects là 1 cái mảng chứa các object
  subject;//xác định xem là môn học nào từ url
  Id;
  Quizs//chẳng hạn ADBS.json
  i = 0;
  Answers;//tượng trưng mảng Answers trong Quizs(ADAV,ADTE,...) 
  dapAnUser;
  logged=null;
  constructor(private y: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.logged=params.get('logged');
      console.log(this.logged)
    })
  
      this.y.getSubjects().subscribe(data => {

        this.subjects = data;
        this.route.paramMap.subscribe((params) => {
          this.Id = params.get('Id');
          console.log(this.Id);
          this.subject = this.subjects.find(x => {
            return x.Id == this.Id
          });
          //lấy các câu hỏi-Quizs từ môn học đó
          this.y.getQuiz(this.Id).subscribe(Quizs => {
            this.Quizs = Quizs;

            console.log(this.Quizs);
            //2.lấy ra mảng 4 đáp án (Answers) phải nằm trong này chứ để ở ngoài là nó chạy asyn nó chưa lấy đc Quiz
            console.log(this.i)
            this.Answers = this.Quizs[this.i].Answers;
            console.log(this.Answers)
          })
        });

      });
    

  }
  Next() {
    this.i++;

    this.y.getSubjects().subscribe(data => {

      this.subjects = data;
      this.route.paramMap.subscribe((params) => {
        this.Id = params.get('Id');
        console.log(this.Id);
        this.subject = this.subjects.find(x => {
          return x.Id == this.Id
        });
        //lấy các câu hỏi-Quizs từ môn học đó
        this.y.getQuiz(this.Id).subscribe(Quizs => {
          this.Quizs = Quizs;

          console.log(this.Quizs);
          //2.lấy ra mảng 4 đáp án (Answers) phải nằm trong này chứ để ở ngoài là nó chạy asyn nó chưa lấy đc Quiz
          console.log(this.i)
          this.Answers = this.Quizs[this.i].Answers;

        })
      });
    });
  }

  Previous() {
    if (this.i >= 1) {
      this.i--;
    }
    this.y.getSubjects().subscribe(data => {

      this.subjects = data;
      this.route.paramMap.subscribe((params) => {
        this.Id = params.get('Id');
        console.log(this.Id);
        this.subject = this.subjects.find(x => {
          return x.Id == this.Id
        });
        //lấy các câu hỏi-Quizs từ môn học đó
        this.y.getQuiz(this.Id).subscribe(Quizs => {
          this.Quizs = Quizs;

          console.log(this.Quizs);
          //2.lấy ra mảng 4 đáp án (Answers) phải nằm trong này chứ để ở ngoài là nó chạy asyn nó chưa lấy đc Quiz
          console.log(this.i)
          this.Answers = this.Quizs[this.i].Answers;

        })
      });
    });
  }

}
