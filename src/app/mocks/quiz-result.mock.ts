import { QuestionType } from '../enums/question-type.enum';
import { QuizResult } from '../interfaces/quiz-result.interface';

export const quizResultMock: QuizResult = {
	[QuestionType.GIT]: { total: 10, answered: 10, answeredCorrectly: 8 },
	[QuestionType.JS]: { total: 10, answered: 6, answeredCorrectly: 3 },
};
