import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-explore';
  config = {
    indicatorCapacity: 5,
    allowHalves: false,
    disabled: false,
    size: 'md',
  };
  sizes = ['xs', 'sm', 'md', 'lg', 'cozy', 'compact', 'condensed'];
  modelValue = 2;
  totalRatings:number = 5;
  value:number = 3.34;
}
