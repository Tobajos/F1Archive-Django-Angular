import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyApiService } from 'src/app/my-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.css']
})
export class AddResultsComponent implements OnInit {
  newResult: any = {};
  gp: Number | any;
  availableDrivers: any[] = [];
  availablePositions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  position: number | any;
  grandPrixId: number;
  currentResults: any[]; // Obecne wyniki

  constructor(
    private dialogRef: MatDialogRef<AddResultsComponent>,
    private myApiService: MyApiService,
    @Inject(MAT_DIALOG_DATA) public data: { grandPrixId: number, currentResults: any[] } // Odebranie przekazanych danych
  ) {}

  ngOnInit() {
    this.gp = this.data.grandPrixId;
    this.currentResults = this.data.currentResults; // Przypisanie przekazanych wyników
    this.getAvailableDrivers();
  }

  getAvailableDrivers() {
    this.myApiService.getDrivers().subscribe(
      (response) => {
        this.availableDrivers = response;
      },
      (error) => {
        console.error('Error fetching drivers', error);
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.currentResults.length >= 20) {
      alert('Cannot add more than 20 results.');
      return;
    }
     
    if (this.currentResults.some(result => Number(result.position) === Number(form.value.position))) {
      alert('This position is already taken.');
      return;
    }
    
    if (this.currentResults.some(result => Number(result.driver.id) === Number(form.value.driver))) {
      alert('This driver is already in the results table.');
      return;
    }
  
    const points = this.calculatePoints(Number(this.position));
    this.newResult = {
      driver: form.value.driver,
      position: form.value.position,
      points: points,
      grand_prix: this.gp 
    };
    console.log('Submitting result:', this.newResult);
    this.myApiService.addRaceResult(this.newResult).subscribe(
      (response) => {
        console.log('Response:', response);
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Error adding result', error);
      }
    );
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  calculatePoints(position: number): number {
    switch (position) {
      case 1:
        return 25;
      case 2:
        return 18;
      case 3:
        return 15;
      case 4:
        return 12;
      case 5:
        return 10;
      case 6:
        return 8;
      case 7:
        return 6;
      case 8:
        return 4;
      case 9:
        return 2;
      case 10:
        return 1;
      default:
        return 0;
    }
  }
}
