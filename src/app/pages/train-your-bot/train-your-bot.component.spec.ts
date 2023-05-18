import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainYourBotComponent } from './train-your-bot.component';

describe('TrainYourBotComponent', () => {
  let component: TrainYourBotComponent;
  let fixture: ComponentFixture<TrainYourBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainYourBotComponent]
    });
    fixture = TestBed.createComponent(TrainYourBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
