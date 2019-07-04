import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  results: string

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.results = this.dataService.getResult();
  }

}
