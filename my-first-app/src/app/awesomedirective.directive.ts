import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[AwesomeDirective]',
})
export class AwesomeDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
 @Input('AwesomeDirective') defaultColor:string='transparent';
 @Input() highlightColor="red";
  constructor(private elemRef: ElementRef, private rederer: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
    // this.rederer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.rederer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'green'
    // );
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseoleve (eventData: Event) {
    // this.rederer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor=this.defaultColor;
  }
}
