import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

import { ClappIcons, IconFill } from './clapp-icons.helper';

type TYPE_ICON_FILLS = keyof typeof IconFill;
type TYPE_ICONS_NAMES = keyof typeof ClappIcons;

@Component({
  selector: 'cl-svg-icon',
  template: `<div #iconContainer></div>`,
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit, AfterViewInit {
  @ViewChild('iconContainer') iconContainer!: ElementRef;
  @Input('icon') icon: TYPE_ICONS_NAMES = 'account';
  @Input('width') width: number = 24;
  @Input('height') height: number = 24;
  @Input('fill') fill: TYPE_ICON_FILLS = 'ApplaudoNavyBlue';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    let templateTmp = this.renderer.createElement('template');
    templateTmp.innerHTML = ClappIcons[this.icon];
    let svg = templateTmp.content.firstChild as SVGElement;
    this.renderer.setAttribute(svg, 'width', `${this.width}px`);
    this.renderer.setAttribute(svg, 'height', `${this.height}px`);
    this.iconContainer.nativeElement.setAttribute('class', `${IconFill[this.fill]}`);
    this.renderer.appendChild(this.iconContainer.nativeElement, svg);
  }

  ngOnInit(): void {}
}
