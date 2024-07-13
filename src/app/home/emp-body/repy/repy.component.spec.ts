import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepyComponent } from './repy.component';

describe('RepyComponent', () => {
  let component: RepyComponent;
  let fixture: ComponentFixture<RepyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
