import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import useSiteMetadata from '../hooks/use-sitemetadata';

const Container = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const H1 = styled.h1`
	flex: 1 1 auto;
`;

const Description = styled.p`
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
			margin: 0 5px;
		}
	}
`;

const Header = () => {
	const { title, description } = useSiteMetadata();

	return (
		<Container>
			<H1>
				<Link to={`/`}>{title}</Link>
			</H1>
			<Description>
				<em>{description}</em>
			</Description>
			<Nav>
				<ul>
					<li>
						<Link to={'/'} activeClassName="active">
							Home
						</Link>
					</li>
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
		</Container>
	);
};

export default Header;
