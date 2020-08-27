import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'site-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  // showToggleMenu: boolean = false;
  // toggleMenuOpacity: number = 0;
  isOpen: boolean;
  activatedRouteIndex: number;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activatedRouteIndex = route.firstChild.routeConfig.data.index;
      }
    });
  }

  ngOnInit(): void {
  }

}
