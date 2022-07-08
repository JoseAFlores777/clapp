import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarContextComponent } from './sidebar-context.component';

describe('SidebarContextComponent', () => {
  let component: SidebarContextComponent;
  let fixture: ComponentFixture<SidebarContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarContextComponent ]
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
});
