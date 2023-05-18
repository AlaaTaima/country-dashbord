/** @format */

import React, { MouseEventHandler } from 'react';

import { Button } from 'antd';

type Props = {
	handleClick: MouseEventHandler;
	child: any;
};

export default function ButtonCom({ child, handleClick }: Props) {
	return (
		<Button onClick={handleClick} type='primary'>
			{child}
		</Button>
	);
}
