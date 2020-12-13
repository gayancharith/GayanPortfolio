import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsComponent} from './skills.component';
import {SkillsRoutingModule} from './skills-routing.module';
import {ProgressCircleModule} from 'src/app/widgets/progress-circle/progress-circle.module';
import {ButtonModule} from 'src/app/widgets/button/button.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ProgressCircleModule,
    ButtonModule
  ],
})
export class SkillsModule {
}
