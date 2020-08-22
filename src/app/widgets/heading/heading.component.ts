import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'site-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() watermarkText: string;
  @Input() heading: string;
  @Input() showWatermark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
