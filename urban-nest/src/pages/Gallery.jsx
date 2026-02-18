import { useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", category: "Rooms" },
    { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", category: "Rooms" },
    { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", category: "Lobby" },
    { url: "https://images.unsplash.com/photo-1554995207-c18c203602cb", category: "Lobby" },
    { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", category: "Events" },
    { url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", category: "Events" },
  ];

  const categories = ["All", "Rooms", "Lobby", "Events"];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6 md:px-16">

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          Our <span className="text-yellow-400">Gallery</span>
        </h1>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full transition ${
              activeCategory === cat
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
            onClick={() => setSelectedImage(img.url)}
          >
            <img
              src={img.url}
              alt="Hostel"
              className="w-full rounded-2xl object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* Back Button */}
      <div className="text-center mt-20">
        <Link
          to="/"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
