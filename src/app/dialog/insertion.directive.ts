import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInsertion]'
})
export class InsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
