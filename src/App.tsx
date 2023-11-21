import "./index.scss";
import { PageDestinations } from "./pages/PageDestination";
import { PagePlanner } from "./pages/PagePlanner";
import { PageTeam } from "./pages/PageTeam";
import { PageWelcome } from "./pages/PageWelcome";

function App() {
	return (
		<>
			<h1 className="text-2xl mb-3">Travel Agency</h1>
			<PageWelcome />
			<PageTeam />
			<PageDestinations />
			<PagePlanner />
		</>
	);
}

export default App;
