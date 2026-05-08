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

    const totalSlides = 5;

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
            25 Years of Building What Lasts
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
        desc: "Formulating sustainable business strategies that survive real-world pressure and create measurable long-term growth."
      },

      {
        title: "Brand & Business Development",
        desc: "Building brands that command trust, strengthen positioning, and create meaningful market relevance."
      },

      {
        title: "Sales & Operational Excellence",
        desc: "Driving profitability through disciplined operations, scalable systems, and high-performance execution."
      },

      {
        title: "Organizational Development",
        desc: "Designing cultures and leadership ecosystems where accountability and growth thrive together."
      },

      {
        title: "Financial Planning & P&L Ownership",
        desc: "Leading financial stewardship with disciplined planning, cost optimization, and sustainable profitability."
      },

      {
        title: "Go-to-Market Execution",
        desc: "Transforming strategic vision into measurable traction through launch execution and market positioning."
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
              Industry expertise spanning both legacy structures
              and digital disruption.
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
  id="skills"
  className="blue-gradient py-28 overflow-hidden"
>

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-20">

      <h2 className="hero-text text-white mb-4">
              <span className="section-title reveal-title">
              KEY SKILLS
            </span>
            </h2>

    

    </div>

  </div>

  {/* MARQUEE */}
  <div className="skills-marquee">

    <div className="skills-track">

      {[
        "Strategic Planning",
        "Brand Development",
        "Operational Excellence",
        "Distribution Strategy",
        "Business Development",
        "P&L Ownership",
        "Team Leadership",
        "Go-to-Market",
        "Financial Planning",
        "Organizational Design",
        "Product Launches",
        "Customer Experience",

        /* DUPLICATE FOR SMOOTH LOOP */

        "Strategic Planning",
        "Brand Development",
        "Operational Excellence",
        "Distribution Strategy",
        "Business Development",
        "P&L Ownership",
        "Team Leadership",
        "Go-to-Market",
        "Financial Planning",
        "Organizational Design",
        "Product Launches",
        "Customer Experience"

      ].map((skill, index) => (

        <div
          key={index}
          className="skill-pill"
        >
          {skill}
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

    </main>
  );
}