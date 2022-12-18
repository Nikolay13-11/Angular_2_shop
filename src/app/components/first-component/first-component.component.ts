import { Component } from '@angular/core';

enum Category {
  Accessories = 'Accessories',
  Instruments = 'Instruments',
  Electronics = 'Electronics And Computers',
  Bags = 'Bags',
  Suits = 'Suits'

}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  title: string = 'First Component Title';
  items = [
    {
      name: 'Name for bugs',
      description: 'Description for bugs',
      price: 123,
      category: Category.Bags,
      isAvailable: true,
    },
    {
      name: 'Name for Accessories',
      description: 'Description for Accessories',
      price: 123,
      category: Category.Accessories,
      isAvailable: true,
    },
    {
      name: 'Name for Electronics',
      description: 'Description for Electronics',
      price: 123,
      category: Category.Electronics,
      isAvailable: true,
    },
    {
      name: 'Name for Suits',
      description: 'Description for Suits',
      price: 123,
      category: Category.Suits,
      isAvailable: true,
    },
    {
      name: 'Name for Instruments',
      description: 'Description for Instruments',
      price: 123,
      category: Category.Instruments,
      isAvailable: true,
    }
  ]
}
