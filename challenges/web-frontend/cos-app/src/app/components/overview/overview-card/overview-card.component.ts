import { Component, Input, OnInit } from '@angular/core';
import { IAuction } from 'src/app/models/auction.interface';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit {

  @Input() auction: IAuction;
  constructor() { }

  ngOnInit(): void {
  }

}
