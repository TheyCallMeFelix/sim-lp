'use client';

import SiteHeader from '@/components/siteheader';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero Section */}
      <section className="w-full min-h-svh flex flex-col items-center justify-center py-20 px-6  text-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        >
          <Image
            src="/icon.png"
            alt="PinDrop Logo"
            width={160}
            height={50}
            className="mx-auto mb-6"
          />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Bring the Game to You
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          PinDrop is a luxury mobile golf simulator experience delivered to your home, event, or private gathering. Book exotic courses. Swing real clubs. Zero travel.
        </p>

        <Link href="#how">
          <p className="mt-8 w-64 h-14 mx-auto flex items-center justify-center border-2 border-black text-white bg-black font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
            Get Early Access
          </p>
        </Link>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 px-6 bg-white text-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-600">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: 1,
              title: 'We Deliver',
              text: 'We bring our luxury mobile golf simulator to your location — home, event, or party.',
              image: '/step1.jpeg',
            },
            {
              step: 2,
              title: 'You Play',
              text: 'Tee off at iconic courses with real clubs and cutting-edge tracking. Rain or shine.',
              image: '/step2.jpeg',
            },
            {
              step: 3,
              title: 'All-Inclusive Fun',
              text: 'We handle setup, breakdown, and extras like club rentals & add-ons.',
              image: '/step3.jpeg',
            },
          ].map(({ step, title, text, image }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-md text-center hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold">
                {step}
              </div>
              <Image
                src={image}
                alt={title}
                width={400}
                height={150}
                className="mx-auto my-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lead Capture */}
      <section
        id="leadform"
        className="py-20 px-6 bg-gradient-to-t from-green-100 to-white text-center"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Be the First to Tee Off
        </h2>
        <p className="text-gray-700 max-w-md mx-auto mb-6">
          Join our waitlist and be notified when PinDrop launches in your area.
        </p>
        <form className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="you@email.com"
            className="w-full md:w-2/3 h-12 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="h-12 px-6 rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black border border-black transition"
          >
            Notify Me
          </button>
        </form>
      </section>
    </>
  );
}
