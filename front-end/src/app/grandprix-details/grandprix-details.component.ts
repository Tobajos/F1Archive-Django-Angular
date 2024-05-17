import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddResultsComponent } from 'src/app/add-results/add-results.component';


@Component({
  selector: 'grandprix-details',
  templateUrl: './grandprix-details.component.html',
  styleUrls: ['./grandprix-details.component.css']
})
export class GrandprixDetailsComponent implements OnInit {

  gp: any;
  raceResults: any[] = [];

  constructor(private route: ActivatedRoute, private myApiService: MyApiService, private dialog:MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getGrandPrixDetails(id);
      this.getRaceResults(id);
    });
  }

  getGrandPrixDetails(id: number) {                                                                         
    this.myApiService.getGP(id).subscribe(
      (response) => {
        this.gp = response;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  getRaceResults(id: number) {
    this.myApiService.getRaceResultsByGP(id).subscribe(
      (response) => {
        this.raceResults = response;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  openAddResultsModal() {
    this.dialog.open(AddResultsComponent, {
      width: '60%',
      height: '400px',
      data: {
        grandPrixId: this.gp.id 
      }
      
    });
  }
}
