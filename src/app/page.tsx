"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, icons, Star } from "lucide-react";
import ImageHero from "@/components/ImageHero";
import Image from "next/image";
import ThreeDHero from "@/components/ThreeDHero";

export default function Home() {
  const features = [
    {
      title: "Recognition",
      desc: "ROAVAI recognises family members by face and voice — it knows who you are and greets you differently each time.",
    },
    {
      title: "Learning",
      desc: "It learns through play and rewards — bones make it happy, balls excite it, and sticks mean “not good.”",
    },
    {
      title: "Bonding",
      desc: "Over time, it develops its own personality, remembers routines, and reacts with emotion becoming your personal, always-there companion.",
    },
  ];

  const testimonials = [
    {
      quote: "ROAVAI feels alive. My kids think it’s part of the family now.",
      author: "Emma R., Mother of two",
      rating: 5,
    },

    {
      quote:
        "I’ve never seen anything learn and adapt like this. Mind-blowing.",
      author: "Dr. Alex Chen, Robotics Professor",
      rating: 5,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <ImageHero />
      </section>
      {/* HOW IT WILL WORK SECTION */}
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-center mb-6"
        >
          How it will Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 text-center max-w-3xl mb-20"
        >
          Take your first step towards ROAVAI One.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl w-full">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-10 hover:border-zinc-600 transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`text-5xl font-black bg-gradient-to-r ${
                    i === 0
                      ? "from-blue-500 to-cyan-400"
                      : i === 1
                      ? "from-purple-500 to-pink-500"
                      : "from-emerald-500 to-teal-400"
                  } bg-clip-text text-transparent`}
                >
                  {i + 1}
                </span>
                <h3 className="text-3xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center text-lg md:text-xl text-gray-500 max-w-5xl leading-relaxed"
        >
          Robotics One is a complex mecha-biology of passionately designed and
          engineered elements. Every motion and sound is deeply inspired by the
          life we experience, representing a fusion of human curiosity and
          precision robotics.
        </motion.p>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-20"
          >
            Loved by Early Believers
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-10"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xl italic text-gray-200 mb-6">"{t.quote}"</p>
                <p className="font-semibold text-lg">{t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Why Choose <span className="text-white">ROAVAI</span>
        </h2>

        <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between gap-10">
          {/* Left Features */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            {[
              {
                icon: "🧠",
                title: "Offline Smart AI",
                desc: "Works entirely without internet",
              },
              {
                icon: "👁️",
                title: "Camera & Vision",
                desc: "Detects people, gestures, and objects around it",
              },
              {
                icon: "🎤",
                title: "Voice Recognition",
                desc: "Understands simple commands and family voices.",
              },
              {
                icon: "🦌",
                title: "Expressive Motion",
                desc: "Realistic body language, tail wags, head tilts, and reactions.",
              },
              {
                icon: "⚡",
                title: "Auto-Charging Dock",
                desc: "Returns to its dock automatically when low on power.",
              },
              {
                icon: "🗺️",
                title: "Home Mapping",
                desc: "Learns boundaries and moves safely within your home.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-neutral-900 rounded-2xl p-4 md:p-6 shadow-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                  <span>{feature.icon}</span> {feature.title}
                </h3>

                {/* Description — only visible when hovering */}
                {feature.desc && (
                  <p
                    className="
            text-sm md:text-base text-neutral-400 mt-2
            opacity-0 group-hover:opacity-100
            translate-y-2 group-hover:translate-y-0
            transition-all duration-300
          "
                  >
                    {feature.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full md:w-2/3 relative flex justify-center items-center">
            <ThreeDHero />
          </div>
        </div>
      </section>
      );
    </>
  );
}
