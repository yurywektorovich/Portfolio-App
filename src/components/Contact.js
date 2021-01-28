import React from "react";
import axios from "axios";

import {
	Box,
	Button,
	Card,
	FormControl,
	TextField,
	Typography,
} from "@material-ui/core";

import { Header } from "./Header";

export const Contact = () => {
	const [data, setData] = React.useState({
		name: "",
		email: "",
		message: "",
		sent: false,
		buttonText: "Submit",
		err: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();

		setData({
			...data,
			buttonText: "Sending...",
		});

		axios
			.post(
				"https://3zktq2r4b2.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
				data
			)
			.then((res) => {
				if (res.status !== 200) {
					setData({
						...data,
						buttonText: "Failed to send",
						sent: false,
						err: "fail",
					});
					setTimeout(() => {
						resetForm();
					}, 1000);
				} else {
					setData({
						...data,
						sent: true,
						buttonText: "Sent",
						err: "success",
					});
					setTimeout(() => {
						resetForm();
					}, 1000);
				}
			})
			.catch((err) => {
				console.log(err.response.status);
				setData({
					...data,
					buttonText: "Failed to send",
					err: "fail",
				});
			});
	};

	const resetForm = () => {
		setData({
			name: "",
			email: "",
			message: "",
			sent: false,
			buttonText: "Submit",
			err: "",
		});
	};

	return (
		<Box>
			<Header />
			<Box my={25}>
				<Card style={{ padding: 8 }}>
					<Typography variant="h4">
						<Box fontWeight="fontWeightBold">
							Have a question or want to work together?
						</Box>
					</Typography>
					<FormControl fullWidth={true}>
						<TextField
							type="text"
							label="Your Name"
							id="name"
							name="name"
							required
							value={data.name}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl fullWidth={true}>
						<TextField
							type="email"
							label="Your Email"
							id="email"
							name="email"
							required
							value={data.email}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl fullWidth={true}>
						<TextField
							type="text"
							label="Message"
							id="message"
							name="message"
							multiline
							rows={10}
							required
							value={data.message}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl fullWidth={true}>
						<Box align="center" mt={1}>
							<Button
								size="large"
								variant="outlined"
								color="primary"
								onClick={formSubmit}
							>
								{data.buttonText}
							</Button>
						</Box>
					</FormControl>
				</Card>
			</Box>
		</Box>
	);
};
