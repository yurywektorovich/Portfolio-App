import React from "react";

import { Box, Button, Typography } from "@material-ui/core";

import { Header } from "./Header";

export const About = () => {
	return (
		<Box>
			<Header />
			<Box my={40}>
				<Typography variant="h3">
					<Box ml={1} mb={1} letterSpacing={-1.6} fontWeight="fontWeightBold">
						SKILLS
					</Box>
				</Typography>
				<Button size="large">
					<Box color="#f85421" fontSize={18} fontWeight="fontWeightBold">
						HTML
					</Box>
				</Button>
				<Button size="large">
					<Box color="#33a8dd" fontSize={18} fontWeight="fontWeightBold">
						CSS
					</Box>
				</Button>
				<Button size="large">
					<Box color="#fed73c" fontSize={18} fontWeight="fontWeightBold">
						JavaScript
					</Box>
				</Button>
				<Button size="large">
					<Box color="#49ae3e" fontSize={18} fontWeight="fontWeightBold">
						MongoDB
					</Box>
				</Button>
				<Button color="default" size="large">
					<Box fontSize={18} fontWeight="fontWeightBold">
						Express
					</Box>
				</Button>
				<Button size="large">
					<Box color="#62dafc" fontSize={18} fontWeight="fontWeightBold">
						React
					</Box>
					<Box fontSize={18} fontWeight="fontWeightBold">
						/
					</Box>
					<Box color="#7649bd" fontSize={18} fontWeight="fontWeightBold">
						Redux
					</Box>
				</Button>
				<Button size="large">
					<Box color="#84ce23" fontSize={18} fontWeight="fontWeightBold">
						NodeJS
					</Box>
				</Button>
				<Button size="large">
					<Box color="#f05034" fontSize={18} fontWeight="fontWeightBold">
						Git
					</Box>
				</Button>
				<Button color="primary" size="large">
					<Box fontSize={18} fontWeight="fontWeightBold">
						Linux
					</Box>
				</Button>
				<Button size="large">
					<Box color="#50aef8" fontSize={18} fontWeight="fontWeightBold">
						Material UI
					</Box>
				</Button>
				<Button size="large">
					<Box color="#7140b3" fontSize={18} fontWeight="fontWeightBold">
						Heroku
					</Box>
				</Button>
			</Box>
		</Box>
	);
};
