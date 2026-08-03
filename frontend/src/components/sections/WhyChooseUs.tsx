const points = [
  "Custom Designs",
  "Quality Materials",
  "Skilled Craftsmanship",
  "Reliable Service",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose Us
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {points.map((point) => (
            <div
              key={point}
              className="rounded-lg bg-white p-5 shadow-sm"
            >
              <p className="font-medium text-gray-900">
                ✓ {point}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}