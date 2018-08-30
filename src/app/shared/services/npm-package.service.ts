import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NpmPackageService {

  constructor(private http: HttpClient) { }

  subject = new Subject();
  subjectDates = new Subject();

  getFilteredList(filterString): Observable<any> {
    return this.http.get(`https://api.npms.io/v2/search/suggestions?q=${filterString}&size=40`);
  }
getNumOfDownloads(packageName:string,start:Date,end:Date):Observable<any>{
  return this.http.get(` https://api.npmjs.org/downloads/point/${start}:${end}/${packageName}`);

}


}

