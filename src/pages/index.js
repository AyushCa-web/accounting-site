import Header from "../components/Header";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <WhyUs />
      <ContactForm />
      <footer className="bg-gray-100 text-center py-6">
        <p>&copy; 2025 Your Company Name · All Rights Reserved.</p>
      </footer>
    </div>
  );
}
