import { Link } from "react-router-dom";

export default function Rooms() {
  const rooms = [
    {
      name: "Private Room",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      features: ["Queen Bed", "Private Bathroom", "Free WiFi"],
      left: 2,
    },
    {
      name: "Shared Dorm",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
      features: ["4 Beds", "Shared Bathroom", "Locker Included"],
      left: 5,
    },
    {
      name: "Luxury Suite",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      features: ["King Bed", "City View", "Mini Bar"],
      left: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-10 py-32 hover:scale-105 transition duration-300">
      <h1 className="text-5xl font-bold text-center mb-16">
        Our <span className="text-yellow-400">Rooms</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-10 hover:scale-105 transition duration-300">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-lg hover:scale-105 transition duration-300"
          >
            <img
              src={room.image}
              alt={room.name}
              className="h-60 w-full object-cover hover:scale-105 transition duration-300"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 hover:scale-105 transition duration-300">{room.name}</h2>

              <p className="text-yellow-400 text-xl mb-4 hover:scale-105 transition duration-300">
                {room.price} / night
              </p>

              <ul className="text-gray-300 mb-4 space-y-1 hover:scale-105 transition duration-300">
                {room.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              {/* Urgency */}
              {room.left <= 2 && (
                <p className="text-red-400 mb-4 hover:scale-105 transition duration-300">
                  Only {room.left} rooms left!
                </p>
              )}

              <Link
                to="/booking"
                className="block text-center bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-300 transition hover:scale-105 transition duration-300"
              >
                Book This Room
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
