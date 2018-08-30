import { Component, OnInit } from '@angular/core';
import { NpmPackageService } from '../shared/services/npm-package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent {
  startDate: Date;
  endDate: Date;
  list: any = [];

  constructor(private npmPackageService: NpmPackageService) {
    this.npmPackageService.subject.subscribe(
      {
        next: (v:any) => {this.list=[];
             v.forEach(element => {
          this.list.push({name:element.package.name})
         
        })
      }
        }  );

    this.npmPackageService.subjectDates.subscribe(
      {
        next: (v:{start:any,end:any}) => {this.list.forEach(el=>{
          this.npmPackageService.getNumOfDownloads(el["name"],v.start,v.end).subscribe(p=>{
              el.downloadnum=p.downloads
              ;
           })
        });
        console.log(this.list);
      }}
    );

    
  }


}
