import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Student } from './students';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlSubject="../assets/Subjects.json";
  urlQuiz="../assets/Quizs";
  urlStudents="../assets/Students.json"
  constructor(private http:HttpClient) { }
  getSubjects(){
    return this.http.get(this.urlSubject)
  }
  getQuiz(Id){
    return this.http.get(this.urlQuiz+`/${Id}.json`)
  }
  getStudents(){
    return this.http.get(this.urlStudents)
  }




  
}
