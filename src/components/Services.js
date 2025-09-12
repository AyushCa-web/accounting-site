export default function Services() {
  const services = [
    "Accounts Payable & Receivable",
    "Bank Reconciliation",
    "Financial Reporting",
    "Payroll Processing",
    "General Ledger Maintenance",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="font-bold mb-2">{service}</h3>
              <p>High-quality, reliable services to streamline your accounting workflow.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
