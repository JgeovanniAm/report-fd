import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadcountComponent } from './loadcount.component';

describe('LoadcountComponent', () => {
  let component: LoadcountComponent;
  let fixture: ComponentFixture<LoadcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
