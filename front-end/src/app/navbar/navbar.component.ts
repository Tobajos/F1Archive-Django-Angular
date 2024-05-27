import { Component } from '@angular/core';
import { MyApiService } from 'src/app/my-api.service';
import { Router } from '@angular/router'; // dodaj Router

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: MyApiService, private router: Router) {} 

  logout() {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']); 
    }, (error) => {
      console.error("logout error",error);
    });
  }
}
