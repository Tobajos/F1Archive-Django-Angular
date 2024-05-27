import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrandprixComponent } from './add-grandprix.component';

describe('AddGrandprixComponent', () => {
  let component: AddGrandprixComponent;
  let fixture: ComponentFixture<AddGrandprixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGrandprixComponent]
    });
    fixture = TestBed.createComponent(AddGrandprixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
