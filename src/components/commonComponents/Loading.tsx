/** @format */

import React, { FC } from 'react';
import { Spin } from 'antd';

const Loading: FC = () => {
	return (
		<div className='spinner-container'>
			<Spin size='large' />
		</div>
	);
};

export default Loading;
