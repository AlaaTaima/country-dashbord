/** @format */

import React from 'react';

import { Button } from 'antd';

export default function ButtonCom({child, handleClick}) {
	return <Button onClick={handleClick} type='primary'>{child}</Button>;
}
