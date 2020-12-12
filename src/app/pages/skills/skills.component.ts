import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/services/utils/breakpoint-observer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  maxCount: number = 6; // how many number of progress circles per row. MEDIUM-4, LARGE-5
  about: any = {};
  experiences: Array<any>;
  education: Array<any>;
  frontendSkills: Array<any> = [];
  backendSkills: Array<any> = [];
  tools: Array<any>;

  showMoreProgramming: boolean = false;
  showMoreTools: boolean = false;

  constructor(private router: Router,
    private breakpointService: BreakpointObserverService) {}

  ngOnInit(): void {
    this.about = JSON.parse(sessionStorage.getItem('DATA')).about;
    this.experiences = JSON.parse(sessionStorage.getItem('DATA')).experiences;
    this.education = JSON.parse(sessionStorage.getItem('DATA')).education;
    this.frontendSkills = JSON.parse( sessionStorage.getItem('DATA')).skills.frontend;
    this.backendSkills = JSON.parse( sessionStorage.getItem('DATA')).skills.backend;
    this.tools = JSON.parse(sessionStorage.getItem('DATA')).skills.tools;

    // this.breakpointService.getBreakpointObserver().subscribe((v) => {
    //   this.maxCount = this.breakpointService.isMediumScreen ? 4 : this.breakpointService.isLargeScreen ? 5 : 6;
    // });
  }

  handleButtonClick(url: string) {
    this.router.navigateByUrl(url);
  }

  downloadCv() {
    const NAME = "Gayan-Witharana-CV";
    const CV_PATH = "../../../assets/data/Gayan-Witharana-CV.pdf";
    let link = document.createElement("a");
    link.setAttribute('download', NAME);
    link.href = CV_PATH;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
