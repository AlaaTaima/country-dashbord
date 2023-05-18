/** @format */

import React, { useState, useEffect }  from 'react';
import { message, Empty, Card, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { query } from '../../gql/allListQuery';
import { Error, Loading, SearchBtn, ButtonCom } from '../commonComponents';
import './style.scss';

type Country = {
	name: string;
	capital: string;
	currency: string;
	code: string;
	languages: {
	  name: string;
	}[];
	continent: {
	  name: string;
	};
	emoji: string;
	phone: string;
	native: string;
  }


const HomePage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [countryDetails, setCountryDetails] = useState<Country | null>(null);
	// @ts-ignore
	const [countriesList, setCountriesList] = useState<Country | []>([]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [error, setError] = useState<any>(null);
	const { Meta } = Card;

	// modal functions : open/close modal that will show additional data
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	// search function that use country name to return it's details
	const onSearch = (value) => {
		if (!value) {
			return message.error('You must enter a country name');
		}

		const requiuredCountry = countriesList?.filter((country) =>
			country.name.toLowerCase().includes(value.toLowerCase())
		);

		return setCountryDetails(requiuredCountry[0]);
	};

	// function to get list of countries
	const fetchCountries = () => {
		setLoading(true);
		fetch('https://countries.trevorblades.com/graphql', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query,
			}),
		})
			.then((res) => res.json())
			.then(({ data }) => {
				setCountriesList(data.countries);
				return setLoading(false);
			})
			.catch((err) => {
				setError(err);
				return setLoading(false);
			});
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<div className='main-container'>
			{error ? (
				<Error />
			) : loading ? (
				<Loading />
			) : (
				<>
					<h2 className='main-title'>Countries Dashboard</h2>

					<SearchBtn handleSearch={onSearch} />

					<div className='sub-container'>
						<div className='btn-container'>
							<ButtonCom
								child={<Link to='/countriesList'>Show List Of Countries</Link>}
								handleClick={undefined}
							/>
						</div>

						<div className='country-container'>
							{countryDetails ? (
								<>
									<Modal
										title='Additional Information'
										open={isModalOpen}
										onOk={handleOk}
										onCancel={handleCancel}>
										<p>
											<span className='details-title'>Continent : </span>
											{countryDetails?.continent.name}
										</p>
										<p>
											<span className='details-title'>Emoji : </span>
											{countryDetails?.emoji}
										</p>
										<p>
											<span className='details-title'>Phone : </span>
											{countryDetails?.phone}
										</p>
										<p>
											<span className='details-title'>Native : </span>
											{countryDetails?.native}
										</p>
									</Modal>
									<Card
										hoverable
										style={{
											width: 240,
										}}
										cover={
											<img
												alt='flag'
												src={`https://flagcdn.com/48x36/${countryDetails.code.toLowerCase()}.png`}
											/>
										}>
										<Meta
											title={`Name : ${countryDetails?.name}`}
											description={`Capital : ${countryDetails?.capital}`}
										/>
										<div className='country-details'>
											<p className='country-details-sub-title'>
												<span className='details-title'>Currency</span>
												<p>{countryDetails?.currency}</p>
											</p>
											<p className='country-details-sub-title'>
												<span className='details-title'>Code</span>
												<p>{countryDetails?.code}</p>
											</p>
											<p className='country-details-sub-title'>
												<span className='details-title'>Language</span>
												<p>{countryDetails?.languages[0].name}</p>
											</p>
										</div>
										<div className='country-additional-details'>
											<ButtonCom child='Show More' handleClick={showModal} />
										</div>
									</Card>
								</>
							) : (
								<Empty />
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default HomePage;
