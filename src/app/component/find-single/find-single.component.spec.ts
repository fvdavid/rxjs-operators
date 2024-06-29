import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSingleComponent } from './find-single.component';

describe('FindSingleComponent', () => {
  let component: FindSingleComponent;
  let fixture: ComponentFixture<FindSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
