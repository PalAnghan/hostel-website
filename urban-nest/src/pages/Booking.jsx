export default function Booking() {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-32">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Book Your Stay
      </h1>

      <div className="max-w-2xl mx-auto bg-white/5 p-10 rounded-2xl backdrop-blur-lg">
        
        <div className="mb-6">
          <label className="block mb-2">Check-in Date</label>
          <input type="date" className="w-full p-3 rounded bg-black border border-white/20" />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Check-out Date</label>
          <input type="date" className="w-full p-3 rounded bg-black border border-white/20" />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Guests</label>
          <select className="w-full p-3 rounded bg-black border border-white/20">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>

        <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:scale-105 transition">
          Confirm Booking
        </button>

      </div>
    </div>
  );
}
