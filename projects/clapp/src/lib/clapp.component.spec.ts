import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClappComponent } from './clapp.component';

describe('ClappComponent', () => {
  let component: ClappComponent;
  let fixture: ComponentFixture<ClappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
