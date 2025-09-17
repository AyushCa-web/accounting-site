import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(tabs[0].label);

  const handleClick = (tab) => {
    setActive(tab.label);

    // scroll smoothly to section
    const el = document.getElementById(tab.targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleClick(tab)}
            className={`px-6 py-3 -mb-px font-medium ${
              active === tab.label
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
