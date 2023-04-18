import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(public layout:LayoutServiceService) { }

  ngOnInit(): void {
  }

}
