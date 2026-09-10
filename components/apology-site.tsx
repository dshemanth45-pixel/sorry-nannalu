"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Heart,
  HeartHandshake,
  Mail,
  Menu,
  Sparkles,
  Stars,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "./ui/button";
import { Card } from "./ui/card";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PERSONALIZE THESE
========================================================= */

const GIRLFRIEND_NAME = "My Love";

const APOLOGY_INTRO =
  "I know that saying “I'm sorry” cannot undo what happened. But I still need you to know that I understand I hurt you, I regret it deeply, and I never wanted my actions to make you feel the way they did.";

const PERSONAL_MESSAGE = `
I have thought a lot about what happened.

What I did was wrong, and I don't want to make excuses for it.
You deserved better from me in that moment.

I regret not thinking about how my words and actions would affect you.
More than anything, I'm sorry for making someone I love feel hurt,
unheard, or unimportant.

I'm not asking you to forget what happened.
I'm asking for the chance to show you that I have understood it,
learned from it, and can do better.

You mean much more to me than my pride ever should.
`;

const QUOTES = [
  {
    number: "01",
    text: "Sometimes the hardest words to say are the ones we should have said first: I am sorry.",
  },
  {
    number: "02",
    text: "I cannot rewrite yesterday, but I can choose to be better tomorrow.",
  },
  {
    number: "03",
    text: "A sincere apology is not asking you to forget. It is promising to remember.",
  },
  {
    number: "04",
    text: "If my actions made your heart heavy, I am truly sorry. You deserved gentleness from me.",
  },
  {
    number: "05",
    text: "I would rather swallow my pride and say sorry than let my pride stand between us.",
  },
  {
    number: "06",
    text: "I don't want a perfect relationship. I want a real one where we learn, repair, and choose each other.",
  },
];

const SAYING_SORRY = [
  "I'm sorry for the things I said without thinking.",
  "I'm sorry for the moment when I made you feel less important than you are.",
  "I'm sorry for not listening the way I should have.",
  "I'm sorry for allowing a temporary emotion to hurt something I deeply value.",
];

const TIMELINE = [
  {
    year: "THEN",
    title: "The beginning",
    text: "Somehow, two separate lives became a shared story.",
  },
  {
    year: "SINCE",
    title: "All the little moments",
    text: "The conversations, laughter, silly memories, quiet moments and everything between them.",
  },
  {
    year: "NOW",
    title: "This apology",
    text: "A reminder that love also means taking responsibility when we get things wrong.",
  },
  {
    year: "NEXT",
    title: "What I want",
    text: "To listen better, communicate better, and give you the care you deserve.",
  },
];

/* =========================================================
   Floating hearts
========================================================= */

function AmbientHearts() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  const count = isMobile ? 10 : 18;
  const hearts = Array.from({ length: count });
  const winHeight = typeof window !== "undefined" ? window.innerHeight : 1000;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      {hearts.map((_, index) => {
        const left = 6 + ((index * 31) % 88);
        const delay = (index % 6) * 0.9;
        const duration = 7 + (index % 5);

        return (
          <motion.div
            key={index}
            className="absolute text-rose/25"
            style={{
              left: `${left}%`,
              bottom: "-40px",
            }}
            animate={{
              y: [-20, -winHeight - 120],
              x: [0, index % 2 === 0 ? 20 : -20],
              rotate: [0, index % 2 === 0 ? 25 : -25],
              opacity: [0, 0.45, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart
              size={12 + (index % 4) * 4}
              fill="currentColor"
              strokeWidth={1}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

/* =========================================================
   Navigation
========================================================= */

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    ["letter", "Letter"],
    ["words", "Words"],
    ["story", "Our Story"],
    ["answer", "Your Answer"],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 py-3 sm:px-6 sm:py-4 md:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-wine/10 bg-cream/80 px-3.5 py-2 shadow-lg shadow-wine/5 backdrop-blur-xl sm:px-5 sm:py-2.5">
        <a
          href="#top"
          className="flex items-center gap-2 text-xs font-semibold tracking-tight text-wine sm:text-sm"
        >
          <span className="grid size-7 place-items-center rounded-full bg-wine text-white sm:size-8">
            <Heart size={13} fill="currentColor" />
          </span>
          <span className="hidden xs:inline sm:inline">A letter for you</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={`#${href}`}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-wine/70 transition hover:bg-wine/5 hover:text-wine md:px-4 md:py-2"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#answer"
            className="rounded-full bg-wine px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-xs"
          >
            Forgive me?
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid size-8 place-items-center rounded-full text-wine/80 hover:bg-wine/5 sm:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-sm rounded-2xl border border-wine/10 bg-cream/95 p-3 shadow-xl backdrop-blur-2xl sm:hidden"
          >
            <div className="flex flex-col space-y-1">
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-wine/80 transition hover:bg-wine/10 hover:text-wine"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =========================================================
   Hero
========================================================= */

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>(".hero-char");

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 45,
          rotateX: -80,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.15,
          stagger: 0.035,
          ease: "power4.out",
          delay: 0.35,
        }
      );

      gsap.fromTo(
        ".hero-copy",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.15,
          ease: "power3.out",
        }
      );

      gsap.to(".hero-orb", {
        yPercent: -35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-heart", {
        yPercent: 100,
        rotate: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef }
  );

  const words = ["I'm", "Sorry"];

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 md:px-10 md:pt-36"
    >
      <div className="ambient-orb orb-one hero-orb absolute -left-20 top-16 sm:-left-24 sm:top-20" />
      <div className="ambient-orb orb-two absolute -right-16 bottom-16 sm:-right-20 sm:bottom-20" />

      <div
        className="hero-heart absolute right-[6%] top-[22%] hidden text-rose/20 md:block"
        aria-hidden="true"
      >
        <Heart size={160} className="lg:size-[190px]" fill="currentColor" strokeWidth={0.5} />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <div className="mb-6 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-wine/60 sm:mb-8 sm:gap-3 sm:text-xs sm:tracking-[0.28em]">
          <span className="h-px w-8 bg-wine/30 sm:w-10" />
          A letter I owe you
        </div>

        <h1 className="hero-title max-w-5xl text-[clamp(3.5rem,14vw,11.5rem)] font-medium text-wine">
          {words.map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
            >
              {word.split("").map((char, charIndex) => (
                <span
                  key={`${char}-${charIndex}`}
                  className="hero-char inline-block"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="hero-copy mt-8 grid max-w-4xl gap-6 sm:mt-10 sm:gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">
          <p className="text-base leading-7 text-ink/70 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            {APOLOGY_INTRO}
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:justify-end">
            <a href="#letter" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Read my letter
                <ArrowDown className="ml-2" size={17} />
              </Button>
            </a>

            <span className="text-[11px] uppercase tracking-[0.2em] text-wine/50 sm:text-xs">
              For {GIRLFRIEND_NAME}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-wine/30 sm:bottom-8">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   Letter section
========================================================= */

function LetterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".letter-reveal",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );

      gsap.to(".letter-card", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="letter"
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.65fr_1fr] md:gap-16 lg:gap-24">
          <div>
            <p className="letter-reveal mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-rose sm:mb-5 sm:text-xs sm:tracking-[0.25em]">
              01 / My letter
            </p>

            <h2 className="section-title letter-reveal text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-wine">
              I want to say this properly.
            </h2>

            <p className="letter-reveal mt-4 max-w-md text-xs leading-6 text-ink/60 sm:mt-7 sm:text-sm sm:leading-7">
              Not to defend myself. Not to make the situation smaller.
              Just to take responsibility and tell you what I should have
              told you sooner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-blush/20 blur-2xl sm:-inset-8 sm:rounded-[3rem] sm:blur-3xl" />

            <Card className="letter-card relative rounded-2xl border-wine/10 bg-[#fffdfb]/90 p-5 shadow-romantic backdrop-blur sm:rounded-[2rem] sm:p-8 md:p-12">
              <div className="mb-8 flex items-start justify-between sm:mb-12">
                <div>
                  <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-wine">
                    Dear {GIRLFRIEND_NAME},
                  </p>
                </div>

                <Mail className="text-rose/50" size={22} />
              </div>

              <div className="whitespace-pre-line text-sm leading-7 text-ink/75 sm:text-base sm:leading-8 md:text-lg md:leading-9 font-serif">
                {PERSONAL_MESSAGE}
              </div>

              <div className="mt-10 border-t border-wine/10 pt-6 sm:mt-14 sm:pt-7">
                <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-wine">
                  I am sorry.
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ink/40 sm:text-xs">
                  And I mean it.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Quote section
========================================================= */

function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".quote-item",
        {
          opacity: 0,
          y: 50,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="words"
      className="relative overflow-hidden bg-paper px-4 py-20 sm:px-8 sm:py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl sm:mb-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-rose sm:mb-5 sm:text-xs sm:tracking-[0.25em]">
            02 / Forgive me
          </p>

          <h2 className="section-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-wine">
            A few words that say what I can't always say.
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {QUOTES.map((quote) => (
            <motion.div
              key={quote.number}
              className="quote-item"
              whileHover={{
                y: -5,
                rotate: quote.number === "02" ? 0.3 : -0.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Card className="quote-card flex min-h-[220px] flex-col justify-between rounded-2xl p-5 sm:min-h-[270px] sm:rounded-[2rem] sm:p-7 md:p-9">
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="font-mono text-xs text-rose">
                    {quote.number}
                  </span>

                  <p className="my-6 font-serif text-lg leading-relaxed text-wine sm:my-8 sm:text-2xl md:text-3xl">
                    “{quote.text}”
                  </p>

                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/40 sm:text-xs">
                    <Heart size={12} fill="currentColor" />
                    From my heart
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Saying sorry
========================================================= */

function SayingSorry() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".sorry-line",
        {
          opacity: 0,
          x: -25,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-28 md:px-10 md:py-36"
    >
      <div className="ambient-orb orb-one absolute -right-24 top-1/3 opacity-40 sm:right-[-180px]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1fr] md:gap-16 lg:gap-28">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-rose sm:mb-5 sm:text-xs sm:tracking-[0.25em]">
              Saying sorry
            </p>

            <h2 className="section-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-wine">
              If I could say it a thousand ways...
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {SAYING_SORRY.map((message, index) => (
              <motion.div
                key={message}
                className="sorry-line group flex items-start gap-3 rounded-2xl border-b border-wine/10 py-4 sm:gap-5 sm:py-6"
                whileHover={{ x: 6 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
              >
                <span className="shrink-0 pt-1 font-mono text-xs text-rose">
                  0{index + 1}
                </span>

                <p className="max-w-xl font-serif text-lg leading-relaxed text-ink/80 sm:text-xl md:text-2xl">
                  {message}
                </p>

                <ArrowUpRight
                  size={18}
                  className="ml-auto shrink-0 text-wine/30 transition group-hover:text-wine"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Relationship timeline
========================================================= */

function StoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".timeline-progress",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".timeline-item",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="story"
      className="bg-wine px-4 py-20 text-white sm:px-8 sm:py-28 md:px-10 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl sm:mb-20">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-blush sm:mb-5 sm:text-xs sm:tracking-[0.25em]">
            03 / Our story
          </p>

          <h2 className="section-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            One mistake isn't the whole story.
          </h2>

          <p className="mt-4 text-xs leading-6 text-white/60 sm:mt-7 sm:text-sm sm:leading-7">
            I don't want one difficult moment to erase everything beautiful
            we've built. I want it to become something we learn from.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical progress rail (Mobile: left-3.5 = 14px; Desktop: left-[180px]) */}
          <div className="absolute bottom-2 top-2 left-[14px] w-[2px] bg-white/15 md:left-[180px]" />
          <div className="timeline-progress absolute bottom-2 top-2 left-[14px] w-[2px] origin-top bg-blush shadow-[0_0_12px_rgba(233,191,196,0.6)] md:left-[180px]" />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="timeline-item relative flex flex-col md:grid md:grid-cols-[180px_1fr] md:gap-12"
              >
                {/* Desktop Year column */}
                <div className="hidden md:flex items-start justify-end pr-10">
                  <span className="font-mono text-xs tracking-widest text-blush font-medium">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Content Block (Mobile has left padding to clear the vertical rail) */}
                <div className="relative pl-10 sm:pl-12 md:pl-0">
                  {/* Timeline Node Bead centered on the rail */}
                  <div className="absolute left-[8px] top-1.5 size-3.5 rounded-full border-2 border-wine bg-blush shadow-[0_0_10px_rgba(233,191,196,0.8)] md:-left-[54px] md:top-2 sm:size-4 md:size-4" />

                  {/* Mobile Year Badge */}
                  <div className="mb-2 md:hidden">
                    <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-blush font-semibold">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-xl text-xs leading-6 text-white/65 sm:mt-3.5 sm:text-sm sm:leading-7 md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Forgiveness interaction
========================================================= */

function ForgivenessSection() {
  const [response, setResponse] = useState<
    "forgive" | "time" | "none"
  >("none");

  const [timeButtonPos, setTimeButtonPos] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);

  const moveTimeButton = (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 640;
    const maxRangeX = isMobile ? 120 : 260;
    const maxRangeY = isMobile ? 100 : 160;

    // Pick a new position noticeably different from the current position
    let newX = 0;
    let newY = 0;
    do {
      const signX = Math.random() > 0.5 ? 1 : -1;
      const signY = Math.random() > 0.5 ? 1 : -1;
      newX = signX * (50 + Math.random() * (maxRangeX - 50));
      newY = signY * (40 + Math.random() * (maxRangeY - 40));
    } while (
      Math.abs(newX - timeButtonPos.x) < 60 &&
      Math.abs(newY - timeButtonPos.y) < 50
    );

    setTimeButtonPos({ x: newX, y: newY });
    setDodgeCount((prev) => prev + 1);
  };

  const handleForgive = () => {
    setResponse("forgive");
    setTimeButtonPos({ x: 0, y: 0 });
  };

  const handleReset = () => {
    setResponse("none");
    setTimeButtonPos({ x: 0, y: 0 });
    setDodgeCount(0);
  };

  return (
    <section
      id="answer"
      className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-32 md:px-10 md:py-44"
    >
      <div className="absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/25 blur-[80px] sm:size-[500px] sm:blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 grid size-14 place-items-center rounded-full bg-white shadow-romantic sm:mb-7 sm:size-16">
          <Heart
            className="text-rose"
            size={24}
            fill="currentColor"
          />
        </div>

        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-rose sm:mb-5 sm:text-xs sm:tracking-[0.25em]">
          04 / Your answer
        </p>

        <h2 className="section-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-wine">
          Will you forgive me?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ink/65 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
          You don't have to answer immediately. You don't have to pretend
          everything is okay. I just want you to know that I'm listening,
          I'm sorry, and I care about how you feel.
        </p>

        <AnimatePresence mode="wait">
          {response === "none" ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row items-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => {
                  setTimeButtonPos({ x: 0, y: 0 });
                  setDodgeCount(0);
                }}
                onTouchStart={() => {
                  setTimeButtonPos({ x: 0, y: 0 });
                  setDodgeCount(0);
                }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto" onClick={handleForgive}>
                  <HeartHandshake className="mr-2" size={18} />
                  I forgive you
                </Button>
              </motion.div>

              <motion.div
                animate={{
                  x: timeButtonPos.x,
                  y: timeButtonPos.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 20,
                }}
                onMouseEnter={moveTimeButton}
                onMouseDown={moveTimeButton}
                onPointerDown={moveTimeButton}
                onTouchStart={moveTimeButton}
                className="w-full sm:w-auto relative z-20"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto transition-colors select-none pointer-events-auto"
                  onClick={moveTimeButton}
                  onMouseDown={moveTimeButton}
                  onTouchStart={moveTimeButton}
                >
                  {dodgeCount === 0
                    ? "I need some time"
                    : dodgeCount === 1
                    ? "Are you sure? 🥺"
                    : dodgeCount === 2
                    ? "Think again! 💭"
                    : dodgeCount === 3
                    ? "Nice try! 🏃💨"
                    : dodgeCount === 4
                    ? "Can't click this! ✨"
                    : dodgeCount === 5
                    ? "Please forgive me ❤️"
                    : "You must forgive me! 😉"}
                </Button>
              </motion.div>
            </motion.div>
          ) : response === "forgive" ? (
            <motion.div
              key="forgiven"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className="mx-auto mt-10 max-w-xl rounded-2xl border border-rose/20 bg-white/75 p-6 shadow-romantic backdrop-blur sm:mt-12 sm:rounded-[2rem] sm:p-8"
            >
              <Stars
                className="mx-auto mb-4 text-rose sm:mb-5"
                size={26}
              />

              <p className="font-handwriting text-4xl sm:text-5xl text-wine">
                Thank you.
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/65 sm:mt-4 sm:text-sm sm:leading-7">
                I won't treat your forgiveness casually. I'll let my
                actions prove that I learned from this.
              </p>

              <button
                onClick={handleReset}
                className="mt-6 text-[11px] uppercase tracking-widest text-wine/50 hover:text-wine sm:mt-7 sm:text-xs"
              >
                Change response
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="time"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-10 max-w-xl rounded-2xl border border-wine/10 bg-white/75 p-6 shadow-romantic backdrop-blur sm:mt-12 sm:rounded-[2rem] sm:p-8"
            >
              <Heart
                className="mx-auto mb-4 text-rose sm:mb-5"
                size={26}
              />

              <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-wine">
                Take all the time you need.
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/65 sm:mt-4 sm:text-sm sm:leading-7">
                I understand. I won't pressure you for an answer.
                Your feelings matter to me.
              </p>

              <button
                onClick={handleReset}
                className="mt-6 text-[11px] uppercase tracking-widest text-wine/50 hover:text-wine sm:mt-7 sm:text-xs"
              >
                Go back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* =========================================================
   Footer
========================================================= */

function Footer() {
  return (
    <footer className="border-t border-wine/10 bg-[#f3e9e3] px-4 py-16 sm:px-8 sm:py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
          <div>
            <Heart
              className="mb-5 text-rose sm:mb-7"
              size={26}
              fill="currentColor"
            />

            <h2 className="section-title max-w-2xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-wine">
              I'm still choosing us.
            </h2>

            <p className="mt-4 max-w-lg text-xs leading-6 text-ink/60 sm:mt-7 sm:text-sm sm:leading-7">
              Whatever happens next, I wanted you to have one place where
              you could see my apology without interruptions, excuses, or
              distractions.
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="font-handwriting text-3xl sm:text-4xl text-wine">
              With love,
            </p>

            <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-ink/40 sm:text-xs">
              Me
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-wine/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-ink/35 sm:mt-20 sm:flex-row sm:pt-6 sm:text-[11px]">
          <span>Made with sincerity</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   Main application
========================================================= */

export default function ApologySite() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="paper-texture min-h-screen overflow-hidden bg-cream"
    >
      <AmbientHearts />
      <Navigation />

      <Hero />
      <LetterSection />
      <QuoteSection />
      <SayingSorry />
      <StoryTimeline />
      <ForgivenessSection />
      <Footer />
    </main>
  );
}
