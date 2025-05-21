
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";
import ContactBg from "../../public/background/page_header_01.jpg";
import QuickContact from "../components/quickContact/QuickContact";
import Employees from "../components/staff/Staff";



const Contact = () => {
  return (
    <section>
      <PageHeader 
      title="Kontakt Gowala"
        subtitle="Vores Kontaktinformationer"
        background={ContactBg}
      />
     <ContactForm />
     <QuickContact />
     <Employees />
      <Footer />
    </section>
  );
};

export default Contact;
