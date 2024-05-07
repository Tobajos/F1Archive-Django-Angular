import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private baseUrl ='http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<any> {
    return this.http.get(this.baseUrl + 'getDrivers');
  }

  addDriver(driverData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'postDriver', driverData);
  }

  getDriver(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `getDriver/${id}`);
  }

  updateDriver(id: number, updatedDriverData: any): Observable<any> {
    return this.http.put(this.baseUrl + `updateDriver/${id}`, updatedDriverData);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `deleteDriver/${id}`);
  }

  getGPs(): Observable<any>{
    return this.http.get(this.baseUrl + 'getGps');
  }

  addGP(GPdata: any): Observable<any> {
    return this.http.post(this.baseUrl + 'postGp', GPdata);
  }

  getGP(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `getGp/${id}`);
  }

  updateGP(id: number, updatedGPData: any): Observable<any> {
    return this.http.put(this.baseUrl + `updateGp/${id}`, updatedGPData);
  }

  deleteGP(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `deleteGp/${id}`);
  }

  getteams(): Observable<any>{
    return this.http.get(this.baseUrl + 'getTeams');
  }

  addTeam(TeamData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'postTeam', TeamData);
  }

  getTeam(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `getTeam/${id}`);
  }

  updateTeam(id: number, updatedTeamData: any): Observable<any> {
    return this.http.put(this.baseUrl + `updateTeam/${id}`, updatedTeamData);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `deleteTeam/${id}`);
  }

}