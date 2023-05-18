/** @format */

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { CountriesList } from '../components/CountriesList';

jest.mock('axios');

const dummydata = [
	{
		name: 'Andorra',
		code: 'AD',
		native: 'Andorra',
		capital: 'Andorra la Vella',
		currency: 'EUR',
		phone: '376',
		emoji: '🇦🇩',
		languages: [{ name: 'Catalan' }],
		continent: { name: 'Europe' },
	},
	{
		name: 'United Arab Emirates',
		code: 'AE',
		native: 'دولة الإمارات العربية المتحدة',
		capital: 'Abu Dhabi',
		currency: 'AED',
		phone: '971',
		emoji: '🇦🇪',
		languages: [{ name: 'Arabic' }],
		continent: { name: 'Asia' },
	},
];

test('countries list', async () => {
	axios.get.mockResolvedValue({ data: dummydata });
	render(<CountriesList />);

	const countryList = await waitFor(() => screen.findAllByTestId('country'));

	expect(countryList).toHaveLength(2);
});
