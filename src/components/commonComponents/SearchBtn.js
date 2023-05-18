/** @format */

import React from 'react';
import { Input } from 'antd';

// type Props = {
// 	handleSearch: MouseEventHandler;
// };

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
