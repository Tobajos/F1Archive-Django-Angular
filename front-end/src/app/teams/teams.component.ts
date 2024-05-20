import { Component, OnInit } from '@angular/core';
import {MyApiService} from 'src/app/my-api.service'

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any[]=[];

  constructor(private myApiService:MyApiService){}
  ngOnInit():void{
    this.getTeams()
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
