import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {

  team:any;
  drivers:any;

  constructor(private route:ActivatedRoute, private myApiService: MyApiService){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
      const id = +params['id'];
      this.getTeamDetails(id);
      console.log(this.drivers)
    })
  }

  getTeamDetails(id: number) {
    this.myApiService.getTeam(id).subscribe(
      (response) => {
        this.team = response; 
        this.getTeamsDrivers(id);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getTeamsDrivers(id: number) {
    this.myApiService.getDriversByTeam(id).subscribe(
      (response) => {
        this.drivers = response; 
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
