import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'src/app/my-api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teams: any[] = [];
  drivers: any[] = [];

  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {
    this.getDrivers();
    this.getTeams();
  }

  getDrivers(): void {
    this.myApiService.getDrivers().subscribe(
      (data: any) => {
        this.drivers = data.sort((a: any, b: any) => b.points - a.points);
      },
      error => {
        console.error('Wystąpił błąd podczas pobierania listy kierowców:', error);
      }
    );
  }

  getTeams(): void {
    this.myApiService.getTeams().subscribe(
      (data: any) => {
        this.teams = data.sort((a: any, b: any) => b.points - a.points);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
