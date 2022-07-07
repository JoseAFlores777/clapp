import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'cl-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @Input('disabled') disabled = false;
  @Input('text') text = 'Primary';
  // @ViewChild('primaryButton') someInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  // ngAfterViewInit(): void {
  //   this.someInput.nativeElement.disabled = this.disabled;
  // }
}
