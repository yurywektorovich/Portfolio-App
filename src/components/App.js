import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
	ThemeProvider,
	responsiveFontSizes,
	createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline, Container, IconButton } from "@material-ui/core";
import { cyan, red } from "@material-ui/core/colors";

import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import { Home } from "./Home";
import { Projects } from "./Projects";
import { About } from "./About";

export const light = {
	overrides: {
		MuiIconButton: { root: { color: "#757575" } },
	},
	palette: {
		type: "light",
	},
	typography: {
		fontFamily: ["Cantarell", "sans-serif"].join(","),
	},
};

export const dark = {
	overrides: {
		MuiIconButton: { root: { color: "#96aacb" } },
		MuiInput: {
			root: {
				"& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button": {
					display: "none",
				},
			},
			underline: { "&:before": { borderBottomColor: "#3a495e" } },
		},
		MuiInputBase: { root: { "& fieldset": { borderColor: "#3a495e" } } },
	},
	palette: {
		type: "dark",
		background: { default: "#0f1724", paper: "#1d2637" },
		text: {
			primary: "#96aacb",
			secondary: "#96aacb",
			disabled: "#96aacb",
			hint: "#96aacb",
		},
		action: { active: "#96aacb", hover: "#233043", selected: "#233043" },
		divider: "#96aacb",
		primary: { light: red[500], main: cyan[500] },
		secondary: { main: red[500] },
	},
	typography: {
		fontFamily: ["Cantarell", "sans-serif"].join(","),
	},
};

const App = () => {
	const [theme, setTheme] = React.useState(true);
	const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
	let appliedTheme = createMuiTheme(theme ? light : dark);
	appliedTheme = responsiveFontSizes(appliedTheme);

	return (
		<Router>
			<ThemeProvider theme={appliedTheme}>
				<CssBaseline />
				<Container>
					<IconButton
						edge="end"
						aria-label="mode"
						onClick={() => setTheme(!theme)}
						style={{ position: "absolute", bottom: 0, right: 15 }}
					>
						{icon}
					</IconButton>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />
					</Switch>
				</Container>
			</ThemeProvider>
		</Router>
	);
};

export default App;
