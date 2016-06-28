import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Component({
  selector: 'my-app',
  template: `
    <my-dropdown [userData]="userData"></my-dropdown>
  `,
  directives: [
    DropdownComponent
  ]
})
export class AppComponent {

  private userData: Object = {
    fruitSelection: 1
  };

}
