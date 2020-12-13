import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {ButtonModule} from '../../widgets/button/button.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule
  ],
})
export class ContactModule {
}
