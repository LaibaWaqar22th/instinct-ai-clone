import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIntentComponent } from './new-intent.component';

describe('NewIntentComponent', () => {
  let component: NewIntentComponent;
  let fixture: ComponentFixture<NewIntentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewIntentComponent]
    });
    fixture = TestBed.createComponent(NewIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
