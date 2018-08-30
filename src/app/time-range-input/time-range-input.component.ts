import { Component, OnInit } from '@angular/core';
import { NpmPackageService } from '../shared/services/npm-package.service';

@Component({
  selector: 'app-time-range-input',
  templateUrl: './time-range-input.component.html',
  styleUrls: ['./time-range-input.component.css']
})
export class TimeRangeInputComponent implements OnInit {

  constructor(private npmPackageService:NpmPackageService) {

   }
   startDate:Date;
   endDate:Date;
  ngOnInit() {
  }
  changeDate(){
    this.npmPackageService.subjectDates
    .next({start:this.startDate,end:this.endDate});
  }


}
