import { Component, OnInit } from '@angular/core';
import {MyApiService} from 'src/app/my-api.service'

@Component({
  selector: 'grandprix',
  templateUrl: './grandprix.component.html',
  styleUrls: ['./grandprix.component.css']
})
export class GrandprixComponent implements OnInit {

  gps: any[]=[];
  isLogin:boolean;

  constructor(private myApiService: MyApiService){}

  ngOnInit():void{
    this.getGps();
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
