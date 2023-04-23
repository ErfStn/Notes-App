import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NoteCart from "../components/card/NoteCart";

export default function Create() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/notes")
			.then(res => res.json())
			.then(data => setNotes(data));
	}, []);

	const handleDelete = async id => {
		await fetch("http://localhost:3001/notes/" + id, {
			method: "DELETE",
		});

		const newNotes = notes.filter(note => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<Container>
			<Grid container spacing={2}>
				{notes.map(note => (
					<Grid item xs={12} sm={6} md={4}>
						<NoteCart note={note} handleDelete={handleDelete} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
