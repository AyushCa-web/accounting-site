// src/components/Services.js

import { FaBook, FaBalanceScale, FaFileInvoiceDollar, FaUsers, FaUserTie, FaGlobe } from "react-icons/fa";

export default function Services() {
  const serviceList = [
    {
      title: "Bookkeeping & Accounting",
      icon: <FaBook className="text-blue-600 w-8 h-8" />,
      description: "Accurate daily record-keeping, ledger entries, and financial statements."
    },
    {
      title: "Bank & Ledger Reconciliations",
      icon: <FaBalanceScale className="text-blue-600 w-8 h-8" />,
      description: "Ensure your financial data is accurate and up to date across all accounts."
    },
    {
      title: "Payroll & HR Compliance",
      icon: <FaUsers className="text-blue-600 w-8 h-8" />,
      description: "Reliable payroll processing, statutory compliance and employee support."
    },
    {
      title: "CFO / Controller Advisory",
      icon: <FaUserTie className="text-blue-600 w-8 h-8" />,
      description: "Manage budgets, forecasting and strategic financial planning without hiring in-house."
    },
    {
      title: "Tax & Regulatory Compliance",
      icon: <FaFileInvoiceDollar className="text-blue-600 w-8 h-8" />,
      description: "GST, TDS, and other regulatory filings handled with precision and timeliness."
    },
    {
      title: "Indian Entry / Global Expansion",
      icon: <FaGlobe className="text-blue-600 w-8 h-8" />,
      description: "Support for business setup, registrations, and cross-border compliance."
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-4">
          End-to-end accounting, compliance and financial advisory services — tailored to help international businesses grow with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {serviceList.map((svc) => (
          <div key={svc.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              {svc.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{svc.title}</h3>
            <p className="text-gray-600">{svc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
