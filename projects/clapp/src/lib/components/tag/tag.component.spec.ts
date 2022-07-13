import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a child span', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span')).toBeTruthy();
  });

  it('should correctly render the passed @Input label value', () => {
    const label = 'Enter a new label';
    component.label = label;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const span = compiled.querySelector('.span').innerText;

    expect(span).toBe(label);
  });

  it('should correctly render the passed @Input type value', () => {
    const type = 'normal';
    component.type = type;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const span = compiled.querySelector('.span');

    expect(span.getAttribute('class')).toContain(type);
  });
});
