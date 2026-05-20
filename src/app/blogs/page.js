import Link from "next/link";

import blogs from "@/data/blogs";
import Navbar from "../components/header";



export default function BlogsPage() {

  return (

    <main className="bg-[#07111f] min-h-screen text-white">
     <Navbar />
      <section className="pt-40 pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-7xl font-bold mb-10">

            Insights & Articles

          </h1>

          <div className="grid lg:grid-cols-2 gap-10">

            {blogs.map((blog, index) => (

              <Link
                key={index}
                href={`/blogs/${blog.slug}`}
                className="
                  border
                  border-white/10
                  rounded-[30px]
                  overflow-hidden
                  bg-white/[0.03]
                "
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                  "
                />

                <div className="p-10">

                  <p className="text-[#3cb7ff] mb-4">

                    {blog.date}

                  </p>

                  <h2 className="text-4xl font-semibold mb-5">

                    {blog.title}

                  </h2>

                  <p className="text-white/70 text-lg">

                    {blog.description}

                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>

  );
}