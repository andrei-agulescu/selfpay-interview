import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationModel } from '../models/location';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getFilteredLocations(filterKeyword: string): Observable<LocationModel[]> {
    const normalizedFilterKeyword = filterKeyword.trim().toLowerCase();

    return this.httpClient.get<LocationModel[]>(environment.backendUrl)
      .pipe(
        map((items: LocationModel[]) =>
          items.filter((item: LocationModel) => normalizedFilterKeyword
            ? item.name.toLowerCase().indexOf(normalizedFilterKeyword) >= 0
            : true
          )
        )
      );
  }
}
