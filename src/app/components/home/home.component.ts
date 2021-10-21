import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fecha:number = Date.now();
  value: number = 65;
  constructor() { }

  ngOnInit(): void {
  }

}
