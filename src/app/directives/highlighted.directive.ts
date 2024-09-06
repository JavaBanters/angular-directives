import { Directive, Host, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted: boolean = false;

  @Output()
  highlightedChange = new EventEmitter<boolean>();

  constructor() {
    console.log('highlighted directive created');
  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return "highlighted";
  // }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  // @HostBinding('style.backgroundColor')
  // get cssClasses() {
  //   return "blue";
  // }

  // @HostBinding('attr.disabled')
  // get isDisabled() {
  //   return true;
  // }

  @HostListener('mouseover', ['$event'])
  onMouseHover($event) {
    console.log('mouse over', $event);
    this.isHighlighted = true;
    this.highlightedChange.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHighlighted = false;
    this.highlightedChange.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
  }

}
