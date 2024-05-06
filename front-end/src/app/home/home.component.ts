import { Component, OnInit } from '@angular/core';
import {MyApiService} from 'src/app/my-api.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drivers: any[]=[];

  constructor(private myApiService: MyApiService){}

  ngOnInit():void{
    this.getDrivers();
  }


  getDrivers(): void {
    this.myApiService.getDrivers()
      .subscribe(
        (data: any) => {
          this.drivers = data;
        },
        error => {
          console.error('Wystąpił błąd podczas pobierania listy kierowców:', error);
        }
      );
    }
}
