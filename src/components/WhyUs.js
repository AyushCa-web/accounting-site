export default function WhyUs() {
  const points = [
    "Seasoned team in India",
    "International compliance standards",
    "Cost savings compared to in-house staff",
    "Secure, cloud-based workflows",
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {points.map((point) => (
            <div key={point} className="bg-blue-50 p-6 rounded shadow hover:shadow-md transition">
              <h3 className="font-bold mb-2">{point}</h3>
              <p>We ensure quality, efficiency, and security in every process.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
