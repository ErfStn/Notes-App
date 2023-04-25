import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyle = makeStyles(theme => {
	return {
		page: {
			background: "#f9f9f9",
			width: "100%",
			height: "100vh",
			marginTop: "1rem",
		},
		root: {
			display: "flex",
		},
		toolbar: theme.mixins.toolbar,
	};
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

export default function Layout({ children, props }) {
	const location = useLocation();
	const history = useHistory();
	const classes = useStyle();

	return (
		<div className={classes.root}>
			{/* app bar */}
			<AppBar
				elevation={0}
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, mb: 8 }}
			>
				<Toolbar>
					<Typography
						sx={{
							flexGrow: 1,
						}}
					>
						Today is the {format(new Date(), "do MMMM Y")}
					</Typography>
					<Typography>Login</Typography>
					<Avatar src="./reactLogo.png" sx={{ ml: 2 }} />
				</Toolbar>
			</AppBar>
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
				<Typography variant="h5" sx={{ ml: 2, mt: 2 }}>
					Midoria
				</Typography>
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
			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	);
}
