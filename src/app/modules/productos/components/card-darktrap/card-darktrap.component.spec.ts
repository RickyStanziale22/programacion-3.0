import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDarktrapComponent } from './card-darktrap.component';

describe('CardDarktrapComponent', () => {
  let component: CardDarktrapComponent;
  let fixture: ComponentFixture<CardDarktrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDarktrapComponent]
    });
    fixture = TestBed.createComponent(CardDarktrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
