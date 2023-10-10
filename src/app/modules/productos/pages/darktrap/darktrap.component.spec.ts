import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarktrapComponent } from './darktrap.component';

describe('DarktrapComponent', () => {
  let component: DarktrapComponent;
  let fixture: ComponentFixture<DarktrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarktrapComponent]
    });
    fixture = TestBed.createComponent(DarktrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
