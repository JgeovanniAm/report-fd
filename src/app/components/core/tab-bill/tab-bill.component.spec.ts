import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBillComponent } from './tab-bill.component';

describe('TabBillComponent', () => {
  let component: TabBillComponent;
  let fixture: ComponentFixture<TabBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
