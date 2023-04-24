import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  pharmacienName:string="";
  userName:string="";
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('pharmacien') /*&& val.url.includes('pharmacien')*/) {
          let pharmacienStore = localStorage.getItem('pharmacien');
          let pharmacienData = pharmacienStore && JSON.parse(pharmacienStore)[0];
          this.pharmacienName = pharmacienData.name;
          this.menuType = 'pharmacien';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
        }
        else {
          this.menuType = 'default';
        }
      }
    });
  }
  logout(){
    localStorage.removeItem('pharmacien');
    this.route.navigate(['/pharmacien-auth'])
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth'])
  }

}
