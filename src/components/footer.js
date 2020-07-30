import React from 'react';
import styled from '@emotion/styled';

import useSiteMetadata from '../hooks/use-sitemetadata';

const Container = styled.footer`
	border-top: 1px solid #e8e8e8;
	margin-top: auto;
`;

const Copyright = styled.p`
	margin: 22px auto;
	max-width: 800px;
`;

const Footer = () => {
	const { title } = useSiteMetadata();
	const date = new Date().getFullYear();

	return (
		<Container>
			<Copyright>
				Copyright {date} - {title}
			</Copyright>
		</Container>
	);
};

export default Footer;
