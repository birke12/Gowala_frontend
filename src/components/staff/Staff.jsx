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
      <div className="staffTextContainer">
        <h1 className="staffTitle">Vores Hold</h1>
        <h2 className="staffSubtitle">2000+ ansatte siden 1975</h2>
        <p className="staffText">
          De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og
          ekspertise sikrer sunde dyr og produkter af højeste kvalitet.
        </p>
      </div>
      <div className="grid">
        {error && <h5>{error}</h5>}
        {employeesToDisplay.map((employee, index) => (
          <EmployeeCard
            employee={employee}
            key={employee._id}
            onContact={() => console.log("Kontakt", employee.name)}
            showText={index === 0} // 👈 Only true for the first employee
          />
        ))}
      </div>
    </article>
  );
};

export default Employees;
