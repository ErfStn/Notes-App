import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const drawerWidth = 240;

const useStyle = makeStyles({
	page: {
		background: "#f9f9f9",
		width: "100%",
		height: "100vh",
	},
	drawer: {
		width: drawerWidth,
		background: "#ccc",
	},
	root: {
		display: "flex",
	},
	active: {
		background: "#ccc",
	},
});
const menuItems = [
	{
		text: "My Notes",
		icon: <SubjectOutlined color="secondary" />,
		path: "/",
	},
	{
		text: "Create",
		icon: <AddCircleOutlineOutlined color="secondary" />,
		path: "/create",
	},
];

export default function Layout({ children }) {
	const location = useLocation();
	const history = useHistory();
	const classes = useStyle();
	return (
		<div className={classes.root}>
			{/* app bar */}
			{/* side drawer */}
			<Drawer
				variant="permanent"
				anchor="left"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
			>
				<div>
					<Typography variant="h5">Deko</Typography>
				</div>

				{/* List item */}

				<List>
					{menuItems.map(item => (
						<ListItem
							key={item.text}
							button
							onClick={() => history.push(item.path)}
							sx={
								location.pathname === item.path
									? { background: "#f4f4f4" }
									: null
							}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<div className={classes.page}>{children}</div>
		</div>
	);
}
