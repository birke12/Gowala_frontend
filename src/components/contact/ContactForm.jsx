import { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add a POST request here
    alert("Tak for din besked!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contactSection}>
      <h2>Send en besked til os</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
         
          <input
            type="text"
            name="name"
            placeholder="Dit navn"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
        
          <input
          placeholder="Din email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          
          <textarea
          placeholder="Din besked"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send besked</button>
      </form>
    </section>
  );
};

export default ContactForm;
