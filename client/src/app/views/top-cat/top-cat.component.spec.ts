import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCatComponent } from './top-cat.component';

describe('TopCatComponent', () => {
  let component: TopCatComponent;
  let fixture: ComponentFixture<TopCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
