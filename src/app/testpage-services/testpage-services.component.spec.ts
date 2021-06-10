import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpageServicesComponent } from './testpage-services.component';

describe('TestpageServicesComponent', () => {
  let component: TestpageServicesComponent;
  let fixture: ComponentFixture<TestpageServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestpageServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
