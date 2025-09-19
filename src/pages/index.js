import Header from "../components/Header";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import ContactForm from "../components/ContactForm";
import Tabs from "../components/Tabs";

export default function Home() {
  const tabs = [
    { label: "Home", targetId: "home" },
    { label: "Services", targetId: "services" },
    { label: "About Us", targetId: "about" },
    { label: "Contact", targetId: "contact" },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />

      <section id="home">
        <Header />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <WhyUs />
      </section>

      <ContactForm /> {/* already has id="contact-form" */}

      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        <p>&copy; 2025 Udaan · All Rights Reserved.</p>
        <p className="mt-1 text-xs text-gray-400 italic">
          Website created by Sopnesh Gandhi
        </p>
      </footer>

    </div>
  );
}
