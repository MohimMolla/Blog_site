import React from 'react';

import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';


const Main = () => {
	return (
		<div>
			<Topbar></Topbar>
			<Outlet></Outlet>
			
		</div>
	);
};

export default Main;