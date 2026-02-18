import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    // <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="min-h-screen bg-black text-white">
        

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/10 shadow-lg">
  <div className="flex justify-between items-center px-10 py-4 max-w-7xl mx-auto">

    {/* Logo */}
    <h1 className="text-2xl font-bold tracking-wide text-white">
      UrbanNest
    </h1>

    {/* Nav Links */}
    <div className="space-x-8 hidden md:flex">
      {["/", "/rooms", "/gallery", "/about", "/contact"].map((path, index) => {
        const names = ["Home", "Rooms", "Gallery", "About", "Contact"];
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `relative text-sm font-medium transition duration-300 ${
                isActive ? "text-yellow-400" : "text-gray-300"
              } hover:text-yellow-400`
            }
          >
            {names[index]}
          </NavLink>
        );
      })}

      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `text-sm font-medium transition ${
            isActive ? "text-yellow-400" : "text-gray-400"
          } hover:text-yellow-400`
        }
      >
        Admin
      </NavLink>
    </div>

    {/* Book Button */}
    <Link
      to="/booking"
      className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-md"
    >
      Book Now
    </Link>

  </div>
</nav>

      

      {/* Page Content */}
      <div className="pt-20">
        <Outlet />
      </div>

      <footer className="bg-black border-t border-white/10 mt-20">
  <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-3 gap-10">

    {/* Logo & Description */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">UrbanNest</h2>
      <p className="text-gray-400 text-sm">
        Premium urban hostel with modern rooms and vibrant social spaces.
        Experience comfort like never before.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-yellow-400 font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
        <li><Link to="/rooms" className="hover:text-yellow-400 transition">Rooms</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
        <li><Link to="/booking" className="hover:text-yellow-400 transition">Book Now</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-yellow-400 font-semibold mb-4">Contact</h3>
      <p className="text-gray-400 text-sm">123 City Street, Melbourne</p>
      <p className="text-gray-400 text-sm">+61 123 456 789</p>
      <p className="text-gray-400 text-sm">hello@urbannest.com</p>
      
    </div>

  </div>

  <div className="border-t border-white/10 text-center py-4 text-gray-500 text-sm">
    © {new Date().getFullYear()} UrbanNest. All rights reserved.
  </div>
</footer>


    </div>
    
  );
}
