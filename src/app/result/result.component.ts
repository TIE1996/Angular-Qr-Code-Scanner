import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  results: string

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.results = this.dataService.getResult();
  }
  
  returnToScan() {
    this.router.navigateByUrl('/')
  }

}
