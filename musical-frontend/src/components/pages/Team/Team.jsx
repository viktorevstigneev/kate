import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const Team = ({ loadTeamData, team, match }) => {
	useEffect(() => {
		loadTeamData(match.params.id);
	}, [match.params.id]);

	console.log('team: ', team);
	const [searchValue, setSearchValue] = useState('');

	const favouritesPeoples = team.data && team.data.filter((item, index) => index % 2 === 0 && index < 20);
	console.log('favouritesPeoples: ', favouritesPeoples);

	const handleSearhChange = (evt) => {
		setSearchValue(evt.target.value);
	};

	return (
		<Fragment>
			<Header />
			<div className="container">
				<h1 className="info__title">Композиторы Беларуси</h1>
				<div className="info__famous">
					{favouritesPeoples &&
						favouritesPeoples.map((person) => (
							<Link to={`/tasks/${person._id}`} key={person._id}>
								<div className="info__card">
									<img className="card__img" src={`${API_URL}/getImage/${person.avatar}`} />
									<p className="card__name">{person.name}</p>
								</div>
							</Link>
						))}
				</div>
				<input className="info__search" type="text" placeholder="Поиск по персонам" onChange={handleSearhChange} />
				<div className="info__people">
					{/* {team.data &&
						team.data.map((person) => (
							<Link to={`/tasks/${person._id}`} key={person.id}>
								<div className="person">
									<img className="person__img" src={`${API_URL}/getImage/${person.avatar}`} />
									<p className="person__name">{person.name}</p>
								</div>
							</Link>
						))} */}
					{team.data &&
						team.data
							.filter((item) => searchValue == '' || _.includes(item.name, searchValue))
							.map((person) => (
								<Link to={`/tasks/${person._id}`} key={person.id}>
									<div className="person">
										<img className="person__img" src={`${API_URL}/getImage/${person.avatar}`} />
										<p className="person__name">{person.name}</p>
									</div>
								</Link>
							))}
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Team.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Team.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Team;
