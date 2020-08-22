import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { HeadingModule } from '../../widgets/heading/heading.module';
import { ButtonModule } from '../../widgets/button/button.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    HeadingModule,
    ButtonModule
  ],
})
export class ContactModule {}
