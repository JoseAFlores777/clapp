import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSimpleComponent } from './profile-simple.component';

describe('ProfileSimpleComponent', () => {
  let component: ProfileSimpleComponent;
  let fixture: ComponentFixture<ProfileSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
