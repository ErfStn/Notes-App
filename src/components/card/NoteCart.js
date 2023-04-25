import { DeleteOutlined } from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from "@mui/material";

import React from "react";

export default function NoteCart({ note, handleDelete }) {
	const statusStyle = status => {
		switch (status) {
			case "work":
				return "#D66460";
			case "todo":
				return "#6685F0";
			case "money":
				return "#F0E666";
			default:
				return "#60D660";
		}
	};
	return (
		<div>
			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ background: statusStyle(note.category) }}>
							{note.category[0].toUpperCase()}
						</Avatar>
					}
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
