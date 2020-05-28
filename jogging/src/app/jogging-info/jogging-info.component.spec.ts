import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggingInfoComponent } from './jogging-info.component';

describe('JoggingInfoComponent', () => {
  let component: JoggingInfoComponent;
  let fixture: ComponentFixture<JoggingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoggingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
