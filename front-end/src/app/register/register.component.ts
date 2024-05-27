import { Component } from '@angular/core';
import { MyApiService } from 'src/app/my-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private myApiService: MyApiService, private router: Router) { }

  register(): void {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    this.myApiService.register({ username: this.username, password: this.password }).subscribe(
      (response: any) => {
        localStorage.setItem('user', JSON.stringify({ username: this.username, token: response.token }));
        this.router.navigate(['']);
      },
      error => console.error(error)
    );
  }
}
