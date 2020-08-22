import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/services/utils/breakpoint-observer.service';
import { Router } from '@angular/router';
import { AppUtilsService } from 'src/app/services/utils/app-utils.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  // host: {
  //   '(document:scroll)': 'addAnimation()',
  // },
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Array<any>;
  overlayWidth: string;
  selectedProject;
  flag: boolean = false;

  constructor(private router: Router, private breakPointService: BreakpointObserverService) { }

  ngAfterViewInit(): void {
    // this.addAnimation();
  }

  ngOnInit(): void {
    this.projects = JSON.parse(sessionStorage.getItem('DATA')).projects;
  }

  getShortDescription(longDesc: string): string {
    return longDesc ? longDesc.substring(0, 60) + '...' : '';
  }

  showProjectDetails(project) {
    this.overlayWidth = this.breakPointService.isMediumScreen ? '100%' : '50%';
    this.selectedProject = project;
  }

  hideProjectDetails() {
    this.overlayWidth = '0%';
  }

  handleButtonClick(url: string) {
    this.router.navigateByUrl(url);
  }

  addAnimation() {
    let elmList = document.querySelectorAll('.animated-item');
    if (elmList && elmList.length > 0) {

      for (let i = 0; i < elmList.length; i++) {
        let elm = elmList[i] as HTMLElement;
        if (AppUtilsService.isElementInViewPort(elm)) {
          if (elm.className.indexOf('scale-in-center') === -1) {
            elm.className += ' scale-in-center';
            // setTimeout(() => {
            //   elm.classList.remove('scale-in-center');
            // }, 1000);
          }
        }
      }
    }
  }

  getClass(id, index: number) {
    // if (AppUtilsService.isElementInViewPort(document.getElementById(id) as HTMLElement)) {
    return 'scale-in-center';
    // }
  }
}
