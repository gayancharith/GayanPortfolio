import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactDetails: any = {};
  // name: string;
  // email: string;
  // subject: string;
  // description: string;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private emailService: EmailService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.contactDetails = JSON.parse(sessionStorage.getItem('DATA')).contact;
    this.form = this.fb.group({
      subject: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.form.valid) {
      this.emailService.sendMessage(this.form.value).subscribe(res => {
        console.log(res);
        this.form.reset();
        this.toastr.success('Your message has been sent successfully.', '');
      }, error => {
        this.toastr.error('Error occurred when sending email.', '');
      });
    }
  }
}
