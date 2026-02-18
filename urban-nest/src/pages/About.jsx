import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-28">

      {/* HERO SECTION */}
      <section className="px-6 md:px-16 mb-20">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-yellow-400">UrbanNest</span>
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Located in the heart of Melbourne, UrbanNest offers travelers
          a modern social hostel experience designed for comfort,
          community, and unforgettable stays.
        </p>
      </section>

      {/* IMAGE + STORY */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 mb-24">
      <img
  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
  alt="Hostel interior"
  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
/>



        <div>
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
            Our Story
          </h2>
          <p className="text-gray-400 mb-4">
            UrbanNest was founded with one mission — to create a vibrant,
            affordable and stylish stay for modern travelers.
          </p>
          <p className="text-gray-400">
            From cozy private suites to lively shared dorms,
            we combine comfort and community to make every guest feel at home.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 md:px-16 mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-yellow-400">UrbanNest</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Prime Location</h3>
            <p className="text-gray-400">
              Located near cafes, nightlife and public transport.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Modern Comfort</h3>
            <p className="text-gray-400">
              Clean, stylish rooms with premium amenities.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Community Vibes</h3>
            <p className="text-gray-400">
              Meet travelers from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-yellow-400 text-black py-16 mb-24">
        <div className="grid md:grid-cols-3 text-center gap-8 px-6 md:px-16">
          <div>
            <h3 className="text-4xl font-bold">5+</h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p>Happy Guests</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">4.8★</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center px-6 md:px-16 pb-20">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Stay With Us?
        </h2>

        <Link
          to="/booking"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Book Your Stay
        </Link>
      </section>

    </div>
  );
}
