import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {
  handset:boolean;
  tab:boolean;
  constructor(breakpointObserver: BreakpointObserver) { 
    this.handset = breakpointObserver.isMatched('(max-width: 599px)');
    this.tab = breakpointObserver.isMatched('(max-width: 839px)');
  }
}
