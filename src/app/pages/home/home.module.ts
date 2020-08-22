import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from '../../widgets/button/button.module';
import { HeadingModule } from '../../widgets/heading/heading.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    HeadingModule],
})
export class HomeModule {}
