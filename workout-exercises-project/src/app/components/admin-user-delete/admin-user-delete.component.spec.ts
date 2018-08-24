import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDeleteComponent } from './admin-user-delete.component';

describe('AdminUserDeleteComponent', () => {
  let component: AdminUserDeleteComponent;
  let fixture: ComponentFixture<AdminUserDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
