import { Component, Input, OnInit, Renderer2, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ClappIcons, IconFill } from '../svg-icon/clapp-icons.helper';

type TYPE_ICON_FILLS = keyof typeof IconFill;
type TYPE_ICONS_NAMES = keyof typeof ClappIcons;

@Component({
  selector: 'cl-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent implements OnInit {
  @ViewChild('navLink') navLink!: ElementRef;
  @Input('showText') showText: boolean = true;
  @Input('text') text!: string;
  @Input('isActivated') isActivated!: boolean;
  @Input('icon') icon: TYPE_ICONS_NAMES = 'account';
  @Input('fill') fill: TYPE_ICON_FILLS = 'White';


  constructor(private render: Renderer2) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isActivated'] && !changes['isActivated'].isFirstChange()) {
        this.classActivateHandler();
    }
  }

  classActivateHandler(hover?: boolean) {
    if (this.isActivated || hover) {
      this.render.removeClass(this.navLink.nativeElement, 'inactive');
      this.render.addClass(this.navLink.nativeElement, 'active');
      this.fill = 'ApplaudoRed';
    } else {
      this.render.removeClass(this.navLink.nativeElement, 'active');
      this.render.addClass(this.navLink.nativeElement, 'inactive');
      this.fill = 'White';
    }
  }
}
