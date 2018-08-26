import { ExerciseModule } from './exercise.module';

describe('ExerciseModule', () => {
  let exerciseModule: ExerciseModule;

  beforeEach(() => {
    exerciseModule = new ExerciseModule();
  });

  it('should create an instance', () => {
    expect(exerciseModule).toBeTruthy();
  });
});
