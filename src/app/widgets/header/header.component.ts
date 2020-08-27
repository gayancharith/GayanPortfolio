import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router, ActivatedRoute} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:scroll)': 'highlightHeader()',
  },
})


export class HeaderComponent implements OnInit {
  // activatedRoute: string;
  activatedRouteIndex: number;
  setBgDark: boolean;

  constructor(private router: Router,
              route: ActivatedRoute,
              @Inject(PLATFORM_ID) private platformId: Object) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.activatedRouteIndex = route.firstChild.routeConfig.data.index;
    //     this.highlightHeader();
    //   }
    // });
  }

  ngOnInit(): void {
    // this.activatedRoute = 'home';
    // this.breakPointObserver.getBreakpointObserver().subscribe(v=>{
    //   console.log(this.breakPointObserver.isMediumScreen);
    //   this.showCollapsedMenu = this.breakPointObserver.isSmallScreen;
    // })
  }

  // scrollIntoView(element: string) {
  //   this.activatedRoute = element;
  //   document.getElementById(element).scrollIntoView();
  // }

  highlightHeader() {
    // if (isPlatformBrowser(this.platformId)) {
    // let pos = window.pageYOffset;
    //   console.log(pos)
    // }

    this.setBgDark = this.activatedRouteIndex !== 0;
  }

  show() {
    document.getElementById('togglerBtn').className.indexOf('collapsed') !== -1;
  }
}
