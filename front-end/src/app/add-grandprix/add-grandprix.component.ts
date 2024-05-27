import { Component } from '@angular/core';
import { MyApiService } from 'src/app/my-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-grandprix',
  templateUrl: './add-grandprix.component.html',
  styleUrls: ['./add-grandprix.component.css']
})
export class AddGrandprixComponent {
  grandprix:any={}

  constructor(private router: Router,
    private myApiService: MyApiService){}


    onSubmit(){
      this.myApiService.addGP(this.grandprix).subscribe(response=>{
        
        console.log('grandprix added successfully:', response);
        console.log('Submitted form data:', this.grandprix);
        this.router.navigate(['/GrandPrixes']);
      },error=>{
        console.error('Error adding grandprix', error);
        console.log('Submitted form data:', this.grandprix);
      });
    }
  }

