import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareShareReplayComponent } from './share-share-replay.component';

describe('ShareShareReplayComponent', () => {
  let component: ShareShareReplayComponent;
  let fixture: ComponentFixture<ShareShareReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareShareReplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareShareReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
