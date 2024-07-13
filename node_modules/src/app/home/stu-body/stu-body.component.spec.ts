import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuBodyComponent } from './stu-body.component';

describe('StuBodyComponent', () => {
  let component: StuBodyComponent;
  let fixture: ComponentFixture<StuBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
