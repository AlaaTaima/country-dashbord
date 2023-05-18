/** @format */
import React, { ReactNode } from 'react';
import { Button } from 'antd';

interface ButtonComProps {
	child: ReactNode;
	handleClick: () => void;
}

export default function ButtonCom({
	child,
	handleClick,
}: ButtonComProps): JSX.Element {
	return (
		<Button onClick={handleClick} type='primary'>
			{child}
		</Button>
	);
}
