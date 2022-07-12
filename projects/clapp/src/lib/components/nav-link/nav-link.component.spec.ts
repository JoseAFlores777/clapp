import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkComponent } from './nav-link.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SimpleChange } from '@angular/core';

describe('NavLinkComponent', () => {
  let component: NavLinkComponent;
  let fixture: ComponentFixture<NavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLinkComponent, SvgIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called classActivateHandler when the ngOnChanges is calling by second time', () => {
    spyOn(component, 'classActivateHandler');
    component.ngOnChanges({
      isActivated: new SimpleChange(false, true, false)
    });
    fixture.detectChanges();
    expect(component.classActivateHandler).toHaveBeenCalled();
  });


  it('should the nav-link element have a class of active when isActivated is true', () => { 
    const compiled = fixture.debugElement.nativeElement;
    component.isActivated = true;
    component.classActivateHandler();
    fixture.detectChanges();
    expect(compiled.querySelector('#nav-Link').classList.contains('active')).toBe(true);
  });

  it('should the nav-link element have a class of active when isActivated is false', () => { 
    const compiled = fixture.debugElement.nativeElement;
    component.isActivated = false;
    component.classActivateHandler();
    fixture.detectChanges();
    expect(compiled.querySelector('#nav-Link').classList.contains('active')).toBe(false);
  });

  it('should call the classActivateHandler method when the mouse is enter the nav-link element', () => { 
    const compiled = fixture.debugElement.nativeElement;
    spyOn(component, 'classActivateHandler');
    compiled.querySelector('#nav-Link').dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(component.classActivateHandler).toHaveBeenCalled();
  });

  it('should call the classActivateHandler method when the mouse is leave the nav-link element', () => { 
    const compiled = fixture.debugElement.nativeElement;
    spyOn(component, 'classActivateHandler');
    compiled.querySelector('#nav-Link').dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(component.classActivateHandler).toHaveBeenCalled();
  });

  it('should the nav-link element have a class of active when the mouse is enter the nav-link element', () => { 
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#nav-Link').dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(compiled.querySelector('#nav-Link').classList.contains('active')).toBe(true);
  });

  it('should the nav-link element not have a class of inactive when the mouse is enter the nav-link element', () => { 
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#nav-Link').dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(compiled.querySelector('#nav-Link').classList.contains('inactive')).toBe(false);
  });

  it('should the nav-link element have a class of inactive when the mouse is leave the nav-link element', () => { 
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#nav-Link').dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(compiled.querySelector('#nav-Link').classList.contains('inactive')).toBe(true);
  });

  it('should the nav-link element not have a class of active when the mouse is leave the nav-link element', () => { 
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#nav-Link').dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(compiled.querySelector('#nav-Link').classList.contains('active')).toBe(false);
  });
});
