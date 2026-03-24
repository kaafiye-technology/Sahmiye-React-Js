import { Home, Phone, Mail, MapPin, Building } from "lucide-react";

export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-10">
      <div className="bg-green-100 p-6 text-center rounded-lg">
        <Building className="mx-auto mb-2 text-green-700" />
        <h3 className="text-2xl font-bold text-green-700">150+</h3>
        <p>Projects</p>
      </div>
      <div className="bg-blue-100 p-6 text-center rounded-lg">
        <Home className="mx-auto mb-2 text-blue-700" />
        <h3 className="text-2xl font-bold text-blue-700">50+</h3>
        <p>Customers</p>
      </div>
      <div className="bg-yellow-100 p-6 text-center rounded-lg">
        <MapPin className="mx-auto mb-2 text-yellow-700" />
        <h3 className="text-2xl font-bold text-yellow-700">20+</h3>
        <p>Locations</p>
      </div>
      <div className="bg-red-100 p-6 text-center rounded-lg">
        <Phone className="mx-auto mb-2 text-red-700" />
        <h3 className="text-2xl font-bold text-red-700">24/7</h3>
        <p>Suport</p>
      </div>
    </section>
  );
}
