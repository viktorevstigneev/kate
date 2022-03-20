import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Quiz from 'react-quiz-component';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const Tests = ({ loadTeamData, team, match }) => {
	const [user, setUser] = useState();
	console.log('user: ', user);

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const quiz_one = {
		quizTitle: 'Тест на знание инструментов',
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
		quizTitle: 'Тест на знание авторов',
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
		quizTitle: 'Тест угадай мелодию',
		nrOfQuestions: '10',
		questions: [
			{
				question: `<audio src=${`${API_URL}/getAudio/glebov.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['валторна', 'флейта', 'труба'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
			{
				question: `<audio src=${`${API_URL}/getAudio/glebov_2.mp3`} type="audio/mp3" controls="controls">`,
				questionType: 'text',
				answerSelectionType: 'single',
				answers: ['глебов', 'дядуля', 'моцарт'],
				correctAnswer: '2',
				messageForCorrectAnswer: ' Правильно',
				messageForIncorrectAnswer: 'Неправильно',
				point: '20',
			},
		],
	};

	const renderCustomResultPageOne = (obj) => (
		<div>
			<p>Тест 1 завершен</p>
			<p>
				Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
			</p>
			<button
				className="admin__button"
				onClick={() => {
					location.reload();
				}}
			>
				Начать заново
			</button>
		</div>
	);

	const renderCustomResultPageTwo = (obj) => (
		<div>
			<p>Тест 2 завершен</p>
			<p>
				Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
			</p>
			<button
				className="admin__button"
				onClick={() => {
					location.reload();
				}}
			>
				Начать заново
			</button>
		</div>
	);

	const renderCustomResultPageThree = (obj) => (
		<div>
			<p>Тест 3 завершен</p>
			<p>
				Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions} праивильно
			</p>
			<button
				className="admin__button"
				onClick={() => {
					location.reload();
				}}
			>
				Начать заново
			</button>
		</div>
	);

	const setQuizResultFirst = async (obj) => {
		const body = {
			test_one: obj.numberOfCorrectAnswers >= user.test_one ? obj.numberOfCorrectAnswers : user.test_one,
			id: user._id,
		};

		await axios.patch(`${API_URL}/profile`, body);
	};

	const setQuizResultSecond = async (obj) => {
		const body = {
			test_two: obj.numberOfCorrectAnswers >= user.test_two ? obj.numberOfCorrectAnswers : user.test_two,
			id: user._id,
		};


		await axios.patch(`${API_URL}/profile`, body);
	};

	const setQuizResultThird = async (obj) => {
		const body = {
			test_three: obj.numberOfCorrectAnswers >= user.test_three ? obj.numberOfCorrectAnswers : user.test_three,
			id: user._id,
		};

		await axios.patch(`${API_URL}/profile`, body);
	};

	return (
		<Fragment>
			<Header />
			<div className="test">
				<h1 className="test__title">На этой странице можно проверить свои знания о Белоруских композиторах</h1>
				<Quiz
					quiz={quiz_one}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageOne}
					onComplete={setQuizResultFirst}
				/>
				<Quiz
					quiz={quiz_two}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageTwo}
					onComplete={setQuizResultSecond}
				/>
				<Quiz
					quiz={quiz_three}
					continueTillCorrect={false}
					shuffle={true}
					showInstantFeedback={false}
					showDefaultResult={false}
					customResultPage={renderCustomResultPageThree}
					onComplete={setQuizResultThird}
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
