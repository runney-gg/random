export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* Text */}
          <div>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              About Our Craftsmanship
            </h2>


            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              We specialize in creating high-quality custom furniture
              solutions designed to match modern lifestyles and unique
              customer needs. Our focus is on precision, durability,
              and timeless design.
            </p>


            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              With skilled craftsmanship and attention to detail,
              we transform ideas into beautifully finished spaces.
            </p>


          </div>


          {/* Image Placeholder */}
          <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">

            <span className="text-gray-500">
              Company Image
            </span>

          </div>


        </div>

      </div>

    </section>
  );
}