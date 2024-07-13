import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBodyComponent } from './emp-body.component';

describe('EmpBodyComponent', () => {
  let component: EmpBodyComponent;
  let fixture: ComponentFixture<EmpBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
