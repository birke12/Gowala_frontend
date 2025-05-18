import { useLocation } from "react-router-dom";


import { ReactClipLoader } from "../loading/ReactLoader";
import EmployeeCard from "../employeeCard/EmployeeCard";
import { useFetchEmployees } from "../../hooks/useFetchEmployees";

const Employees = () => {
  const { employees, refetch, error, isLoading } = useFetchEmployees();
  const location = useLocation();

  const employeesToDisplay =
    location.pathname === "/" ? employees.slice(0, 4) : employees;

  if (isLoading) return <ReactClipLoader />;

  return (
    <article>
      <h1>Medarbejdere</h1>
      <div className="grid">
        {error && <h5>{error}</h5>}
        {employeesToDisplay.map((employee) => (
          <EmployeeCard
            employee={employee}
            key={employee._id}
            onContact={() => console.log("Kontakt", employee.name)}
          />
        ))}
      </div>
    </article>
  );
};

export default Employees;
