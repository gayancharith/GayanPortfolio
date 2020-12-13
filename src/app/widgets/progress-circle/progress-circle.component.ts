import {Component, OnInit, Input} from '@angular/core';
import {AppUtilsService} from 'src/app/services/utils/app-utils.service';

@Component({
  selector: 'site-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  host: {
    '(document:scroll)': 'addProgressAnimation()',
  },
})
export class ProgressCircleComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() percentage: number;
  @Input() showPercentageText: boolean = true;
  @Input() iconClass: string;

  strokeDashArray: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  /* Add progress circle animation, when it comes to view port and
  remove the animation when it's not in view port. */
  addProgressAnimation() {
    let pcElmList = document.querySelector('.progress-circle-prog-' + this.id);
    if (AppUtilsService.isElementInViewPort(pcElmList as HTMLElement)) {
      let strokeV: number = 4.64;
      this.strokeDashArray = this.percentage * strokeV + ' 999';
    } else {
      this.strokeDashArray = null;
    }
  }
}
