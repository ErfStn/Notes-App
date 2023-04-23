import { DeleteOutlined } from "@mui/icons-material";
import {
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";

export default function NoteCart({ note, handleDelete }) {
	return (
		<div>
			<Card>
				<CardHeader
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2">{note.detail}</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
