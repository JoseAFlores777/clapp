import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SvgIconComponent } from '../../components/svg-icon/svg-icon.component';

import { SidebarContextComponent } from './sidebar-context.component';


describe('SidebarContextComponent', () => {
  let component: SidebarContextComponent;
  let fixture: ComponentFixture<SidebarContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarContextComponent, SvgIconComponent],
      imports: [NoopAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toogle isCollapsed property when toogleSideBar() method is called', () => { 
    component.toogleSideBar();
    expect(component.isCollapsed).toBeTruthy();
  });

  it('should isCollapsedSidebar emit true when toogleSideBar() method is called for the first Time', () => { 
    spyOn(component.isCollapsedSidebar, 'emit');
    component.toogleSideBar();
    expect(component.isCollapsedSidebar.emit).toHaveBeenCalledWith(true);
  });

  it('should sidebar element width be 216px when isCollapsed property is false', () => { 
    component.isCollapsed = false;
    fixture.detectChanges();
    const sidebar = fixture.debugElement.query(By.css('#sidebar'));
    expect(sidebar.nativeElement.style.width).toBe('216px');
  });

  it('should sidebar element width be 64px when isCollapsed property is true', () => { 
    fixture = TestBed.createComponent(SidebarContextComponent);
    component = fixture.componentInstance;
    component.isCollapsed = true;
    fixture.detectChanges();
    const sidebar = fixture.debugElement.query(By.css('#sidebar'));
    expect(sidebar.nativeElement.style.width).toBe('64px');
  });

  it('should call toogleSideBar() method when icon-toogle element is clicked', () => { 
    spyOn(component, 'toogleSideBar');
    const iconToogle = fixture.debugElement.query(By.css('#icon-toogle'));
    iconToogle.nativeElement.click();
    expect(component.toogleSideBar).toHaveBeenCalled();
  });
});
