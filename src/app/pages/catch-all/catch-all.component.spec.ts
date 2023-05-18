import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchAllComponent } from './catch-all.component';

describe('CatchAllComponent', () => {
  let component: CatchAllComponent;
  let fixture: ComponentFixture<CatchAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatchAllComponent]
    });
    fixture = TestBed.createComponent(CatchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
