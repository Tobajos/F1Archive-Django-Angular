import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandprixDetailsComponent } from './grandprix-details.component';

describe('GrandprixDetailsComponent', () => {
  let component: GrandprixDetailsComponent;
  let fixture: ComponentFixture<GrandprixDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandprixDetailsComponent]
    });
    fixture = TestBed.createComponent(GrandprixDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
