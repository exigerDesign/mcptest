import { Component } from '@angular/core';
import { TextFieldInputComponent } from '../../../../shared/components/text-field-input/text-field-input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [TextFieldInputComponent, ButtonComponent],
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {

}
