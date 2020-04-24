import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Header = () => {
	const { title, description } = useSiteMetadata();

	return (
		<header>
			<h1>
				<Link to={`/`}>{title}</Link>
			</h1>
			<p>
				<em>{description}</em>
			</p>
			<nav>
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
			</nav>
		</header>
	);
};

export default Header;
