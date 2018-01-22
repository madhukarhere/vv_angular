import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  subjectTypes;

  constructor(private router: Router, private contactService: ContactService) {
    this.subjectTypes = contactService.getSubjectType();
  }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
    this.router.navigate(['/']);
  }

}
