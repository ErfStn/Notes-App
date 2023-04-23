import {
	Button,
	Container,
	Input,
	Typography,
	TextField,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// ! makeStyle hooks
// const useStyles = makeStyles({
// 	btn: {
// 		backgroundColor: "red",
// 		fontSize: 50,
// 	},
// });

export default function Notes() {
	// const classes = useStyles();
	const [title, setTitle] = useState("");
	const [detail, setDetail] = useState("");
	const [radio, setRadio] = useState("work");
	const [titleError, setTitleError] = useState(false);
	const [detailError, setDetailError] = useState(false);

	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		setTitleError(false);
		setDetailError(false);

		if (title == "") {
			setTitleError(true);
		}
		if (detail == "") {
			setDetailError(true);
		}

		if (title && detail) {
			fetch("http://localhost:3001/notes", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title, detail, radio }),
			}).then(() => history.push("/"));
		}
	};

	return (
		<Container>
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<Typography variant="h4" color="primary" marginTop={2} gutterBottom>
					Form
				</Typography>
				<TextField
					id="1"
					label="Title"
					value={title}
					fullWidth
					required
					margin="normal"
					error={titleError}
					onChange={e => {
						setTitle(e.target.value);
					}}
				/>
				<TextField
					id="2"
					label="Detail"
					value={detail}
					fullWidth
					required
					margin="normal"
					error={detailError}
					multiline
					rows={4}
					onChange={e => {
						setDetail(e.target.value);
					}}
				/>
				<FormControl fullWidth margin="normal">
					<FormLabel id="radio-group-label">Category</FormLabel>
					<RadioGroup
						aria-labelledby="radio-group-label"
						value={radio}
						onChange={e => {
							setRadio(e.target.value);
						}}
					>
						<FormControlLabel label="Work" value="work" control={<Radio />} />
						<FormControlLabel label="Todo" value="todo" control={<Radio />} />
						<FormControlLabel label="Money" value="money" control={<Radio />} />
						<FormControlLabel
							label="Urgent"
							value="urgent"
							control={<Radio />}
						/>
					</RadioGroup>
				</FormControl>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					endIcon={<KeyboardArrowRightIcon />}
				>
					Submit
				</Button>
			</form>
		</Container>
	);
}
