import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import useSiteMetadata from '../hooks/use-sitemetadata';

const Container = styled.header`
	border-bottom: 1px solid #e8e8e8;
	width: 100%;
`;

const Content = styled.div`
	align-items: center;
	display: flex;
	/* flex-direction: column; */
	flex-direction: row;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 800px;
`;

const H1 = styled.h1`
	flex: 1 1 auto;
`;

const Nav = styled.nav`
	flex: 0 1 25%;

	> ul {
		align-items: center;
		display: flex;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;

		li {
			margin: 0 10px;
		}
	}
`;

const Header = () => {
	const { title, description } = useSiteMetadata();

	return (
		<Container>
			<Content>
				<H1>
					<Link to={`/`}>{title}</Link>
				</H1>
				<Nav>
					<ul>
						<li>
							<Link to={'/about'} activeClassName="active">
								About
							</Link>
						</li>
						<li>
							<Link to={'/archives'} activeClassName="active">
								Archives
							</Link>
						</li>
						<li>
							<Link to={'/slides'} activeClassName="active">
								Slides
							</Link>
						</li>
					</ul>
				</Nav>
			</Content>
		</Container>
	);
};

export default Header;
