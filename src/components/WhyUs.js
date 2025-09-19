// components/About.js
export default function About() {
  return (
    <section id="about" className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>

        {/* About Text */}
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          At <span className="font-semibold text-blue-600">Udaan</span>, we accelerate business growth by empowering companies with best-in-class offshore talent and technology-driven accounting solutions. Since 2016, we’ve partnered with{" "}
          <span className="font-semibold">100+ clients</span> worldwide, helping them solve capacity challenges, streamline compliance, and scale their finance teams with ease.
        </p>

        <p className="italic text-xl font-medium text-blue-700 mb-16">
          “Take Finance Ahead, Take Udaan.”
        </p>

        {/* Vision / Mission / Strength */}
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Vision */}
          <div className="bg-gray-50 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🌍 Vision</h3>
            <p className="text-gray-600">
              To give businesses the wings to grow by taking away the burden of accounting and compliance.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Mission</h3>
            <p className="text-gray-600">
              To combine technology with financial expertise to deliver smarter, faster, and more cost-efficient outsourcing solutions.
            </p>
          </div>

          {/* Strengths */}
          <div className="bg-gray-50 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">💪 Strengths</h3>
            <ul className="space-y-2 text-gray-600">
              <li>🌐 100+ satisfied customers</li>
              <li>📈 7+ years of retention</li>
              <li>👥 50+ team size</li>
              <li>🌍 Serving 4+ countries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
