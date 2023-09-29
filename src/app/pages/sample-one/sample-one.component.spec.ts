import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleOneComponent } from './sample-one.component';

describe('SampleOneComponent', () => {
  let component: SampleOneComponent;
  let fixture: ComponentFixture<SampleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleOneComponent]
    });
    fixture = TestBed.createComponent(SampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
