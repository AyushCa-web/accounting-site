export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="bg-white p-8 rounded shadow-md grid gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="How can we help?"
            required
            className="p-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
