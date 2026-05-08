"use client";

import Navbar from "./header";
import Preloader from "./Preloader";
import { useEffect, useState } from "react";

export default function Executive() {

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] =
  useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const [loadingForm, setLoadingForm] =
  useState(false);
  /* PRELOADER */
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  /* TITLE REVEAL */
  useEffect(() => {

  const titles = document.querySelectorAll(".reveal-title");

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

        }

      });

    },

    {
      threshold: 0.2,
    }

  );

  titles.forEach((title) => {
    observer.observe(title);
  });
  

  return () => {
    observer.disconnect();
  };

}, [loading]);

  /* SCROLL STORYTELLING SKILLS */
    /* SCROLL STORYTELLING SKILLS */
  const [activeSkill, setActiveSkill] = useState(0);

useEffect(() => {

  const handleScroll = () => {

    const section = document.querySelector(
      ".skills-scroll-section"
    );

    if (!section) return;

    const rect = section.getBoundingClientRect();

    /* ONLY RUN WHEN SECTION IS VISIBLE */
    if (
      rect.top > window.innerHeight ||
      rect.bottom < 0
    ) {
      return;
    }

    const progress =
      Math.min(
        Math.max(
          (-rect.top) /
          (rect.height - window.innerHeight),
          0
        ),
        1
      );

    const totalSlides = 6;

    const index = Math.min(
      totalSlides - 1,
      Math.floor(progress * totalSlides)
    );

    setActiveSkill(index);

  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  handleScroll();

  return () => {
    window.removeEventListener(
      "scroll",
      handleScroll
    );
  };

}, []);

const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]:
      e.target.value,
  });
};


const handleSubmit = async (e) => {

  e.preventDefault();

  setLoadingForm(true);

  try {

    const response =
      await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(formData),
      });

    const data =
      await response.json();

    alert(data.message);

    if (data.success) {

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }

  } catch (error) {

    alert("Something went wrong");
  }

  setLoadingForm(false);
};

  if (loading) {
    return <Preloader />;
  }

  return (
    <main>

      {/* HERO SECTION */}
{/* HERO SECTION */}
<section
  id="home"
  className="hero-banner min-h-screen overflow-hidden"
>

  <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 min-h-screen px-6 md:px-10 lg:px-20">

    {/* TEXT SIDE */}
    <div
      className={`flex flex-col justify-center text-white py-24 lg:py-0 hero-text-content ${
        !loading ? "hero-active" : ""
      }`}
    >

      <p className="text-xs md:text-sm tracking-[4px] mb-4 hero-subtitle">

        25 YEARS OF IMPACT

      </p>

      <h1
        className="
          text-[54px]
          md:text-[100px]
          lg:text-[160px]
          leading-none
          font-bold
          mb-6
          hero-title
        "
      >

        DEVESH SIWAL

      </h1>

      <p className="text-lg md:text-2xl mb-6 hero-role">

        Chief Executive · Strategist · Builder

      </p>

      <p
        className="
          text-xl
          md:text-2xl
          lg:text-3xl
          font-semibold
          leading-relaxed
          max-w-2xl
          text-[#3cb7ff]
          hero-quote
        "
      >

        <i>
          “Strategy without execution is a dream.
          Execution without strategy is a nightmare.”
        </i>

      </p>

     

    </div>

    {/* IMAGE SIDE */}
    <div
      className="
        flex
        items-end
        justify-center
        lg:justify-end
        mt-10
        lg:mt-0
        hero-image-wrapper
      "
    >

      <img
        src="/images/devesh.png"
        alt="profile"
        className={`
          w-full
          max-w-[320px]
          md:max-w-[500px]
          lg:max-w-[780px]
          block
          hero-image
          ${!loading ? "hero-active" : ""}
        `}
      />

    </div>

  </div>

</section>

      <Navbar />

      {/* THE JOURNEY */}
      <section id="about" className="dark-section py-28 px-6">

        <div className="max-w-5xl mx-auto space-y-6">

          <h1 className="hero-text text-center text-white">
          <span className="section-title reveal-title">
              THE JOURNEY
            </span>
          </h1>

          <h2 className="text-center text-white text-2xl">
            25+ Years of Building What Lasts
          </h2>

          <p className="text-center mx-auto leading-relaxed text-white/80 text-lg">
            Some careers are linear. Mine was deliberately not.
            Across consumer services, e-commerce, retail,
            ed-tech, travel, and fintech — I chose the harder path:
            to understand business not as a sector, but as a living
            system of people, decisions, and consequences.
          </p>

          <p className="text-center mx-auto leading-relaxed text-white/80 text-lg">
            I started with a belief that great leadership is built on clarity — knowing where you’re going, why it matters, and exactly who you need alongside you. Over two and a half decades, I’ve taken that belief into boardrooms, early-stage startups, and everything in between.
          </p>

          <p className="text-center mx-auto leading-relaxed text-white/80 text-lg">
           The results have been measured in companies repositioned, teams transformed, and markets entered. But what I’m most proud of? The cultures built along the way — where accountability, ambition, and genuine care for the customer are not competing values, but one and the same.
          </p>

          <h3 className="text-3xl text-center text-[#3cb7ff] font-semibold pt-6">
            <i>
              “The best strategy is the one your team can own, execute, and improve — not the one that looks perfect on a slide.”

            </i>
          </h3>

        </div>
        {/* ACHIEVEMENTS */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-15">

  {[
    {
      number: "₹1,200Cr",
      text: "Merchandise inventory listed on Payed platform",
    },

    {
      number: "5,800+",
      text: "Offline stores onboarded on Payed",
    },

    {
      number: "3,500",
      text: "Team led directly & indirectly at Sahara Q Shop",
    },

    {
      number: "GWR",
      text: "Guinness World Record — 315 stores in 1 day",
    },

  ].map((item, index) => (

    <div
      key={index}
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        text-center
        backdrop-blur-sm
        hover:-translate-y-2
        hover:border-[#3cb7ff]
        transition-all
        duration-500
      "
    >

      <h3
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#3cb7ff]
          mb-4
        "
      >
        {item.number}
      </h3>

      <p
        className="
          text-white/80
          leading-relaxed
          text-sm
          md:text-base
        "
      >
        {item.text}
      </p>

    </div>

  ))}

</div>




      </section>
      {/* CORE EXPERTISE */}
<section
  id="expertise"
  className="skills-scroll-section"
>

  <div className="skills-sticky">

    {[
      {
        title: "Strategic Planning & Growth",
        desc: "Formulating and implementing sustainable strategies that survive real-world pressure — from market entry to turnaround to scale."
      },

      {
        title: "Brand & Business Development",
        desc: "Building brands that mean something. From product launches to full rebranding mandates, shaping how the market sees you — and why it should care."
      },

      {
        title: "Sales & Operational Excellence",
        desc: "Driving profitability through disciplined operations, high-performance team design, and distribution strategies built for the long game."
      },

      {
        title: "Organizational Development",
        desc: "Designing teams and cultures where talent thrives, accountability is real, and results are not a coincidence."
      },

      {
        title: "Financial Planning & P&L Ownership",
        desc: "Full financial stewardship — from budget construction to cost discipline — with a relentless focus on sustainable profitability."
      },

      {
        title: "Go-to-Market Execution",
        desc: "Translating vision into action: product launches, market positioning, competitive strategy, and the discipline to see it through to results."
      }

    ].map((item, index) => (

      <div
        key={index}
        className={`scroll-skill-card ${
          activeSkill === index ? "active-skill" : ""
        }`}
      >

        <h2 className="scroll-skill-title">
          {item.title}
        </h2>

        <p className="scroll-skill-desc">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>

      {/* CORE EXPERTISE */}
      {/* <section id="expertise" className="light-section py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h1 className="hero-text text-[#0B1D3A]">
              <span className="section-title reveal-title dark-title">
                CORE EXPERTISE
              </span>
            </h1>

            <h2 className="text-[#0B1D3A] text-2xl pt-5">
              Where experience becomes advantage.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "Strategic Planning & Growth",
                text: "Formulating and implementing sustainable strategies that survive real-world pressure."
              },
              {
                title: "Brand & Business Development",
                text: "Building brands that mean something and shaping market perception."
              },
              {
                title: "Sales & Operational Excellence",
                text: "Driving profitability through disciplined operations and high-performance teams."
              },
              {
                title: "Organizational Development",
                text: "Designing teams and cultures where talent thrives and accountability is real."
              },
              {
                title: "Financial Planning & P&L Ownership",
                text: "Full financial stewardship with focus on sustainable profitability."
              },
              {
                title: "Go-to-Market Execution",
                text: "Translating vision into action through disciplined execution."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#f4f7fb] p-8 rounded-3xl border-l-5 border-[#011a52] hover:-translate-y-2 transition-all duration-300"
              >

                <h3 className="text-[#0B1D3A] text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section> */}

      {/* INDUSTRIES */}
      <section id="industries" className="dark-section py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="hero-text text-white mb-4">
              <span className="section-title reveal-title">
              INDUSTRIES
            </span>
             
            </h2>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Depth across every frontier.
            </h3>

            <p className="max-w-3xl mx-auto text-white/80 leading-relaxed text-lg">
              Industry expertise that spans the old economy and the new — giving you a strategist who understands both legacy structures and digital disruption from the inside.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">

            {[
              ["Consumer Services", "Foundational"],
              ["E-Commerce", "Digital"],
              ["Retail — Offline & Online", "Multi-channel"],
              ["Ed-Tech", "Growth"],
              ["Travel", "Experiential"],
              ["Fin-Tech", "Emerging"],
              ["Real Estate", "Expansion"]
            ].map((item, index) => (

              <div
                key={index}
                className="border-b border-white/20 pb-6 hover:translate-x-2 transition-all duration-300"
              >

                <h4 className="text-3xl font-semibold text-white mb-2">
                  {item[0]}
                </h4>

                <p className="uppercase tracking-[3px] text-sm text-[#3cb7ff]">
                  {item[1]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* KEY SKILLS */}
<section
  id="experience"
  className="blue-gradient py-28 px-6"
>

  <div className="max-w-6xl mx-auto">

    {/* HEADING */}

    <div className="text-center mb-24">

      <h2 className="hero-text text-white mb-6">

        <span className="section-title reveal-title">
          PROFESSIONAL EXPERIENCE
        </span>

      </h2>

    </div>


    {/* EXPERIENCE LIST */}

    <div className="space-y-20">

      {[
        {
          year: "Mar 2025 – Present",
          company: "KISNA",
          category: "Jewellery retail",
          title: "Chief Operating Officer",
          desc: "End-to-end operational leadership at India's fastest-growing diamond and gold jewellery brand (Hari Krishna Group) — scaling omni-channel formats, driving Shop-in-Shop expansion, and architecting the franchise network across Tier 1, 2 & 3 cities.",
          tags: [
            "SIS expansion",
            "Franchise network",
            "E-commerce",
            "P&L ownership",
            "Supply chain",
          ],
        },

        {
          year: "Jan 2021 – Feb 2025",
          company: "PAYED",
          category: "Payments & e-commerce",
          title: "Chief Executive Officer",
          desc: "Conceived, proposed, and built a hybrid payments-and-marketplace platform from scratch — onboarding 5,800 offline stores, listing ₹1,200 Cr in merchandise inventory, and sustaining 30%+ MoM GMV growth. Designed India's first closed-loop commerce-fintech ecosystem (UPSI).",
          tags: [
            "Platform architecture",
            "UPSI / fintech",
            "GMV growth 30%+",
            "Microloans & insurance",
            "WMS / OMS",
          ],
        },

        {
          year: "Sep 2017 – Dec 2020",
          company: "Edunguru Inc.",
          category: "Ed-tech",
          title: "Chief Operating Officer",
          desc: "Launched Sahara India's e-learning venture integrating online content with physical classrooms — completing 18,000 hours of content, turning the division cash-positive in 2 years and net-profitable in 3.",
          tags: [
            "P&L turnaround",
            "18,000 hrs content",
            "Spoken English vertical",
          ],
        },

        {
          year: "Mar 2010 – Aug 2017",
          company: "Sahara Q Shop",
          category: "FMCG & retail",
          title: "CGM & Chief Operating Officer",
          desc: "Led India's first fully private-label FMCG and retail brand — launching 378 products and 763 SKUs simultaneously, scaling to 425 cities across 13 states in 8 months, and earning a Guinness World Record. Also oversaw the Group's jewellery foray under Sahara Q Gold Mart.",
          tags: [
            "Guinness World Record",
            "378 products launched",
            "3,500-person team",
            "152 contract plants",
            "Chairman Club Award",
          ],
        },

        {
          year: "May 2008 – Feb 2010",
          company: "Sahara Global & Care House",
          category: "Travel & NRI services",
          title: "GM & Chief Operating Officer",
          desc: "Revitalised an integrated medical tourism and MICE travel business attracting patients from UAE, Africa, USA, Canada, and UK. Simultaneously expanded Sahara Care House via a Direct Selling Model turnaround, growing NRI market revenue significantly.",
          tags: [
            "Medical tourism",
            "MICE travel",
            "Direct selling turnaround",
          ],
        },

        {
          year: "Mar 2006 – Apr 2008",
          company: "Sahara Care House",
          category: "NRI concierge",
          title: "Head — Unified Contact Centre",
          desc: "Built from scratch a 24/7 unified contact centre serving the global Indian diaspora — delivering 60 services and 5,000 products, expanding membership across the US, UK, Europe, Middle East, and Asia.",
          tags: [
            "60 services, 5,000 products",
            "6 global regions",
            "Outbound membership sales",
          ],
        },

      ].map((item, index) => (

        <div
          key={index}
          className="
            group
            grid
            md:grid-cols-[220px_1fr]
            gap-10
            border-b
            border-white/10
            pb-16
            transition-all
            duration-500
            hover:translate-x-2
          "
        >

          {/* LEFT SIDE */}

          <div className="space-y-2">

            <p
              className="
                text-[#3cb7ff]
                text-sm
                tracking-[1px]
                uppercase
              "
            >
              {item.year}
            </p>

            <h3
              className="
                text-white
                text-xl
                font-semibold
                uppercase
                tracking-[1px]
              "
            >
              {item.company}
            </h3>

            <p className="text-white/50 text-sm">

              {item.category}

            </p>

          </div>


          {/* RIGHT SIDE */}

          <div
            className="
              transition-all
              duration-500
              group-hover:translate-y-[-2px]
            "
          >

            <h2
              className="
                text-white
                text-3xl
                md:text-4xl
                font-semibold
                mb-5
              "
            >

              {item.title}

            </h2>

            <p
              className="
                text-white/75
                text-lg
                leading-relaxed
                mb-8
              "
            >

              {item.desc}

            </p>


            {/* TAGS */}

            <div className="flex flex-wrap gap-3">

              {item.tags.map((tag, i) => (

                <span
                  key={i}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    text-white/70
                    text-sm
                    hover:border-[#3cb7ff]
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >

                  {tag}

                </span>

              ))}

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

    
           {/* KEY SKILLS */}
      

      {/* CONTACT */}
      <section id="contact" className="dark-section py-28 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

          {/* LEFT */}
          <div>

            <h2 className="hero-text text-white mb-6">
              LET’S CONNECT
            </h2>

            <h3 className="text-3xl text-white font-semibold mb-6">
              Ready to build something worth building?
            </h3>

            <p className="text-white/80 leading-relaxed text-lg">
              Whether you’re looking for strategic counsel,
              a board-level perspective, or a conversation
              about what’s possible — I’m always open to the right dialogue.
            </p>

          </div>

          {/* FORM */}
          <form
  className="space-y-6"
  onSubmit={handleSubmit}
>

            <div>

              <label className="block text-white mb-3">
                Name
              </label>

              <input
                type="text" name="name" value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none"
              />

            </div>

            <div>

              <label className="block text-white mb-3">
                Email
              </label>

              <input
                type="email" name="email" value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none"
              />

            </div>

            <div>

              <label className="block text-white mb-3">
                Subject / Context
              </label>

              <input
                type="text" name="subject" value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none"
              />

            </div>

            <div>

              <label className="block text-white mb-3">
                Message
              </label>

              <textarea
                rows="6" name="message" value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none resize-none"
              ></textarea>

            </div>

           <button
  type="submit"
  disabled={loadingForm}
  className="bg-white text-[#0B1D3A] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
>
  {
    loadingForm
      ? "Sending..."
      : "Send Message"
  }
</button>

          </form>

        </div>

      </section>
      <section
  id="linkedin"
  className="dark-section py-32 px-6 overflow-hidden"
>

  <div
    className="
      max-w-6xl
      mx-auto
      relative
    "
  >

    {/* BACKGROUND GLOW */}

    <div
      className="
        absolute
        inset-0
        bg-[#3cb7ff]/10
        blur-[120px]
        rounded-full
      "
    ></div>


    {/* MAIN CARD */}

    <div
      className="
        relative
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        rounded-[40px]
        p-10
        md:p-16
        overflow-hidden
      "
    >

      {/* TOP LABEL */}

      <p
        className="
          text-[#3cb7ff]
          uppercase
          tracking-[4px]
          text-sm
          mb-8
        "
      >

        Let’s Connect

      </p>


      <div
        className="
          grid
          lg:grid-cols-[220px_1fr]
          gap-12
          items-center
        "
      >

        {/* IMAGE */}

        <div className="flex justify-center lg:justify-start">

          <div
            className="
              relative
              w-48
              h-48
            "
          >

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-[#3cb7ff]/20
                blur-2xl
              "
            ></div>

            <img
              src="/images/devesh.jpeg"
              alt="Devesh Siwal"
              className="
                relative
                w-full
                h-full
                object-cover
                rounded-full
                border-4
                border-white/10
              "
            />

          </div>

        </div>


        {/* CONTENT */}

        <div>

          <h2
            className="
              text-white
              text-4xl
              md:text-6xl
              font-semibold
              leading-tight
              mb-8
            "
          >

            Let’s Build
            <br />

            <span className="text-[#3cb7ff]">
              What’s Next
            </span>

          </h2>


          <p
            className="
              text-white/70
              text-lg
              leading-relaxed
              max-w-3xl
              mb-10
            "
          >

            I partner with organizations navigating growth,
            transformation, and scale — helping teams align
            execution with strategy while building systems
            that create measurable business impact.

          </p>


          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5">

            <a
              href="https://www.linkedin.com/in/ddevesh-siwal-8b84b729?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#3cb7ff]
                text-black
                font-semibold
                px-8
                py-4
                rounded-full
                hover:scale-105
                transition-all
                duration-300
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >

                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.936c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.632v3.867h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>

              </svg>

              Connect on LinkedIn

            </a>


            <a
              href="#contact"
              className="
                inline-flex
                items-center
                border
                border-white/10
                text-white
                px-8
                py-4
                rounded-full
                hover:border-[#3cb7ff]
                hover:text-[#3cb7ff]
                transition-all
                duration-300
              "
            >

              Start a Conversation

            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}