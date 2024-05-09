import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';

@Component({
  selector: 'add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  driver: any={}
  teams:any={}

  constructor(
    private router: Router,
    private myApiService: MyApiService){}

  ngOnInit():void{
    this.getTeams();
      
  }

  onSubmit(){
    this.myApiService.addDriver(this.driver).subscribe(response=>{
      
      console.log('Driver added successfully:', response);
      console.log('Submitted form data:', this.driver);
      this.router.navigate(['/Drivers']);
    },error=>{
      console.error('Error adding driver', error);
      console.log('Submitted form data:', this.driver);
    });
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
