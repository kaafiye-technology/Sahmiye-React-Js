export default function About() {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* HERO */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Sahmiye Real Estate
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building trust, delivering value, and helping you find the perfect
            home in Somalia.
          </p>
        </div>

        {/* INTRO */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            SAHMIYE REAL ESTATE is a leading brokerage firm specializing in
            residential and commercial properties across Somalia. With a
            commitment to integrity, professionalism, and client satisfaction,
            we strive to provide exceptional real estate services tailored to
            meet the unique needs of each client.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To simplify the real estate process by providing transparent,
              reliable, and efficient services that empower our clients to make
              the best property decisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become the most trusted and innovative real estate company in
              the region, delivering modern solutions for buying, selling, and
              renting properties.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-lg text-green-600 mb-2">
                Trusted Experts
              </h4>
              <p className="text-gray-600 text-sm">
                Years of experience in the Somali real estate market.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg text-green-600 mb-2">
                Best Deals
              </h4>
              <p className="text-gray-600 text-sm">
                We help you get the best value for your investment.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg text-green-600 mb-2">
                Customer First
              </h4>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Learn More About Our Work
          </h2>

          <div
            className="relative w-full overflow-hidden rounded-xl"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/vefQXjZDSZM"
              title="Sahmiye Real Estate Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CONTACT CTA */}
        <div className="bg-green-700 text-white text-center p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mb-4">
            Contact us today and let’s help you get started.
          </p>

          <a
            href="/contact"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
