import { TestBed } from '@angular/core/testing';

import { ViewprojectAdminService } from '../viewproject-admin/viewproject-admin.service';

describe('ViewprojectAdminService', () => {
  let service: ViewprojectAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewprojectAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
