import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() link: string;
  @Input() param: string;
  constructor() {
    console.log(this.param);
  }

  ngOnInit() {}
}
