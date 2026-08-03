const products = [
  {
    title: "Kitchen Furniture",
    description:
      "Modern and functional kitchen solutions designed around your space.",
  },
  {
    title: "Wardrobes",
    description:
      "Custom wardrobes combining storage efficiency with elegant design.",
  },
  {
    title: "Doors",
    description:
      "Premium doors crafted with attention to durability and finishing.",
  },
  {
    title: "Custom Furniture",
    description:
      "Furniture designed and built according to your specific requirements.",
  },
  {
    title: "Interior Solutions",
    description:
      "Complete interior works that transform living and working spaces.",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="max-w-2xl">

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            From custom furniture to complete interior solutions,
            we create designs that match your vision and lifestyle.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.title}
              className="rounded-lg border bg-white p-6 transition hover:shadow-md"
            >

              <h3 className="text-xl font-semibold text-gray-900">
                {product.title}
              </h3>


              <p className="mt-3 text-gray-700 leading-relaxed">
                {product.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}