import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<>
			<ul className="flex gap-3 mb-4 bg-blue-400 py-2 px-4 rounded">
				<li>
					<NavLink to="/welcome">Welcome</NavLink>
				</li>
				<li>
					<NavLink to="/team">Team</NavLink>
				</li>
				<li>
					<NavLink to="/destination">Destination</NavLink>
				</li>
				<li>
					<NavLink to="/planner">Planner</NavLink>
				</li>
			</ul>
		</>
	);
};
