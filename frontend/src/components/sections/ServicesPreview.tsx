const services = [
  "Kitchen Furniture",
  "Wardrobes",
  "Custom Furniture",
  "Interior Solutions",
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Our Services
        </h2>


        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (

            <div
              key={service}
              className="rounded-lg border p-6"
            >
              <h3 className="font-semibold text-gray-900">
                {service}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}