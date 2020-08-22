import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactDetails: any = {};
  name: string;
  email: string;
  subject: string;
  description: string;

  constructor() {}

  ngOnInit(): void {
    this.contactDetails = JSON.parse(sessionStorage.getItem('DATA')).contact;
  }

  sendMessage() {
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, (form) => {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  }
}
