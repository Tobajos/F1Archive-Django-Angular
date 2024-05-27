import { Component, OnInit } from '@angular/core';
import {MyApiService} from 'src/app/my-api.service'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any[]=[];
  isLogin:boolean;
  plus = faPlus;
  constructor(private myApiService:MyApiService){}
  
  ngOnInit():void{
    this.getTeams()
    this.isLogin = this.myApiService.isLoggedIn();
  }

  getTeams(): void {
    this.myApiService.getTeams()
      .subscribe(
        (data: any) => {
          this.teams = data;
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
}
