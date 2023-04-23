import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6d28d9",
		},
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Notes />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
