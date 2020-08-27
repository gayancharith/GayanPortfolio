import {Component, OnInit, PLATFORM_ID, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BreakpointObserverService} from './services/utils/breakpoint-observer.service';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {routerTransition} from './animations';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent implements OnInit {
  siteLaunch: boolean = false;
  activatedRouteIndex: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private breakpointService: BreakpointObserverService,
              @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activatedRouteIndex = activatedRoute.firstChild.routeConfig.data.index;
      }
    });
    breakpointService.initService();
  }

  ngOnInit(): void {
    this.getData();
  }

  /* Retrive data needed for the site*/
  getData() {
    this.http.get('assets/data/data.json').subscribe(
      (data) => {
        sessionStorage.setItem('DATA', JSON.stringify(data));
        this.siteLaunch = true;
      },
      (e) => {
        this.siteLaunch = false;
      }
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
