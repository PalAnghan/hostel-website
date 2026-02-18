import { useState } from "react";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
};





  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6 md:px-16">

      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
        <p className="text-gray-400 max-w-xl">
          Have questions about bookings or rooms? We’re here to help.
        </p>
      </div>

      {/* FORM + INFO */}
      <div className="grid md:grid-cols-2 gap-16 mb-24">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full bg-white/10 p-4 rounded-xl focus:outline-none focus:border-yellow-400 border border-white/10"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full bg-white/10 p-4 rounded-xl focus:outline-none focus:border-yellow-400 border border-white/10"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full bg-white/10 p-4 rounded-xl focus:outline-none focus:border-yellow-400 border border-white/10"
          />

          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </form>

        {/* INFO */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
              Get In Touch
            </h2>
            <p className="text-gray-400">
              📍 123 City Street, Melbourne, Australia <br />
              📞 +61 123 456 789 <br />
              ✉️ hello@urbannest.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
              Opening Hours
            </h2>
            <p className="text-gray-400">
              24/7 Reception <br />
              Check-in: 2PM <br />
              Check-out: 11AM
            </p>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-6">
          Find <span className="text-yellow-400">Us</span>
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <iframe
            title="UrbanNest Location"
            src="https://www.google.com/maps?q=Melbourne+Australia&output=embed"
            width="100%"
            height="400"
            className="w-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mb-32">
        <h2 className="text-3xl font-bold mb-10">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="font-semibold mb-2">What time is check-in?</h3>
            <p className="text-gray-400">
              Check-in starts at 2PM. Early check-in is subject to availability.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="font-semibold mb-2">Do you offer free WiFi?</h3>
            <p className="text-gray-400">
              Yes! High-speed WiFi is available throughout the hostel.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="font-semibold mb-2">Can I cancel my booking?</h3>
            <p className="text-gray-400">
              Free cancellation is available up to 24 hours before arrival.
            </p>
          </div>

        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce">
          Message Sent Successfully! 🎉
        </div>
      )}

      {showSuccess && (
      <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
        ✅ Message Sent Successfully!
      </div>
      )}

      
    </div>
  );
}
