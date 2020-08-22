import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { HeadingModule } from '../../widgets/heading/heading.module';
import { ProjectsComponent } from './projects.component';
import { ButtonModule } from 'src/app/widgets/button/button.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HeadingModule,
    ButtonModule
  ]
})
export class ProjectsModule { }
