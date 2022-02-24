import React, { useCallback, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const Music = ({ loadTeamData, team, match }) => {
	useEffect(() => {
		loadTeamData(match.params.id);
	}, [match.params.id]);

	return (
		<Fragment>
			<Header />
			<div className="music">
				<audio src=".../../sounds/glebov.mp3" type="audio/mp3" controls="controls"></audio>
			</div>

			<Footer />
		</Fragment>
	);
};

Music.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Music.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Music;
