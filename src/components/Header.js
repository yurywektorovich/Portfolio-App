import React from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "@material-ui/core";

export const Header = () => {
	return (
		<Box mt={1}>
			<Link style={{ textDecoration: "none" }} to={"/"}>
				<Button size="large">Home</Button>
			</Link>
			<Link style={{ textDecoration: "none" }} to={"/projects"}>
				<Button size="large">Projects</Button>
			</Link>
			<Link style={{ textDecoration: "none" }} to={"/about"}>
				<Button size="large">About</Button>
			</Link>
		</Box>
	);
};
