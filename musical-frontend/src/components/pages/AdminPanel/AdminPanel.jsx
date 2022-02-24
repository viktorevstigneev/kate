import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const AdminPanel = ({ loadTeamData, team, match }) => {
	useEffect(() => {
		loadTeamData(match.params.id);
	}, [match.params.id]);

	const [file, setFile] = useState('');

	return (
		<Fragment>
			<Header />
			<form
				className="admin__person"
				encType="multipart/form-data"
				method="POST"
				onSubmit={async (evt) => {
					evt.preventDefault();
					location.reload();
					const formData = new FormData(evt.target);

					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/team`,
						data: formData,
						withCredentials: true,
					});
					console.log('responseData: ', responseData);
				}}
			>
				<div className="admin__block">
					<label className="admin__label" htmlFor="avatar">
						<img
							className="admin__avatar"
							src={file ? URL.createObjectURL(file) : `${API_URL}/getImage/default.png`}
							alt="person picture"
						/>
						<p className="admin__icon">+</p>
					</label>
					<input
						className="admin__input"
						id="avatar"
						name="avatar"
						type="file"
						onChange={(evt) => setFile(evt.target.files[0])}
					/>
				</div>

				<div className="admin__right">
					<input className="admin__text-input" type="text" placeholder="введите имя" name="name" />
					<textarea
						className="admin__textarea"
						id="description"
						name="description"
						type="text"
						placeholder="введите биографию композитора"
					/>
					{/* <input type="radio" name="isMostFanous" placeholder="fanickoe"/> */}
					<button className="admin__button" type="submit">
						добавить композитора
					</button>
				</div>
			</form>
			<Footer />
		</Fragment>
	);
};

AdminPanel.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

AdminPanel.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default AdminPanel;
