import { Container, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NoteCart from "../components/card/NoteCart";
import Masonry from "react-masonry-css";

export default function Create() {
	const [notes, setNotes] = useState([]);

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1,
	};

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
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{notes.map(note => (
				<div xs={12} sm={6} md={4} key={note.id}>
					<NoteCart note={note} handleDelete={handleDelete} />
				</div>
			))}
		</Masonry>
	);
}
