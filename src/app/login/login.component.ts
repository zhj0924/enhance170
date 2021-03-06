import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // Set Up Properties
  email: string;
  password: string;
  userType: string;

  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private data: DataService
  ) { }

  ngOnInit() {
  }

  onLogin() {

    if (!this.userType) {
      alert('Please select your user type!');
      return;
    }

    if (!this.email) {
      alert('Please enter your email!');
      return;
    }

    if (!this.password) {
      alert('Please enter your password!');
      return;
    }

    if (this.password === 'clear') {
      this.storage.clear();
    }

    // Initialize the user type
    this.data.initUserType(this.userType);

    // Handle Routing
    if (this.userType === 'professor') {
      // Professor
      this.router.navigateByUrl('/prof-start');

    } else if (this.userType === 'student') {

      // Student
      if (this.password.toLowerCase() === 'relcom') {
        // Redesigned
        this.router.navigateByUrl('/student-ui');
      } else {

        // // Randomized 50:50
        // const dice = Math.random();
        // if (dice >= 0.5) {
        //   this.router.navigateByUrl('/student-ui');
        // } else {
        //   this.router.navigateByUrl('/student');
        // }
        this.router.navigateByUrl('/student-ui');
      }

    } else if (this.userType === 'TA') {
      // TA
      this.router.navigateByUrl('/ta');
    }
  }

}
