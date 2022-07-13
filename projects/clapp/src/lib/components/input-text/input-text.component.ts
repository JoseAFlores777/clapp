import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cl-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputTextComponent, multi: true }],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input('type') type!: 'noLabel' | 'plusLabel';
  @Input('label') label!: string;
  @Input('placeholder') placeholder!: string;
  @Input('disabled') disabled: boolean = false;
  @Input('isInvalidAndTouched') isInvalidAndTouched!: boolean;

  inputValue: string = '';
  private onChangefn!: Function;
  private onTouchedfn!: Function;

  constructor() {}

  ngOnInit(): void {
    this.inizializeProps();
  }

  changeText($event: any): void {
    this.onChangefn($event.target.value);
    this.onBlur();
  }

  onBlur() {
    this.onTouchedfn();
  }

  writeValue(value: string): void {
    this.inputValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChangefn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedfn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  inizializeProps() {
    if (this.type === 'noLabel') {
      this.placeholder = this.placeholder || 'Placeholder here';
      this.label = '';
    }
    if (this.type === 'plusLabel') {
      this.label = this.label || 'Label here';
      this.placeholder = '';
    }
  }
}
