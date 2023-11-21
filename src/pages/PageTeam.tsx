import { useParams } from "react-router-dom";
import { Employee } from "../components/Employee";
import employees from "../data/employees.json";

export const PageTeam = () => {
	const { id } = useParams();
	console.log("id", id);
	return (
		<>
			{employees.map(employee => {
				return (
					<Employee employee={employee} key={employee.employeeID} />
				);
			})}
		</>
	);
};
