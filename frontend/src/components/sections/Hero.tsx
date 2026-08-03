import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-gray-100">

      <div className="mx-auto w-full max-w-7xl px-6 py-20">

        <div className="max-w-3xl">

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Crafting Quality Furniture
            <br />
            With Precision & Passion
          </h1>


          <p className="mt-6 max-w-xl text-lg text-gray-700">
            We create custom furniture solutions with modern designs,
            skilled craftsmanship, and attention to every detail.
          </p>


          <div className="mt-8 flex gap-4">

            <Link
              href="/contact"
              className="rounded-md bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            >
              Request Quote
            </Link>


            <Link
              href="/projects"
              className="rounded-md bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            >
              View Projects
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}