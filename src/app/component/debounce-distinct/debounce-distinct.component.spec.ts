import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceDistinctComponent } from './debounce-distinct.component';

describe('DebounceDistinctComponent', () => {
  let component: DebounceDistinctComponent;
  let fixture: ComponentFixture<DebounceDistinctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceDistinctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceDistinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
