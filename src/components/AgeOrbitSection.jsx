import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const birthDate = new Date("1999-05-06T00:00:00");
const loveStartDate = new Date("2026-04-08T00:00:00");

function getElapsedParts(startDate, endDate) {
  const totalMs = Math.max(0, endDate.getTime() - startDate.getTime());

  return {
    days: Math.floor(totalMs / 86400000),
    hours: Math.floor(totalMs / 3600000),
  };
}

function getAgeParts(now) {
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMs = Math.max(0, now.getTime() - birthDate.getTime());
  const totalDays = Math.floor(totalMs / 86400000);
  const totalHours = Math.floor(totalMs / 3600000);
  const seconds = Math.floor(totalMs / 1000) % 60;

  return { years, months, days, totalDays, totalHours, seconds };
}

export default function AgeOrbitSection() {
  const [now, setNow] = useState(() => new Date());
  const age = useMemo(() => getAgeParts(now), [now]);
  const darkBeforeLove = useMemo(() => getElapsedParts(birthDate, loveStartDate), []);
  const lovedSinceThen = useMemo(() => getElapsedParts(loveStartDate, now), [now]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const orbitStats = [
    { label: "Years", value: age.years },
    { label: "Months", value: age.months },
    { label: "Days", value: age.days },
    { label: "Seconds now", value: age.seconds.toString().padStart(2, "0") },
  ];

  return (
    <section id="age-orbit" className="section-shell pt-8 sm:pt-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker">Age orbit</p>
          <h2 className="section-title">The universe has been lucky for this long.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/64">
            Since May 6, 1999, the clock has been quietly counting every moment
            since Nessma arrived and made the sky less empty.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9ee7d7]/75">Days of Shining</p>
              <p className="mt-3 font-display text-4xl text-[#fff7db]">{age.totalDays.toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#ffb3cf]/75">Hours of Glowing</p>
              <p className="mt-3 font-display text-4xl text-[#fff7db]">{age.totalHours.toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9ee7d7]/75">Dark days before you</p>
              <p className="mt-3 font-display text-4xl text-[#fff7db]">{darkBeforeLove.days.toLocaleString()}</p>
            </div>
            <div className="gold-stat-box rounded-lg p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#2c2108]/80">Hours I loved you in</p>
              <p className="mt-3 font-display text-4xl text-[#2c2108]">{lovedSinceThen.hours.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="age-orbit"
          aria-label={`${age.years} years, ${age.months} months, and ${age.days} days since Nessma was born`}
        >
          <div className="age-orbit-ring age-orbit-ring-one" />
          <div className="age-orbit-ring age-orbit-ring-two" />
          <div className="age-orbit-core">
            <p className="mt-3 font-display text-5xl leading-none text-[#fff7db] sm:text-7xl">
              {age.years}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/62">
              years of nouny
            </p>
          </div>
          {orbitStats.map((stat, index) => (
            <div key={stat.label} className={`age-orbit-stat age-orbit-stat-${index + 1}`}>
              <span>{stat.value}</span>
              <small>{stat.label}</small>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
