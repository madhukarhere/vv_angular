import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor() { }

  getAll() {
    return [
      { category_id: 1, category_name: 'Patriotic' },
      { category_id: 2, category_name: 'Devotional' },
      { category_id: 3, category_name: 'Utsava Geetalu' },
      { category_id: 4, category_name: 'Janapadalu' },
      { category_id: 5, category_name: 'Padyalu' }
    ];
  }
}
