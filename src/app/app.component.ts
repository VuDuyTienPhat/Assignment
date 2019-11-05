import { Component } from '@angular/core';
import { DataService } from './service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[DataService]
})
export class AppComponent {
    title = 'Assignment';
    hoten;
    public danhmuc;
    constructor(public ds:DataService) {

    }
    ngOnInit() {
        
        this.ds.getSubjects().subscribe(data => {
            this.danhmuc = data;
        })


    }
  

}
