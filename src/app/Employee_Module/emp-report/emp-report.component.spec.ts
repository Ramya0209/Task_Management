import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReportComponent } from '../emp-report/emp-report.component';

describe('EmpReportComponent', () => {
  let component: EmpReportComponent;
  let fixture: ComponentFixture<EmpReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
