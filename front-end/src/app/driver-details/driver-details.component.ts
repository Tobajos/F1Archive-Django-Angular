import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';

@Component({
  selector: 'driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  driver: any;

  constructor(private route: ActivatedRoute, private myApiService: MyApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.getDriverDetails(id);
    });
  }

  getDriverDetails(id: number) {
    this.myApiService.getDriver(id).subscribe(
      (response) => {
        this.driver = response; 
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
