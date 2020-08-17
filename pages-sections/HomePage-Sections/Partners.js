import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/icons components

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

//Partner Logos
import LOGOS from 'data/Partner.js';

const HomepagePartners = () => {
	const classes = useStyles();

	return (
		<div className={classes.section} className={classes.partnersSection}>
			<h2 className={classNames(classes.title)}>Our Partners</h2>
			<GridContainer justify='center' alignItems='center'>
				{LOGOS.map(({ name, href, logo }, index) => (
					<GridItem key={index} xs={6} sm={6} md={3} style={{ textAlign: 'center' }}>
						<a href={href} rel='noopener'>
							<img src={logo} alt={name} className={classes.partnersLogo} />
						</a>
					</GridItem>
				))}
			</GridContainer>
		</div>
	);
};

export default HomepagePartners;
