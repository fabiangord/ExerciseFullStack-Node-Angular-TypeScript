import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDoctorsComponent } from './get-doctors.component';

describe('GetDoctorsComponent', () => {
  let component: GetDoctorsComponent;
  let fixture: ComponentFixture<GetDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDoctorsComponent]
    });
    fixture = TestBed.createComponent(GetDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
