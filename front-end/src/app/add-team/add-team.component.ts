import { Component } from '@angular/core';
import { MyApiService } from 'src/app/my-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {

  constructor(
    private router: Router,
    private myApiService: MyApiService){}

  team: any={}

  onSubmit(){
    this.myApiService.addTeam(this.team).subscribe(response=>{
      
      console.log('Team added successfully:', response);
      console.log('Submitted form data:', this.team);
      this.router.navigate(['/Teams']);
    },error=>{
      console.error('Error adding team', error);
      console.log('Submitted form data:', this.team);
    });
  }


}
