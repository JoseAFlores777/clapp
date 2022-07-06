import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatekeeperComponent } from './gatekeeper.component';

describe('GatekeeperComponent', () => {
  let component: GatekeeperComponent;
  let fixture: ComponentFixture<GatekeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatekeeperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
