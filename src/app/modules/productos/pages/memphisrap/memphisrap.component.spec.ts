import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemphisrapComponent } from './memphisrap.component';

describe('MemphisrapComponent', () => {
  let component: MemphisrapComponent;
  let fixture: ComponentFixture<MemphisrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemphisrapComponent]
    });
    fixture = TestBed.createComponent(MemphisrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
