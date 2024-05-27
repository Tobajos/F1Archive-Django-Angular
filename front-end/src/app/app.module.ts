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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GrandprixDetailsComponent } from './grandprix-details/grandprix-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AddResultsComponent } from './add-results/add-results.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddGrandprixComponent } from './add-grandprix/add-grandprix.component';


const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'Drivers', component: DriversComponent },
  {path: 'Teams', component: TeamsComponent },
  {path: 'GrandPrixes', component: GrandprixComponent},
  {path: 'Driver/:id', component: DriverDetailsComponent},
  {path: 'GrandPrix/:id', component: GrandprixDetailsComponent},
  {path: 'Team/:id', component: TeamDetailsComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'add-team', component: AddTeamComponent},
  {path: 'add-grandprix', component: AddGrandprixComponent},
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
    GrandprixDetailsComponent,
    AddResultsComponent,
    TeamDetailsComponent,
    LoginComponent,
    RegisterComponent,
    AddTeamComponent,
    AddGrandprixComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    BaseChartDirective,
    ChartModule
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
