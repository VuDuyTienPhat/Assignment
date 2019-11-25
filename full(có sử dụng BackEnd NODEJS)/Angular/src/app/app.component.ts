import { Component } from '@angular/core';
import { DataService } from './service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent {
    title = 'Assignment';

    public danhmuc;
    constructor(public ds: DataService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.ds.getSubjects().subscribe(data => {
            this.danhmuc = data;
        })



    }
    username = this.ds.getUsername();


    logOut() {
        localStorage.removeItem('token');
        this.username = '';
        this.router.navigate(['/trangchu']);
        alert('bạn đã đăng xuất')
    }



}
