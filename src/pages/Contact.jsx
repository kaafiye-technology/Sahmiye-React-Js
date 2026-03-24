import { whatsappContact } from "../../constants";
import { Home, Phone, Mail, MapPin, Building } from "lucide-react";

export default function Contact() {
  return (
    <section className="grid md:grid-cols-2 gap-8 px-6 py-16">
      {/* Map */}
      <iframe
        title="Mogadishu Map"
        src="https://www.google.com/maps?q=Mogadishu&output=embed"
        className="w-full h-[350px] rounded-lg border"
        loading="lazy"
      ></iframe>

      {/* Contact Info */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Nala Soo Xiriir</h2>
        <div className="space-y-4">
          <p className="flex items-center gap-2">
            <Building /> SAHMIYE REALSTATE
          </p>
          <p className="flex items-center gap-2">
            <MapPin /> Muqdisho, Somalia
          </p>
          <p className="flex items-center gap-2">
            <Mail /> info@sahmiyerealstate.com
          </p>
          <p className="flex items-center gap-2">
            <Phone /> {whatsappContact} (WhatsApp)
          </p>
        </div>
      </div>
    </section>
  );
}
