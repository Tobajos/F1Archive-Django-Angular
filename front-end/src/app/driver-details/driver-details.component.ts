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
  driverResults: any;
  public primaryXAxis: Object;

  constructor(private route: ActivatedRoute, private myApiService: MyApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.getDriverDetails(id);
      this.getResults(id);
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

  getResults(id: number): void {
    this.myApiService.getRaceResultsByDriver(id).subscribe(
      response => {
        this.driverResults = response;
        console.log(this.driverResults);
      },
      error => {
        console.error('Error', error);
    }
    )
  }
}
