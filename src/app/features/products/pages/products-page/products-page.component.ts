import { Component } from '@angular/core';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ProductsFormComponent } from '../../components/products-form/products-form.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    Sidebar,
    ProductsFormComponent,
  ],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {}
