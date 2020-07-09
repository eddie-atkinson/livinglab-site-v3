import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

//OWN COMPONENTS

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

// DATA
import TEAM from 'data/Team.json';

const MeetTheTeam = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<a className={classes.anchor} id='MeetTheTeam'></a>
			<h2 id='MeetTheTeam' className={classes.title}>
				Meet The Team
			</h2>
			<GridContainer>
				<GridItem xs={12}>
					<h5 className={classes.description}>
						Leadership team The Living Lab project partners are METS Ignited, UWA System Health Lab, Core Innovation and the UWA Facilities
						Management group. The leadership team is made up of Peter Clarke, Melinda Hodkiewicz, Tamryn Barker and Paul McCann. The
						LivingLab@UWA project manager is Drew Georgiadis Current Living Lab team UWA: Add names ….. Drew, Frinze, Eddie, Aseem, James,
						Amit, Jaymin CORE: Craig Hook (Protective Innovations) Living Lab Alumni Add names and where they are working now. UWA: Carlin
						(Rio Tinto), Fraser (CORE Innovation), Toby Griffiths CORE: Aaron Schier, BHP: Sharon Wong
					</h5>
				</GridItem>
				<GridItem xs={12}>
					<GridContainer>
						{TEAM.map(
							({
								firstName,
								lastName,
								bio = 'Insert Bio',
								picture = `/img/team/${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg`,
							}) => (
								<GridItem xs={12} md={12}>
									<GridContainer>
										<GridItem xs={12} md={2}>
											<div className={classes.imgList} style={{ backgroundImage: `url(${picture})` }}></div>
										</GridItem>
										<GridItem xs={12} md={10}>
											<h5 className={classes.description} dangerouslySetInnerHTML={{ __html: bio }}></h5>
										</GridItem>
									</GridContainer>
								</GridItem>
							)
						)}
					</GridContainer>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default MeetTheTeam;
