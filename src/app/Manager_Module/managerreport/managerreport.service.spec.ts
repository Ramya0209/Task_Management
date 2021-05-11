import { TestBed } from '@angular/core/testing';

import { ManagerReportService} from '../managerreport/managerreport.service';

describe('ManagerReportService', () => {
  let service: ManagerReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
