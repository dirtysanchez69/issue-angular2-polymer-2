import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { PolymerElement } from '@vaadin/angular2-polymer';

// If you remove the [selected]="userData.fruitSelection"
// property, the error goes away.

@Component({
  selector: 'my-dropdown',
  template: `
    <paper-dropdown-menu label="Fruit" #fruitDropdown >
      <paper-listbox 
      [selected]="userData.fruitSelection"
      class="dropdown-content">
        <paper-item *ngFor="let option of dropdownOptions.fruit">{{option}}</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

    <paper-dropdown-menu 
    label="Types (depends on Fruit)" 
    [disabled] = "!fruitDropdown.value">
      <paper-listbox
      class="dropdown-content">
        <paper-item *ngFor="let option of 
              (( fruitDropdown.value ) 
               ? dropdownOptions.type[fruitDropdown.value] 
               : [] )">{{option}}</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>
  `,
  styles: [`

  `],
  directives: [
    PolymerElement('paper-dropdown-menu'),
    PolymerElement('paper-listbox'),
    PolymerElement('paper-item')
  ]
})
export class DropdownComponent {

  @Input() userData: {
    fruitSelection:any, 
    typeSelection:any
  };

  private dropdownOptions: { 
    fruit: Array<string>, 
    type: {
      apple: Array<string>,
      grape: Array<string>,
      banana: Array<string>
    }
  };

  constructor() { 
    this.userData = {
      fruitSelection: 1,
      typeSelection: 1
    };
    this.dropdownOptions = {
      fruit: ['apple', 'grape', 'banana'],
      type : {
        apple: ['granny smith', 'red delicious', 'macintosh'],
        grape: ['sirah', 'bordeaux'],
        banana: ['plaintain', 'baby', 'manzano']
      }
    };
  }

}
