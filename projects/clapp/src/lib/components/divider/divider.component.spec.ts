import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerComponent } from './divider.component';

describe('DividerComponent', () => {
  let component: DividerComponent;
  let fixture: ComponentFixture<DividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DividerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a child hr', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('hr')).toBeTruthy();
  });

  it('should correctly insert a class with the passed @Input type value', () => {
    const type = 'horizontal';
    component.type = type;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const hr = compiled.querySelector('hr');

    expect(hr.getAttribute('class')).toContain(type);
  });
});
