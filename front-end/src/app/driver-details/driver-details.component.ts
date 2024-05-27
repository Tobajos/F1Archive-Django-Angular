import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';
import { Chart } from 'angular-highcharts';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'


@Component({
  selector: 'driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  
  delete = faUserMinus
  driver: any;
  driverResults: any;
  chart: Chart;
  totalPoints: number = 0;
  isLogin : boolean;

  constructor(private route: ActivatedRoute, private myApiService: MyApiService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.getDriverDetails(id);
      this.getResults(id);
      this.isLogin = this.myApiService.isLoggedIn();
    });

    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart({
      chart: {
        type: 'line',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius:15,

      },
      title: {
        text: 'Driver Performance',
        style: {
          color: '#333',
          fontSize: '18px'
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        title: {
          style: {
            fontSize: '14px'
          }
        },
        categories: []
      },
      yAxis: {
        title: {
          text: 'Total Points',
          style: {
            color: '#666',
            fontSize: '14px'
          }
        },
        min: 0,
        gridLineColor: '#ddd'
      },
      series: [
        {
          name: 'Total Points',
          data: [],
          color: 'red',
          marker: {
            symbol: 'circle',
            radius: 4,
            fillColor: 'red',
            lineWidth: 2,
            lineColor: '#fff'
          }
        } as any
      ]
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
  

        this.totalPoints = this.driverResults.reduce((total: number, result: any) => total + result.points, 0);        
        const categories = this.driverResults.map((result: any) => result.grand_prix.country);
  
        const points = this.driverResults.reduce((data: any[], result: any, index: number) => {
          const roundPoints = result.points;
          const totalPoints = (index === 0) ? roundPoints : data[data.length - 1][1] + roundPoints; 
          data.push([index, totalPoints]);
          return data;
        }, []); 
  
        this.updateChart(categories, points);
      },
      error => {
        console.error('Error', error);
      }
    );
  }
  
  updateChart(categories: string[], points: number[][]) {
    if (this.chart && this.chart.ref) {
      this.chart.ref.xAxis[0].setCategories(categories);
      this.chart.ref.series[0].setData(points);
    }
  }

  deleteDriver(driverId: number) {
    console.log('ID kierowcy:', driverId);
    this.myApiService.deleteDriver(driverId).subscribe(
      (response) => {
        console.log('Driver deleted successfully:', response);
        this.router.navigate(['/Drivers']);
      },
      (error) => {
        console.error('Error deleting result', error);
      }
    );
  }
}
