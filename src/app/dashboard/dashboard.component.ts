import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  userLoggedIn = false;

  constructor() {}
  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.userLoggedIn = isLoggedIn === 'true' ? true : false;
  }

  toggleAuthUser() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const newLoginStatus = !isLoggedIn;
    this.userLoggedIn = newLoginStatus;

    localStorage.setItem('isLoggedIn', newLoginStatus.toString());
  }
}
