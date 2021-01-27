import React from "react";

import { Box, Button, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

import { Header } from "./Header";

export const Projects = () => {
	return (
		<Box>
			<Header />
			<Box my={40}>
				<Box ml={0.9} mb={1.5}>
					<Typography variant="h3">
						<Box fontWeight="fontWeightBold" letterSpacing={-1.6}>
							MERN Todo App
						</Box>
					</Typography>
				</Box>
				<Button
					size="large"
					href="https://github.com/yurywektorovich/MERN-Todo-App"
				>
					<GitHubIcon color="action" style={{ marginRight: "8" }} />
					GitHub repo
				</Button>
				<Button size="large" href="https://merntodoproject.herokuapp.com/todos">
					<LanguageIcon color="action" style={{ marginRight: "8" }} />
					Live demo
				</Button>
			</Box>
		</Box>
	);
};
