import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import answersJson from '../assets/json/answers.json';
import questionsJson from '../assets/json/questions.json';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultsComponent } from './components/results/results.component';
import { ANSWERS } from './services/answers.injection-token';
import { QuestionService } from './services/question.service';
import { QUESTIONS } from './services/questions.injection-token';
import { ResultService } from './services/result.service';
import { QuizResultItemComponent } from './components/quiz-result-item/quiz-result-item.component';

@NgModule({
	declarations: [
		AppComponent,
		QuestionComponent,
		ResultsComponent,
		IntroductionComponent,
		HeaderComponent,
  QuizResultItemComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatRadioModule,
		MatButtonModule,
		MatStepperModule,
		MatProgressBarModule,
	],
	providers: [
		QuestionService,
		ResultService,
		{ provide: ANSWERS, useValue: answersJson.answers },
		{ provide: QUESTIONS, useValue: questionsJson.questions },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
