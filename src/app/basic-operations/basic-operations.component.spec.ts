import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsComponent } from './basic-operations.component';

describe('BasicOperationsComponent', () => {
  let component: BasicOperationsComponent;
  let fixture: ComponentFixture<BasicOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
