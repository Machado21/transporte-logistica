import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectId } from 'mongodb';
import { Observable, map } from 'rxjs';
import { Logistic } from 'src/app/core/interfaces/logistic.interface';

var httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LogisticService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/';
  urlOnline = 'https://nodejs-api-logistica.onrender.com';
  logistic = {} as Logistic;

  /**
   *
   * @returns All logistics
   */
  getAllLogistcs = async (): Promise<Observable<Logistic[]>> => {
    return this.http.get<Logistic[]>(this.url + 'logistics');
  };

  /**
   *
   * @returns Delivered Logistic array
   */
  getAllDeliveredLogistics(): Observable<Logistic[]> {
    return this.http
      .get<Logistic[]>(this.url + 'logistics')
      .pipe(
        map((logistics: Logistic[]) =>
          logistics.filter((log: Logistic) => log.status === 'delivered')
        )
      );
  }

  getAllTravelingLogistic(): Observable<Logistic[]> {
    return this.http
      .get<Logistic[]>(this.url + 'logistics')
      .pipe(
        map((logistics: Logistic[]) =>
          logistics.filter((logis: Logistic) => logis.status !== 'delivered')
        )
      );
  }

  updateLogistic(logistic: Logistic): Observable<Logistic> {
    const apiurl = `${this.url}logistics/${logistic._id}`;
    return this.http.put<Logistic>(apiurl, logistic, httpOptions);
  }
}