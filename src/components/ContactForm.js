//export default function ContactForm() {
//  return (
//    <section id="contact" className="py-20 bg-blue-50">
//      <div className="max-w-3xl mx-auto px-4">
//        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
//        <form
//          name="contact"
//          method="POST"
//          data-netlify="true"
//          className="bg-white p-8 rounded shadow-md grid gap-4"
//        >
//          <input type="hidden" name="form-name" value="contact" />
//          <input
//            type="text"
//            name="name"
//            placeholder="Your Name"
//            required
//            className="p-3 border rounded"
//          />
//          <input
//            type="email"
//            name="email"
//            placeholder="Your Email"
//            required
//            className="p-3 border rounded"
//          />
//          <textarea
//            name="message"
//            placeholder="How can we help?"
//            required
//            className="p-3 border rounded"
//          ></textarea>
//          <button
//            type="submit"
//            className="bg-blue-800 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
//          >
//            Submit
//          </button>
//        </form>
//      </div>
//    </section>
//  );
//}

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Later: connect with email service (Formspree, Resend, etc.)
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Free Consultation</h2>
        <p className="text-gray-600 mb-8">
          Tell us your requirements and we’ll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 text-left bg-white p-8 rounded-2xl shadow-md"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company (Optional)</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          📧 Or email us directly at <strong>info@udaanllp.com</strong>
          <br />
          Your information is <span className="font-semibold">100% confidential</span>.
        </p>
      </div>
    </section>
  );
}

