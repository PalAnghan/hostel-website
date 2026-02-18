import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [openBooking, setOpenBooking] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg')",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 px-6">
    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
      Experience Melbourne
      <span className="text-yellow-400 block">
        Like Never Before
      </span>
    </h1>

    <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
      Premium urban hostel with modern rooms and vibrant social spaces.
    </p>

    <div className="mt-8 flex justify-center gap-6">
      <button
  onClick={() => setOpenBooking(true)}
  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
>
  Book Now
</button>

      <Link
        to="/rooms"
        className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition inline-block"
        >
        Explore Rooms
      </Link>

    </div>
  </div>

  {openBooking && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="bg-white text-black p-8 rounded-2xl w-[90%] md:w-[500px] relative">

      <button
        onClick={() => setOpenBooking(false)}
        className="absolute top-4 right-4 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          className="w-full border p-3 rounded-lg"
        />

        <select className="w-full border p-3 rounded-lg">
          <option>Select Room Type</option>
          <option>Private Room</option>
          <option>Shared Dorm</option>
          <option>Luxury Suite</option>
        </select>

        <button
          type="submit"
          className="w-full bg-yellow-400 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  </div>
)}


</div>
</div>

  );
}
