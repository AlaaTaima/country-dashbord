/** @format */

import React from 'react';
import { Result } from 'antd';
export default function Error() {
	return (
		<Result
			status='500'
			title='Error, somthing went wrong try again'
			subTitle='error'
		/>
	);
}
