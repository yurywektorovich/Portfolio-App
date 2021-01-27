import React from "react";

import { Box, IconButton, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import { Header } from "./Header";

export const Home = () => {
	return (
		<Box>
			<Header />
			<Box py={40}>
				<Typography variant="h3">
					<Box letterSpacing={-1.6} fontWeight="fontWeightBold">
						Hi, I'm Yury Gorelik.
					</Box>
				</Typography>
				<Typography variant="body2">
					<Box ml={0.5} mb={3} letterSpacing={0.5}>
						@yurywektorovich
					</Box>
				</Typography>
				<Typography variant="h4">
					<Box
						ml={0.18}
						mt={1}
						mb={2}
						letterSpacing={-1.2}
						fontWeight="fontWeightMedium"
					>
						Full-Stack Web Developer
					</Box>
				</Typography>
				<IconButton href="https://github.com/yurywektorovich">
					<GitHubIcon />
				</IconButton>
				<IconButton href="https://www.linkedin.com/in/yurywektorovich/">
					<LinkedInIcon />
				</IconButton>
				<IconButton href="https://www.instagram.com/yury.gorelik/">
					<InstagramIcon />
				</IconButton>
			</Box>
		</Box>
	);
};
