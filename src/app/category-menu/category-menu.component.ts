import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {

  categories;

  constructor(private categoryservice: CategoryService) {
    this.getAll();
  }

  getAll() {
    this.categories = this.categoryservice.getAll();
  }

}
