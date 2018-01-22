import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor() { }

  getSubjectType() {
    return [
      { subject_id: 1, subject_type: 'Suggession' },
      { subject_id: 2, subject_type: 'Contribute' },
      { subject_id: 3, subject_type: 'Faced a problem' }
    ];
  }

}
