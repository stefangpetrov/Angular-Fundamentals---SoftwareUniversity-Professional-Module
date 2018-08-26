import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExercisesCatalogComponent } from './my-exercises-catalog.component';

describe('MyExercisesCatalogComponent', () => {
  let component: MyExercisesCatalogComponent;
  let fixture: ComponentFixture<MyExercisesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExercisesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExercisesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
