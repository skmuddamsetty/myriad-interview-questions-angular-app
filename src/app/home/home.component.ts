import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  html = `<div class="terminal" [ngSwitch]="selection.value">
  <pre *ngSwitchDefault>ng generate component xyz</pre>
  <pre *ngSwitchCase="'material'">ng add @angular/material</pre>
  <pre *ngSwitchCase="'dependency'">ng add _____</pre>
  <pre *ngSwitchCase="'test'">ng test</pre>
  <pre *ngSwitchCase="'build'">ng build --prod</pre>
</div>`;
  constructor() {}

  ngOnInit() {}
}
