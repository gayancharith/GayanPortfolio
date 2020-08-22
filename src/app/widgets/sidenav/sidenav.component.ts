import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showToggleMenu: boolean = false;
  toggleMenuOpacity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
