/** @format */

import React from 'react';
import { Input } from 'antd';

interface Props {
	handleSearch: (value: string) => void;
}

const SearchBtn = ({ handleSearch }: Props) => {
	const { Search } = Input;

	return (
		<Search
			placeholder='search term'
			allowClear
			enterButton='filter by name'
			size='large'
			onSearch={(value: string) => handleSearch(value)}
		/>
	);
};

export default SearchBtn;
