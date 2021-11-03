import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpFilterComponent } from './sp-filter.component';

describe('SpFilterComponent', () => {
  let component: SpFilterComponent;
  let fixture: ComponentFixture<SpFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
