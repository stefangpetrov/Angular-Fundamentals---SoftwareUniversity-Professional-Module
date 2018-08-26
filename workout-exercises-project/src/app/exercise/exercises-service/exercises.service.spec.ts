import { TestBed, inject } from '@angular/core/testing';

import { ExercisesService } from './exercises.service';

describe('ExercisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExercisesService]
    });
  });

  it('should be created', inject([ExercisesService], (service: ExercisesService) => {
    expect(service).toBeTruthy();
  }));
});
