
import { Component } from '@angular/core';
import { LayoutServiceService } from './services/layout-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public layout: LayoutServiceService){}
  
}
