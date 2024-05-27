import { Component } from '@angular/core';
import { MyApiService } from 'src/app/my-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private myApiService: MyApiService, private router: Router) { }

  login(): void {
    this.myApiService.login({ username: this.username, password: this.password }).subscribe(
      (response: any) => {
        localStorage.setItem('user', JSON.stringify({ username: this.username, token: response.token }));
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
        alert('Invalid username or password');
      }
    );
  }
}
