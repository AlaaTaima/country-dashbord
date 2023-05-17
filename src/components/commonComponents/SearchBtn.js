/** @format */

import React from 'react';
import { Input } from 'antd';

export default function SearchBtn({ handleSearch }) {
	const { Search } = Input;

	return (
		<Search
			placeholder='search term'
			allowClear
			enterButton='filter by name'
			size='large'
			onSearch={handleSearch}
		/>
	);
}
