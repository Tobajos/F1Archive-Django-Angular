import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';
import { Router } from '@angular/router';
import { faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {
  delete = faBan;
  team:any;
  drivers:any;
  isLogin:boolean;

  constructor(private route:ActivatedRoute,
     private myApiService: MyApiService,
     private router: Router){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
      const id = +params['id'];
      this.getTeamDetails(id);
      console.log(this.drivers)
      this.isLogin = this.myApiService.isLoggedIn();
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

  deleteTeam(teamId: number) {
    this.myApiService.deleteTeam(teamId).subscribe(
      (response) => {
        console.log('Team delete successfully:', response);
        this.router.navigate(['/Teams']);
      },
      (error) => {
        console.error('Error deleting team', error);
      }
    );
  }

}
