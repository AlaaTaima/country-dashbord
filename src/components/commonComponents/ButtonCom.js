/** @format */

import Reactfrom 'react';

import { Button } from 'antd';

// type Props = {
// 	handleClick: MouseEventHandler;
// 	child: any;
// };

export default function ButtonCom({ child, handleClick }) {
	return (
		<Button onClick={handleClick} type='primary'>
			{child}
		</Button>
	);
}
