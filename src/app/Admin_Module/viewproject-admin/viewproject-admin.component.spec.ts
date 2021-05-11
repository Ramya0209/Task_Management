import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectAdminComponent } from '../viewproject-admin/viewproject-admin.component';

describe('ViewprojectAdminComponent', () => {
  let component: ViewprojectAdminComponent;
  let fixture: ComponentFixture<ViewprojectAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprojectAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
