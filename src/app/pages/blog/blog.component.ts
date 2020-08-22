import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: Array<any>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.blogs = JSON.parse(sessionStorage.getItem('DATA')).blogs;
  }

  goToBlog(url: string) {
    if (url) {
      this.router.navigateByUrl(url);
    }
  }
}
