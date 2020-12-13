import {Component, OnInit, HostListener} from '@angular/core';
import {BreakpointObserverService} from 'src/app/services/utils/breakpoint-observer.service';
import {Router} from '@angular/router';
import {AppUtilsService} from 'src/app/services/utils/app-utils.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<any>;
  overlayWidth: string;
  selectedProject;

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    this.hideProjectDetails();
  }

  constructor(private router: Router, private breakPointService: BreakpointObserverService) {
  }

  ngOnInit(): void {
    this.projects = JSON.parse(sessionStorage.getItem('DATA')).projects;
  }

  getShortDescription(longDesc: string): string {
    return longDesc ? longDesc.substring(0, 60) + '...' : '';
  }

  showProjectDetails($event, project) {
    $event.stopPropagation();
    this.overlayWidth = this.breakPointService.isMediumScreen ? '100%' : '50%';
    this.selectedProject = project;
  }

  hideProjectDetails() {
    this.overlayWidth = '0%';
  }

  handleButtonClick(url: string) {
    this.router.navigateByUrl(url);
  }

  getClass(id, index: number) {
    // if (AppUtilsService.isElementInViewPort(document.getElementById(id) as HTMLElement)) {
    return 'scale-in-center';
    // }
  }
}
