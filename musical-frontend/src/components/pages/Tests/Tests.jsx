import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Quiz from 'react-quiz-component';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const Tests = ({ loadTeamData, team, match }) => {
	const quiz_one = {
		quizTitle: 'Тест 1',
		nrOfQuestions: '10',
		questions: [
			{
				question: 'В группу деревянных духовых инструментов симфонического оркестра входят:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['валторна', 'флейта', 'труба'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Прелюдии и фуги в «Хорошо темперированном клавире» И. С. Баха расположены:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['по тонам', 'по хроматизму', 'по тональностям квинтового круга'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Родоначальник классической симфонии:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Г. Ф. Гендель', 'И. С. Бах', 'Й. Гайдн'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Рондо «в турецком стиле» В. Моцарта — это финал',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['симфонии соль минор', 'сонаты Ля мажор №11', 'симфонии «Юпитер»'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Сочинение В. Моцарта, написанное на традиционный латинский текст и предназначенное для заупокойной службы',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Месса', 'Пассионы', 'Реквием'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Впервые в области симфонической музыки Л. Бетховен использовал хор и певцов-солистов в финале симфонии',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['№3', '№9', '№7'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Франц Шуберт — представитель музыкального направления',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['классицизм', 'романтизм', 'импрессионизм'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Какие из ниже перечисленных танцев являются польскими?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['вальс', 'полонез', 'лендлер'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Симфоническая фантазия М. Глинки «Камаринская» написана',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['в сонатной форме', 'в сложной 3-х частной форм', 'в форме двойных вариаций'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Автор романсов «Мне грустно», «Мне минуло шестнадцать лет», «Старый капрал»',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['А. Гурилёв', 'А. Даргомыжский', 'С. Рахманинов'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
		],
	};

	const quiz_two = {
		quizTitle: 'Тест 2',
		nrOfQuestions: '10',
		questions: [
			{
				question: 'В группу деревянных духовых инструментов симфонического оркестра входят:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['валторна', 'флейта', 'труба'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Прелюдии и фуги в «Хорошо темперированном клавире» И. С. Баха расположены:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['по тонам', 'по хроматизму', 'по тональностям квинтового круга'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Родоначальник классической симфонии:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Г. Ф. Гендель', 'И. С. Бах', 'Й. Гайдн'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Рондо «в турецком стиле» В. Моцарта — это финал',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['симфонии соль минор', 'сонаты Ля мажор №11', 'симфонии «Юпитер»'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Сочинение В. Моцарта, написанное на традиционный латинский текст и предназначенное для заупокойной службы',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Месса', 'Пассионы', 'Реквием'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Впервые в области симфонической музыки Л. Бетховен использовал хор и певцов-солистов в финале симфонии',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['№3', '№9', '№7'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Франц Шуберт — представитель музыкального направления',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['классицизм', 'романтизм', 'импрессионизм'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Какие из ниже перечисленных танцев являются польскими?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['вальс', 'полонез', 'лендлер'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Симфоническая фантазия М. Глинки «Камаринская» написана',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['в сонатной форме', 'в сложной 3-х частной форм', 'в форме двойных вариаций'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Автор романсов «Мне грустно», «Мне минуло шестнадцать лет», «Старый капрал»',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['А. Гурилёв', 'А. Даргомыжский', 'С. Рахманинов'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
		],
	};

	const quiz_three = {
		quizTitle: 'Тест 3',
		nrOfQuestions: '10',
		questions: [
			{
				question: 'В группу деревянных духовых инструментов симфонического оркестра входят:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['валторна', 'флейта', 'труба'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Прелюдии и фуги в «Хорошо темперированном клавире» И. С. Баха расположены:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['по тонам', 'по хроматизму', 'по тональностям квинтового круга'],
				correctAnswer: '1',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Родоначальник классической симфонии:',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Г. Ф. Гендель', 'И. С. Бах', 'Й. Гайдн'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Рондо «в турецком стиле» В. Моцарта — это финал',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['симфонии соль минор', 'сонаты Ля мажор №11', 'симфонии «Юпитер»'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Сочинение В. Моцарта, написанное на традиционный латинский текст и предназначенное для заупокойной службы',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['Месса', 'Пассионы', 'Реквием'],
				correctAnswer: '3',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question:
					'Впервые в области симфонической музыки Л. Бетховен использовал хор и певцов-солистов в финале симфонии',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['№3', '№9', '№7'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Франц Шуберт — представитель музыкального направления',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['классицизм', 'романтизм', 'импрессионизм'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Какие из ниже перечисленных танцев являются польскими?',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['вальс', 'полонез', 'лендлер'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Симфоническая фантазия М. Глинки «Камаринская» написана',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['в сонатной форме', 'в сложной 3-х частной форм', 'в форме двойных вариаций'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: 'Автор романсов «Мне грустно», «Мне минуло шестнадцать лет», «Старый капрал»',
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['А. Гурилёв', 'А. Даргомыжский', 'С. Рахманинов'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
		],
	};

	const renderCustomResultPageOne = (obj) => {
		console.log(obj);
		return (
			<div>
				<p>Тест 1 завершен</p>
				<p>
					Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
				</p>
			</div>
		);
	};

	const renderCustomResultPageTwo = (obj) => {
		console.log(obj);
		return (
			<div>
				<p>Тест 2 завершен</p>
				<p>
					Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
				</p>
			</div>
		);
	};

	const renderCustomResultPageThree = (obj) => {
		console.log(obj);
		return (
			<div>
				<p>Тест 3 завершен</p>
				<p>
					Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
				</p>
			</div>
		);
	};

	const btn = document.querySelector('.startQuizBtn');
	console.log('btn: ', btn);

	return (
		<Fragment>
			<Header />
			<div className="test">
				<Quiz
					quiz={quiz_one}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageOne}
				/>
				<Quiz
					quiz={quiz_two}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageTwo}
				/>
				<Quiz
					quiz={quiz_three}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageThree}
				/>
			</div>

			<Footer />
		</Fragment>
	);
};

Tests.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Tests.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Tests;
