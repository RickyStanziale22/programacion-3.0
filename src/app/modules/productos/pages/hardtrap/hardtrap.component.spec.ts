import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardtrapComponent } from './hardtrap.component';

describe('HardtrapComponent', () => {
  let component: HardtrapComponent;
  let fixture: ComponentFixture<HardtrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardtrapComponent]
    });
    fixture = TestBed.createComponent(HardtrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
