export default function Manufacturing() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 md:grid-cols-2">


          {/* Text */}
          <div>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our Manufacturing Process
            </h2>


            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Every piece is carefully crafted by skilled professionals
              using quality materials and modern techniques. From selecting
              materials to final finishing, we focus on precision and
              long-lasting quality.
            </p>


            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Our workshop combines traditional craftsmanship with modern
              methods to deliver furniture that meets our customers
              expectations.
            </p>


          </div>


          {/* Images */}
          <div className="grid gap-4 sm:grid-cols-2">


            <div className="flex h-64 items-center justify-center rounded-lg bg-gray-200">

              <span className="text-gray-500">
                Workshop Image
              </span>

            </div>


            <div className="flex h-64 items-center justify-center rounded-lg bg-gray-200">

              <span className="text-gray-500">
                Manufacturing Image
              </span>

            </div>


          </div>


        </div>

      </div>

    </section>
  );
}