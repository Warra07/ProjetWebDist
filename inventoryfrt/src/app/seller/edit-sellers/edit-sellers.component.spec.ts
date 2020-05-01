import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSellersComponent } from './edit-sellers.component';

describe('EditSellersComponent', () => {
  let component: EditSellersComponent;
  let fixture: ComponentFixture<EditSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
