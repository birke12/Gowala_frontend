import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const useFetchEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  // Get all employees
  const fetchEmployees = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/employees");
      const data = await response.json();
      setEmployees(data.data);
    } catch (error) {
      setError("Der skete en fejl under hentning af medarbejdere.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create employee
  const createEmployee = async (employeeData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/employee", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: employeeData,
      });

      const result = await response.json();

      if (result.statusCode === 201) {
        toast.success(result.message);
        return result;
      } else {
        toast.error("Der skete en fejl ved oprettelse.");
      }
    } catch (error) {
      console.error(error);
      toast.error(`Fejl: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Update employee
  const updateEmployee = async (employeeData) => {
    try {
      const response = await fetch("http://localhost:3042/employee", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: employeeData,
      });

      const result = await response.json();

      if (result.statusCode === 200) {
        toast.success(result.message);
      }

      return result;
    } catch (error) {
      console.error(error);
    }
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3042/employee/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      setError("Fejl ved sletning af medarbejder.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch employee by ID
  const fetchEmployeeById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/employee/${id}`);
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Fejl ved hentning af medarbejder:", error);
    }
  };

  // Refetch function
  const refetchEmployees = () => {
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    employees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    fetchEmployeeById,
    refetchEmployees,
    isLoading,
    error,
  };
};

export { useFetchEmployees };
