import styles from "./employeeCard.module.css";
import Swal from "sweetalert2";

const EmployeeCard = ({ employee, onContact }) => {
  const handleContact = () => {
    Swal.fire({
      title: `Kontakt ${employee.name}`,
      text: `Du har valgt at kontakte ${employee.name}.`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Send besked",
      cancelButtonText: "Annullér",
    }).then((result) => {
      if (result.isConfirmed && onContact) {
        onContact(employee);
      }
    });
  };

  return (
    <li
      className={styles.card}
      style={{ backgroundImage: `url(${employee.image})` }}
    >
      <div className={styles.overlay}>
        <p>{employee.text}</p>
        <h2>{employee.name}</h2>
        <p>{employee.role}</p>
      </div>
    </li>
  );
};

export default EmployeeCard;
