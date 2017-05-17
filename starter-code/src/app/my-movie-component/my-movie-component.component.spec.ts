import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMovieComponent } from './my-movie-component.component';

describe('MyMovieComponentComponent', () => {
  let component: MyMovieComponent;
  let fixture: ComponentFixture<MyMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
