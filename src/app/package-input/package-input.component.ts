import { Component, OnInit } from '@angular/core';
import { NpmPackageService } from '../shared/services/npm-package.service';

@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent implements OnInit {

  constructor(private npmPackageService: NpmPackageService) { }

  ngOnInit() {
  }
  filterList(filterString) {
    this.npmPackageService.getFilteredList(filterString).subscribe((res) => {
      this.npmPackageService.subject
        .next(res);
    }
    )
  }

}
