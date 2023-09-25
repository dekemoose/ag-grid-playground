import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowGroupTestComponent } from './row-group-test.component';

describe('RowGroupTestComponent', () => {
  let component: RowGroupTestComponent;
  let fixture: ComponentFixture<RowGroupTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowGroupTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowGroupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
