import React from 'react';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Footer = () => {
	const { title } = useSiteMetadata();
	const date = new Date().getFullYear();

	return (
		<footer>
			<hr />
			<p>
				Copyright {date} - {title}
			</p>
		</footer>
	);
};

export default Footer;
