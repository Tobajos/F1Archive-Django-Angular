import { Component, OnInit } from '@angular/core';
import {MyApiService} from 'src/app/my-api.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'grandprix',
  templateUrl: './grandprix.component.html',
  styleUrls: ['./grandprix.component.css']
})
export class GrandprixComponent implements OnInit {

  gps: any[]=[];
  isLogin:boolean;
  plus=faPlus;

  constructor(private myApiService: MyApiService){}

  ngOnInit():void{
    this.getGps();
    this.isLogin = this.myApiService.isLoggedIn();
  }

  getGps(): void {
    this.myApiService.getGPs()
      .subscribe(
        (data: any) => {
          this.gps = data;
        },
        error => {
          console.error('Error', error);
        }
      );
    }

}
