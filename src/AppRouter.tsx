import { Routes, Route, Navigate } from "react-router-dom";
import { PageDestinations } from "./pages/PageDestination";
import { PagePlanner } from "./pages/PagePlanner";
import { PageTeam } from "./pages/PageTeam";
import { PageWelcome } from "./pages/PageWelcome";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/welcome" element={<PageWelcome />} />
			<Route path="/team" element={<PageTeam />} />
			<Route path="/planner" element={<PagePlanner />} />
			<Route path="/destination" element={<PageDestinations />} />
			<Route path="/" element={<Navigate to="/welcome" />} />
		</Routes>
	);
};
