import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const CONFIG = {
  brand: "HOLOLOGS",
  tokenSymbol: "$HOLO",
  contractAddress: "CAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  links: {
    buy: "https://pump.fun/",
    twitter: "https://twitter.com/",
    dexscreener: "https://dexscreener.com/",
    telegram: "https://t.me/"
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Section = ({ id, children }) => (
  <section id={id} className="relative py-28 sm:py-32 px-6 container mx-auto max-w-6xl">
    {children}
  </section>
);

const GlassCard = ({ title, children }) => (
  <motion.div
    variants={fadeUp}
    className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 shadow-lg"
  >
    <h3 className="text-2xl font-bold text-white mb-4 glitch" data-text={title}>{title}</h3>
    <div className="text-white/80">{children}</div>
  </motion.div>
);

function Hero() {
  return (
    <Section id="top">
      <div className="absolute inset-0 -z-10">
        <Particles
          options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: { events: { resize: true } },
            particles: {
              color: { value: "#ffffff" },
              move: { enable: true, speed: 0.2 },
              number: { value: 100 },
              opacity: { value: 0.5 },
              size: { value: 1 },
            },
          }}
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center"
      >
        <h1 className="text-6xl sm:text-8xl font-extrabold leading-tight text-white glitch" data-text={CONFIG.brand}>
          {CONFIG.brand}
        </h1>
        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Explore surreal markets where memes, liquidity, and legends collide.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href={CONFIG.links.buy} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 hover:bg-emerald-500/30">Buy {CONFIG.tokenSymbol}</a>
          <a href={CONFIG.links.twitter} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl bg-white/10 border border-white/30 text-white hover:bg-white/20">Twitter</a>
        </div>
      </motion.div>
      <div className="mt-16 h-[400px] w-full">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[1.2, 64, 64]}>
            <meshStandardMaterial attach="material" color="#4ade80" roughness={0.3} metalness={0.8} wireframe />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </Section>
  );
}

function Features() {
  const items = [
    { title: "White Dimension", desc: "Endless space where legends rest." },
    { title: "Ledger Halls", desc: "Corridors of blocks whisper forgotten prices." },
    { title: "Orderbook Walls", desc: "Living walls of red & green collide." },
    { title: "Rug Sea", desc: "Ocean of wrecked projects and sirens." },
  ];
  return (
    <Section id="features">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-8 md:grid-cols-2">
        {items.map((it, i) => (
          <GlassCard key={i} title={it.title}>{it.desc}</GlassCard>
        ))}
      </motion.div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60 text-center">
      © {new Date().getFullYear()} {CONFIG.brand}. Not financial advice.
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Features />
      <Footer />
      <style>{`
        .glitch {
          position: relative;
          color: white;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
          color: #f00;
          z-index: -1;
        }
        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
          color: #0ff;
          z-index: -2;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
          10% { clip: rect(10px, 9999px, 40px, 0); transform: translate(-5px, -5px); }
          20% { clip: rect(85px, 9999px, 140px, 0); transform: translate(-5px, 5px); }
          30% { clip: rect(10px, 9999px, 80px, 0); transform: translate(5px, -5px); }
          40% { clip: rect(40px, 9999px, 100px, 0); transform: translate(5px, 5px); }
          50%,100% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
          10% { clip: rect(55px, 9999px, 90px, 0); transform: translate(5px, 5px); }
          20% { clip: rect(20px, 9999px, 60px, 0); transform: translate(-5px, -5px); }
          30% { clip: rect(65px, 9999px, 120px, 0); transform: translate(5px, -5px); }
          40% { clip: rect(30px, 9999px, 70px, 0); transform: translate(-5px, 5px); }
          50%,100% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
        }
      `}</style>
    </div>
  );
}
