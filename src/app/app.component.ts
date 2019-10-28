import { Component } from '@angular/core';
import { DataService } from './service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Assignment';
    public hoten;
    public danhmuc;
    constructor(private y:DataService) {

    }
    ngOnInit() {
        this.y.getSubjects().subscribe(data => {
            this.danhmuc = data;
        })
        this.hoten=this.y.getTen();
       console.log(`hoten=${this.y.getTen()}`)
       


    }

}
