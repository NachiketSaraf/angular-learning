import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tour } from '../../model/tour.model';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  baseUrl = "http://192.168.6.37:8080/api/v1";
  constructor(private httpClient: HttpClient) {

  }
  getTours(): Observable<{ data: { tours: Tour[] } }> {
    return this.httpClient.get<{ data: { tours: Tour[] } }>(`${this.baseUrl}/tours`);
  }

  postTour(formData: Tour): Observable<Tour> {
    return this.httpClient.post<Tour>(`${this.baseUrl}/tours`, formData);
  }

  deleteTour(tourId :string): Observable<Tour> {
    return this.httpClient.delete<Tour>(`${this.baseUrl}/tours/${tourId}`)
  }

}
