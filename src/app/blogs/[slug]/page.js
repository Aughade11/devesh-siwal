import blogs from "@/data/blogs";

import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/header";

export default async function BlogDetailPage({
  params,
}) {

  const resolvedParams = await params;

  const blog = blogs.find(
    (item) =>
      item.slug === resolvedParams.slug
  );

  if (!blog) {
    notFound();
  }

  // RECENT 7 BLOGS
  const recentBlogs = blogs

    // REMOVE CURRENT BLOG
    .filter(
      (item) =>
        item.slug !== resolvedParams.slug
    )

    // SORT BY LATEST DATE
    .sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    )

    // TAKE ONLY 7
    .slice(0, 7);

  return (

    <main className="bg-[#07111f] text-white overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}

      <section className="relative h-screen">

        <img
          src={blog.image}
          alt={blog.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-black/70
          "
        ></div>

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            h-full
            flex
            flex-col
            justify-end
            px-6
            pb-24
          "
        >

          <p
            className="
              uppercase
              tracking-[4px]
              text-[#3cb7ff]
              mb-6
              text-sm
            "
          >

            Strategy · Leadership · Growth

          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-none
              max-w-5xl
              mb-8
            "
          >

            {blog.title}

          </h1>

          <div
            className="
              flex
              flex-wrap
              gap-6
              text-white/70
              text-sm
            "
          >

            <span>
              By {blog.author}
            </span>

            <span>
              {blog.date}
            </span>

            <span>
              8 min read
            </span>

          </div>

        </div>

      </section>


      {/* ARTICLE + SIDEBAR */}

      <section className="py-28 px-6">

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-4
            gap-16
          "
        >

          {/* ARTICLE */}

          <div className="lg:col-span-3">

            {/* INTRO */}

            <p
              className="
                text-2xl
                leading-relaxed
                text-white/80
                mb-20
              "
            >

              Modern organizations are no longer competing
              solely on products or services.

              They are competing on clarity,
              speed of execution,
              and the ability to adapt under pressure.

            </p>


            {/* CONTENT */}

            <div
              className="
                space-y-12
                text-xl
                leading-[2.2]
                text-white/75
              "
            >

              <p>

                Sustainable growth is rarely accidental.

                The strongest companies build systems before
                they desperately need them.

                They invest in operational discipline,
                leadership alignment,
                and organizational clarity long before
                scale exposes weaknesses.

              </p>


              <p>

                In today’s market,
                execution speed has become a competitive advantage.

                Businesses capable of making decisions faster
                while maintaining strategic direction
                consistently outperform slower organizations.

              </p>


              {/* QUOTE BLOCK */}

              <div
                className="
                  border-l-4
                  border-[#3cb7ff]
                  pl-10
                  py-4
                  my-20
                "
              >

                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-semibold
                    italic
                    text-white
                    leading-relaxed
                  "
                >

                  “Execution without clarity creates chaos.
                  Clarity without execution creates stagnation.”

                </h3>

              </div>


              <p>

                Leadership today requires more than vision.

                It requires the ability to align people,
                systems,
                communication,
                and accountability toward a unified direction.

              </p>


              <p>

                The organizations that sustain momentum are
                the ones capable of building cultures
                where ownership becomes natural,
                not forced.

              </p>

            </div>

          </div>


          {/* SIDEBAR */}

          <div>

            <div className="sticky top-28">

              <h2
                className="
                  text-3xl
                  font-semibold
                  mb-8
                "
              >

                Recent Blogs

              </h2>

              <div
                className="
                  flex
                  flex-col
                  gap-6
                "
              >

                {recentBlogs.map((item) => (

  <Link
    key={item.slug}
    href={`/blogs/${item.slug}`}
    className="
      group
      flex
      items-center
      gap-4
      border
      border-white/10
      rounded-2xl
      p-3
      bg-white/[0.03]
      hover:bg-white/[0.06]
      transition-all
      duration-300
    "
  >

    {/* IMAGE */}

    <div
      className="
        w-28
        h-24
        rounded-xl
        overflow-hidden
        flex-shrink-0
      "
    >

      <img
        src={item.image}
        alt={item.title}
        className="
          w-full
          h-full
          object-cover
          group-hover:scale-110
          transition-all
          duration-500
        "
      />

    </div>

    {/* CONTENT */}

    <div className="flex-1">

      <p
        className="
          text-[11px]
          uppercase
          tracking-[3px]
          text-[#3cb7ff]
          mb-2
        "
      >

        {item.date}

      </p>

      <h3
        className="
          text-base
          md:text-lg
          font-semibold
          leading-snug
          text-white
          group-hover:text-[#3cb7ff]
          transition-all
          duration-300
        "
      >

        {item.title}

      </h3>

    </div>

  </Link>

))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* IMAGE SECTION */}

      <section className="px-6 pb-28">

        <div
          className="
            max-w-6xl
            mx-auto
            rounded-[40px]
            overflow-hidden
            relative
          "
        >

          <img
            src="/blogs/blog2.jpg"
            alt="blog"
            className="
              w-full
              h-[600px]
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              to-transparent
            "
          ></div>

          <div
            className="
              absolute
              bottom-0
              left-0
              p-12
              max-w-3xl
            "
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-[#3cb7ff]
                mb-5
              "
            >

              Strategic Perspective

            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-semibold
                leading-tight
              "
            >

              Building organizations capable
              of sustainable long-term execution.

            </h2>

          </div>

        </div>

      </section>

    </main>

  );

}