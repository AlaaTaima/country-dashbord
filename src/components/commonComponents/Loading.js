/** @format */

import React from 'react';
import { Spin } from 'antd';

export default function Loading() {
	return (
		<div className='spinner-container'>
			<Spin size='large' />
		</div>
	);
}
