import { Component } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  onClose() {
    this.dialog.close('some value');
  }
}
