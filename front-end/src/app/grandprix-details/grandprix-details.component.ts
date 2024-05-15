import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/my-api.service';

@Component({
  selector: 'grandprix-details',
  templateUrl: './grandprix-details.component.html',
  styleUrls: ['./grandprix-details.component.css']
})
export class GrandprixDetailsComponent {

  gp: any;

  constructor(private route: ActivatedRoute, private myApiService: MyApiService) { }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      const id = +params['id']
      this.getGrandPrixDetails(id);
    });
  }

  getGrandPrixDetails(id: number) {
    this.myApiService.getGP(id).subscribe(
      (response) => {
        this.gp = response; 
      },
      (error) => {
        console.error('Błąd podczas pobierania kierowcy:', error);
      }
    );
  }
}


