import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function RouterApp(){
	return (
		<Router>
			<Routes>
				<Route  path="/" element={<h1>Home</h1>}/>
				<Route/>
			</Routes>
		</Router>
	);
}

