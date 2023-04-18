import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public layout: LayoutServiceService){}

  ngOnInit(): void {
  }

}
