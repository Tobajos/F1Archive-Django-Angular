import { Component, OnInit } from '@angular/core';
import {MyApiService} from 'src/app/my-api.service'
import { faPlus,faMagnifyingGlass,faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers: any[]=[];
  plus = faPlus;

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
