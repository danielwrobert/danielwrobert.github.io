import React from 'react';
import styled from '@emotion/styled';

import useSiteMetadata from '../hooks/use-sitemetadata';

const Container = styled.footer`
	margin-top: auto;
	text-align: center;
`;

const Footer = () => {
	const { title } = useSiteMetadata();
	const date = new Date().getFullYear();

	return (
		<Container>
			<hr />
			<p>
				Copyright {date} - {title}
			</p>
		</Container>
	);
};

export default Footer;
