import { useEffect, useState } from "react";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:5000/contacts")
        .then(res => res.json())
        .then(data => setContacts(data))
        .catch(err => console.log(err));
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong Password");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/contact/${id}`, {
        method: "DELETE",
      });

      setContacts(contacts.filter(c => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // 🔐 LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-4">Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg text-black"
        />

        <button
          onClick={handleLogin}
          className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-lg"
        >
          Login
        </button>
      </div>
    );
  }

  // 📊 DASHBOARD
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {contacts.map((contact) => (
        <div
          key={contact._id}
          className="bg-white/10 p-6 rounded-xl mb-4"
        >
          <h2 className="text-xl font-semibold">{contact.name}</h2>
          <p className="text-yellow-400">{contact.email}</p>
          <p className="mt-2">{contact.message}</p>

          <button
            onClick={() => handleDelete(contact._id)}
            className="mt-3 bg-red-500 px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
