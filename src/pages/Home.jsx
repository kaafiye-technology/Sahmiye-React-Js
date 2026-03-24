import React, { useEffect, useState } from "react";
import { getApiKey } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";
import Contact from "./Contact";
import Stats from "../components/Stats";
import About from "./About";

export default function HomePage() {
  const formatProperties = (data) => {
    return data.map((item) => {
      const images = item.Image
        ? item.Image.split(",").map((img) => API_URL + "/" + img.trim())
        : [];

      return {
        id: item.ID,
        title: item.Title,
        price: Number(item.Price),
        location: `${item.Location}, ${item.City} ${item.State} ${item.Country}`,
        image: images.length ? images[0] : null,
        image2: images.length ? images[0].replace(" ", "") : null,
        allImages: images,
        beds: item.Beds,
        baths: item.Baths,
        size: item.Size,
        type: item.Type,
        description: item.Description,
        currency: item.Currency,
        purpose: item.Rentorsale === "sale" ? "buy" : "rent",
      };
    });
  };
  // Add sort state
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await getApiKey("getlink-apikey/properties-list");
        const formated = formatProperties(data.report);
        console.log("formated:", formated, "repor:", data.report);

        setProperties(formated);
      } catch (err) {
        console.log("err:", err);
      }
    }

    fetchProperties();
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (property) => {
    navigate(`/property/${property.id}`, { state: property });
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % properties.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, [properties]);

  const current = properties[index];
  const imageUrl = current?.image?.replace(/ /g, "%20");
  console.log("CUrrent:", current);
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Slider */}
      <section
        className="relative h-[500px] w-full flex items-center justify-center text-center bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10 text-white px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {current?.title}
          </h2>

          <p className="text-lg mb-2">{current?.location}</p>

          <p className="text-2xl font-semibold text-green-400 mb-6">
            {current?.currency} {current?.price}
          </p>

          <Link
            to={`/properties`}
            className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Daawo Guryaha
          </Link>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* About */}

      <About />

      {/* Properties */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Guryaha Iibka</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={`${property.image}`}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-green-700 font-bold mt-2">
                  {property.currency}
                  {property.price}
                </p>
                <button
                  onClick={() => handleCardClick(property)}
                  className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Faahfaahin
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map + Contact */}
      <Contact />
    </div>
  );
}
