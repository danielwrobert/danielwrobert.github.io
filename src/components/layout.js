import React from 'react';
import Header from './header';
import Footer from './footer';

import '../styles/normalize.css';
import '../styles/global.css';

export default ({ children }) => (
	<>
		<Header />
		<div className="content">{children}</div>
		<Footer />
	</>
);
