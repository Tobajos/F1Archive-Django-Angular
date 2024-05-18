import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddResultsComponent } from 'src/app/add-results/add-results.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear,faUserMinus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'grandprix-details',
  templateUrl: './grandprix-details.component.html',
  styleUrls: ['./grandprix-details.component.css']
})
export class GrandprixDetailsComponent implements OnInit {

  settings = faGear;
  delete = faUserMinus;
  gp: any;
  raceResults: any[] = [];

  constructor(private route: ActivatedRoute, private myApiService: MyApiService, private dialog: MatDialog) { }

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
        this.raceResults = response.sort((a: any, b: any) => a.position - b.position); 
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  openAddResultsModal() {
    const dialogRef = this.dialog.open(AddResultsComponent, {
      width: '50%',
      height: '350px',
      data: {
        grandPrixId: this.gp.id,
        currentResults: this.raceResults
      }
     
    });
console.log(this.raceResults);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getRaceResults(this.gp.id);
      }
    });
  }
  deleteRaceResult(resultId: number) {
    this.myApiService.deleteRaceResult(resultId).subscribe(
      (response) => {
        console.log('Result deleted successfully:', response);
        // Odśwież listę wyników po usunięciu
        this.getRaceResults(this.gp.id);
      },
      (error) => {
        console.error('Error deleting result', error);
      }
    );
  }
}
