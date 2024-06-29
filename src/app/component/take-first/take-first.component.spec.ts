import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeFirstComponent } from './take-first.component';

describe('TakeFirstComponent', () => {
  let component: TakeFirstComponent;
  let fixture: ComponentFixture<TakeFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
