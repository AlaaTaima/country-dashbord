/** @format */

import React from 'react';
import { Result } from 'antd';

const Error: React.FC = () => {
	return (
		<Result
			status='500'
			title='Error, somthing went wrong try again'
			subTitle='error'
		/>
	);
};

export default Error;
