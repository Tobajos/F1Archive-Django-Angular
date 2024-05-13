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



const routes: Routes =[
  {path: 'Home', component: HomeComponent},
  {path: 'Drivers', component: DriversComponent },
  {path: 'Teams', component: TeamsComponent },
  {path: 'GrandPrix', component: GrandprixComponent},
  {path: 'Driver/:id', component: DriverDetailsComponent},


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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
