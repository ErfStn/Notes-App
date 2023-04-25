import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Box,
	CssBaseline,
	Drawer,
	IconButton,
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
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const useStyle = makeStyles(theme => {
	return {
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

function Layout({ children, window }) {
	const location = useLocation();
	const history = useHistory();
	const classes = useStyle();

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleMenu = path => {
		history.push(path);
		setMobileOpen(!mobileOpen);
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<div>
			<Typography variant="h5" sx={{ ml: 2, mt: 2 }}>
				Midoria
			</Typography>
			{/* List item */}
			<List>
				{menuItems.map(item => (
					<ListItem
						key={item.text}
						button
						onClick={() => handleMenu(item.path)}
						sx={
							location.pathname === item.path ? { background: "#f4f4f4" } : null
						}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	// 	variant="permanent"
	// anchor="left"
	// sx={{
	// 	width: drawerWidth,
	// 	flexShrink: 0,
	// 	"& .MuiDrawer-paper": {
	// 		width: drawerWidth,
	// 		boxSizing: "border-box",
	// 	},
	// }}

	return (
		<Box sx={{ display: "flex" }}>
			{/* app bar */}
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
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
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					background: "#f9f9f9",
					height: "100vh",
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<div className={classes.toolbar}></div>
				{children}
			</Box>
		</Box>
	);
}

Layout.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Layout;
