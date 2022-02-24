import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';
import { API_URL } from '../../../constants';

const Tasks = ({ loadTasksData, match, tasks }) => {
	useEffect(() => {
		loadTasksData(match.params.id);
	}, []);
	
	console.log('tasks: ', tasks);




	return (
		<Fragment>
			<Header />
			<div className="man">
				<img className="man__avatar" src={`${API_URL}/getImage/${tasks.data?.avatar}`} alt="" />
				<div className="man__info">
					<p className="man__fullname">{tasks.data?.name}</p>
					<p className="man__description">{tasks.data?.description}</p>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.object,
	loadTasksData: PropTypes.func,
	match: PropTypes.object,
};

Tasks.defaultProps = {
	tasks: {},
	loadTasksData: () => {},
	match: {},
};

export default Tasks;
