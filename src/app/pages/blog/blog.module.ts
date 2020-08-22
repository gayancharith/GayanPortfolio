import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HeadingModule } from '../../widgets/heading/heading.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule,
    BlogRoutingModule,
    HeadingModule],
})
export class BlogModule {}
