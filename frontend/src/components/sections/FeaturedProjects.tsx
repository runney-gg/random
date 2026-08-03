const projects = [
  {
    title: "Modern Kitchen Design",
    category: "Kitchen Furniture",
  },
  {
    title: "Custom Wardrobe",
    category: "Bedroom Furniture",
  },
  {
    title: "Premium Interior Work",
    category: "Interior Solutions",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="max-w-2xl">

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Explore some of our completed furniture and interior projects
            crafted with attention to detail and quality materials.
          </p>

        </div>


        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >

              {/* Image Placeholder */}
              <div className="flex h-64 items-center justify-center bg-gray-200">

                <span className="text-gray-500">
                  Project Image
                </span>

              </div>


              {/* Content */}
              <div className="p-6">

                <p className="text-sm text-gray-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}