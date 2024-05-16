import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DriversComponent } from './drivers/drivers.component';
import { TeamsComponent } from './teams/teams.component';
import { GrandprixComponent } from './grandprix/grandprix.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GrandprixDetailsComponent } from './grandprix-details/grandprix-details.component';




const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'Drivers', component: DriversComponent },
  {path: 'Teams', component: TeamsComponent },
  {path: 'GrandPrixes', component: GrandprixComponent},
  {path: 'Driver/:id', component: DriverDetailsComponent},
  {path: 'GrandPrix/:id', component: GrandprixDetailsComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DriversComponent,
    TeamsComponent,
    GrandprixComponent,
    DriverDetailsComponent,
    AddDriverComponent,
    HeaderComponent,
    GrandprixDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule ,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
