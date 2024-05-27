import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private baseUrl ='http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  getUserFromLocalStorage() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}register`, data);
  }

  logout(): Observable<any> {
    let user = this.getUserFromLocalStorage();
    const headers = new HttpHeaders({
      'Authorization': `Token ${user.token}`
    });
    return this.http.post(`${this.baseUrl}logout`, null, { headers });
  }

  isLoggedIn(): boolean {
    return !!this.getUserFromLocalStorage();
  }

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

  getDriversByTeam(id:number):Observable<any>{
    return this.http.get(this.baseUrl + `getDriversByTeam/${id}`)
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

  getTeams(): Observable<any>{
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

  getRaceResults(): Observable<any>{
    return this.http.get(this.baseUrl + 'getRaceResults');
  }

  addRaceResult(resultData: any): Observable<any>{
    return this.http.post(this.baseUrl + 'addRaceResult', resultData);
  }

  getRaceResult(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `getRaceResult/${id}`);
  }

  updateRaceResult(id: number, updatedRaceResults: any): Observable<any> {
    return this.http.put(this.baseUrl + `updateRaceResult/${id}`, updatedRaceResults);
  }

  deleteRaceResult(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `deleteRaceResult/${id}`);
  }

  getRaceResultsByGP(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `getRaceResultsByGP/${id}`);
  }

  getRaceResultsByDriver(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `getRaceResultsByDriver/${id}`);
  }

}
