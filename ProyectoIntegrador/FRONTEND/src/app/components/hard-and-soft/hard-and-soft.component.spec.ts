import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardAndSoftComponent } from './hard-and-soft.component';

describe('HardAndSoftComponent', () => {
  let component: HardAndSoftComponent;
  let fixture: ComponentFixture<HardAndSoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardAndSoftComponent]
    });
    fixture = TestBed.createComponent(HardAndSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
