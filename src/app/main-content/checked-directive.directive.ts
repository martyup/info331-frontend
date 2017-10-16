import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheckedDirective]'
})
export class CheckedDirectiveDirective {

  constructor() { }

  @HostBinding('innerHTML') mark: string = '&#9744;';

  @HostListener('click') markAsChecked() {
    if(this.mark == '&#9744;'){
      this.mark = '&#9745;';
      }else{
      this.mark = '&#9744;';
    }
  }

}
