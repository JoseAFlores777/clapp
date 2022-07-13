import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a button element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should have a property disabled', () => {
    expect(component.disabled).toBeDefined();
    component.disabled = true;
    expect(component.disabled).toBeTruthy();
  });

  it('should have a property type', () => {
    expect(component.type).toBeDefined();
    component.type = 'primary';
    expect(component.type).toBeTruthy();
  });
});
