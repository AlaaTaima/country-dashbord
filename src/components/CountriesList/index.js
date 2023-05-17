/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Empty, Space } from 'antd';
import { query } from '../../gql/allListQuery';
import { Error, Loading, SearchBtn, ButtonCom } from '../commonComponents';
import './style.scss';

function CountriesList() {
	const [countriesList, setCountriesList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [filteredCountries, setFilteredCountries] = useState([]);

	const navigate = useNavigate();

	// function to get list of countries
	const fetchCountryList = () => {
		setLoading(true);
		fetch('https://countries.trevorblades.com/graphql', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query,
			}),
		})
			.then((res) => {
				setLoading(false);
				return res.json();
			})
			.then(({ data }) => setCountriesList(data.countries))
			.catch((err) => {
				setError(err);
				return setLoading(false);
			});
	};

	// function that filter the country list based on name to show only country that match the entered name or countries that contain entered value in it's name
	const onFilter = (value) => {
		const filteredList = countriesList.filter((country) =>
			country.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredCountries(filteredList);
	};

	useEffect(() => {
		fetchCountryList();
	}, []);

	return (
		<>
			{error ? (
				<Error />
			) : (
				<div className='list-main-container'>
					<h2 className='list-main-title'>Countries List</h2>

					<div className='list-btn-container'>
						<div>
							<ButtonCom child='Go back' handleClick={() => navigate(-1)} />
						</div>

						<div className='filter-btns'>
							<SearchBtn handleSearch={onFilter} />
						</div>
					</div>

					{loading ? (
						<Loading />
					) : (
						<div className='main-list'>
							{filteredCountries?.length ? (
								filteredCountries.map((country) => (
									<div key={country.code}>
										<Space direction='vertical' size={16}>
											<Card
												title={country.name}
												style={{
													width: 300,
												}}>
												<p>
													<span className='list-details-title'>Native : </span>
													{country.native}
												</p>
												<p>
													<span className='list-details-title'>
														Currency :{' '}
													</span>
													{country.currency}
												</p>
												<p>
													<span className='list-details-title'>Code : </span>
													{country.code}
												</p>
											</Card>
										</Space>
									</div>
								))
							) : countriesList?.length ? (
								countriesList.map((country) => (
									<div key={country.code}>
										<Space direction='vertical' size={16}>
											<Card
												title={country.name}
												style={{
													width: 300,
												}}>
												<p>
													<span className='list-details-title'>Native : </span>
													{country.native}
												</p>
												<p>
													<span className='list-details-title'>
														Currency :{' '}
													</span>
													{country.currency}
												</p>
												<p>
													<span className='list-details-title'>Code : </span>
													{country.code}
												</p>
											</Card>
										</Space>
									</div>
								))
							) : (
								<Empty />
							)}
						</div>
					)}
				</div>
			)}
		</>
	);
}

export default CountriesList;
