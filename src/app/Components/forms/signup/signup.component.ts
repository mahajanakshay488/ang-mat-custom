import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  constructor(public layout:LayoutServiceService) { }

  ngOnInit(): void {
  }

}
