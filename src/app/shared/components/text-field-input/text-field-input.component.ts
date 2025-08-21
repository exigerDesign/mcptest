import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field-input',
  standalone: true,
  templateUrl: './text-field-input.component.html',
  styleUrls: ['./text-field-input.component.css']
})
export class TextFieldInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}
