import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.scss']
})
export class PrintLayoutComponent implements OnInit {

  constructor() {

    //https://medium.com/@Idan_Co/angular-print-service-290651c721f9
  }

  ngOnInit(): void {
  }

}
