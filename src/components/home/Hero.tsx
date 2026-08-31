"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { fadeUp, staggerContainer, NOVA_EASE } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative section-pad pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Independent &amp; Open Source Collective</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.75rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
          >
            Software Built for Rebels. By Rebels.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted"
          >
            We are a parent group of independent developers building
            high-quality, privacy-focused, and fully auditable applications to
            solve the root problems of digital sovereignty. Powering products
            like Omni Browser, MOCNovel, CampCart, Ved Astra, and MOC Office.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href="https://github.com/REBEL-ROOT"
              target="_blank"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Support on GitHub
            </Button>

            <Button href="/products" variant="secondary" size="lg">
              Our products
            </Button>
          </motion.div>
        </motion.div>

        <DigitalBrainIllustration />
      </div>
    </section>
  );
}

function DigitalBrainIllustration() {
  const neuralNodes = useMemo(() => {
    const nodes: {
      x: number;
      y: number;
      side: "left" | "right";
    }[] = [];

    // LEFT hemisphere
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 6; col++) {
        const x = 112 + col * 15 + (row % 2) * 5;
        const y = 112 + row * 19;

        // Elliptical brain boundary
        const dx = (x - 160) / 72;
        const dy = (y - 195) / 95;

        if (dx * dx + dy * dy < 1) {
          nodes.push({
            x,
            y,
            side: "left",
          });
        }
      }
    }

    // RIGHT hemisphere
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 6; col++) {
        const x = 288 - col * 15 - (row % 2) * 5;
        const y = 112 + row * 19;

        const dx = (x - 240) / 72;
        const dy = (y - 195) / 95;

        if (dx * dx + dy * dy < 1) {
          nodes.push({
            x,
            y,
            side: "right",
          });
        }
      }
    }

    return nodes;
  }, []);

  const connections = useMemo(() => {
    return neuralNodes.flatMap((node, index) => {
      const nearest = neuralNodes
        .map((other, otherIndex) => ({
          other,
          otherIndex,
          distance: Math.hypot(
            node.x - other.x,
            node.y - other.y
          ),
        }))
        .filter(
          ({ other, otherIndex, distance }) =>
            otherIndex > index &&
            distance < 25 &&
            other.side === node.side
        )
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);

      return nearest.map(({ other }) => ({
        x1: node.x,
        y1: node.y,
        x2: other.x,
        y2: other.y,
        side: node.side,
      }));
    });
  }, [neuralNodes]);

  const featureNodes = [
    {
      x: 200,
      y: 28,
      label: "PRIVACY",
      icon: "♙",
      color: "#4C8DFF",
      lineX: 200,
      lineY: 108,
    },
    {
      x: 78,
      y: 92,
      label: "SECURITY",
      icon: "◇",
      color: "#4C8DFF",
      lineX: 120,
      lineY: 125,
    },
    {
      x: 322,
      y: 92,
      label: "OPEN SOURCE",
      icon: "</>",
      color: "#8B5CF6",
      lineX: 280,
      lineY: 125,
    },
    {
      x: 32,
      y: 210,
      label: "WEB",
      icon: "◎",
      color: "#20D9B5",
      lineX: 92,
      lineY: 210,
    },
    {
      x: 368,
      y: 210,
      label: "AI",
      icon: "✦",
      color: "#8B5CF6",
      lineX: 308,
      lineY: 210,
    },
    {
      x: 78,
      y: 325,
      label: "TOOLS",
      icon: "▣",
      color: "#20D9B5",
      lineX: 115,
      lineY: 285,
    },
    {
      x: 322,
      y: 325,
      label: "DATA SOVEREIGNTY",
      icon: "◉",
      color: "#4C8DFF",
      lineX: 285,
      lineY: 285,
    },
    {
      x: 200,
      y: 405,
      label: "COMMUNITY",
      icon: "♟",
      color: "#8B5CF6",
      lineX: 200,
      lineY: 305,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: NOVA_EASE,
        delay: 0.2,
      }}
      className="relative mx-auto hidden aspect-square w-full max-w-[560px] min-[1020px]:block"
      aria-hidden="true"
    >
      {/* Main atmospheric glow */}
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(76,141,255,0.14),transparent_62%)] blur-3xl" />

      <svg
        viewBox="0 0 400 440"
        className="relative h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          {/* BLUE → PURPLE */}
          <linearGradient
            id="brainNeuralGradient"
            x1="80"
            y1="180"
            x2="320"
            y2="180"
          >
            <stop offset="0%" stopColor="#2388FF" />
            <stop offset="45%" stopColor="#4C8DFF" />
            <stop offset="55%" stopColor="#7566FF" />
            <stop offset="100%" stopColor="#9B5CFF" />
          </linearGradient>

          <linearGradient
            id="brainStrokeGradient"
            x1="75"
            y1="160"
            x2="325"
            y2="160"
          >
            <stop offset="0%" stopColor="#2388FF" />
            <stop offset="50%" stopColor="#5B8FFF" />
            <stop offset="100%" stopColor="#9B5CFF" />
          </linearGradient>

          <radialGradient id="brainCoreGlow">
            <stop
              offset="0%"
              stopColor="#DCEBFF"
              stopOpacity="1"
            />
            <stop
              offset="20%"
              stopColor="#76A8FF"
              stopOpacity="0.95"
            />
            <stop
              offset="55%"
              stopColor="#4C8DFF"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="#4C8DFF"
              stopOpacity="0"
            />
          </radialGradient>

          <radialGradient id="brainAmbient">
            <stop
              offset="0%"
              stopColor="#4C8DFF"
              stopOpacity="0.2"
            />
            <stop
              offset="55%"
              stopColor="#6B6EFF"
              stopOpacity="0.08"
            />
            <stop
              offset="100%"
              stopColor="#8B5CF6"
              stopOpacity="0"
            />
          </radialGradient>

          <filter id="brainGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          <filter id="smallGlow">
            <feGaussianBlur stdDeviation="2" />
          </filter>

          {/* LEFT BRAIN */}
          <clipPath id="leftBrain">
            <path
              d="
                M198 116 
                C183 97 163 91 143 95 
                C119 99 100 114 92 134 
                C81 142 77 157 79 171 
                C66 184 65 204 73 218 
                C69 236 79 252 94 259 
                C93 279 107 294 125 296 
                C132 314 150 321 166 312 
                C179 320 192 309 198 294 
                Z
              "
            />
          </clipPath>

          {/* RIGHT BRAIN */}
          <clipPath id="rightBrain">
            <path
              d="
                M202 116 
                C217 97 237 91 257 95 
                C281 99 300 114 308 134 
                C319 142 323 157 321 171 
                C334 184 335 204 327 218 
                C331 236 321 252 306 259 
                C307 279 293 294 275 296 
                C268 314 250 321 234 312 
                C221 320 208 309 202 294 
                Z
              "
            />
          </clipPath>
        </defs>

        {/* BACKGROUND AURA */}
        <ellipse
          cx="200"
          cy="210"
          rx="145"
          ry="145"
          fill="url(#brainAmbient)"
        />

        {/* Tiny floating particles */}
        {[
          [74, 132],
          [91, 102],
          [112, 76],
          [139, 65],
          [260, 70],
          [288, 91],
          [312, 120],
          [329, 145],
          [66, 245],
          [341, 250],
          [98, 330],
          [300, 330],
        ].map(([cx, cy], i) => (
          <circle
            key={`particle-${i}`}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 1.5 : 0.8}
            fill={i % 2 === 0 ? "#4C8DFF" : "#8B5CF6"}
            opacity={0.45}
            className="animate-pulse-soft"
          />
        ))}

        {/* FEATURE CONNECTIONS */}
        {featureNodes.map((node) => (
          <g key={node.label}>
            <line
              x1={node.x}
              y1={node.y}
              x2={node.lineX}
              y2={node.lineY}
              stroke={node.color}
              strokeWidth="0.8"
              strokeOpacity="0.55"
            />

            <circle
              cx={node.lineX}
              cy={node.lineY}
              r="2"
              fill={node.color}
              opacity="0.9"
            />
          </g>
        ))}

        {/* LEFT BRAIN OUTER GLOW */}
        <path
          d="
            M198 116 
            C183 97 163 91 143 95 
            C119 99 100 114 92 134 
            C81 142 77 157 79 171 
            C66 184 65 204 73 218 
            C69 236 79 252 94 259 
            C93 279 107 294 125 296 
            C132 314 150 321 166 312 
            C179 320 192 309 198 294 
            Z
          "
          stroke="#4C8DFF"
          strokeWidth="5"
          strokeOpacity="0.18"
          filter="url(#brainGlow)"
        />

        {/* RIGHT BRAIN OUTER GLOW */}
        <path
          d="
            M202 116 
            C217 97 237 91 257 95 
            C281 99 300 114 308 134 
            C319 142 323 157 321 171 
            C334 184 335 204 327 218 
            C331 236 321 252 306 259 
            C307 279 293 294 275 296 
            C268 314 250 321 234 312 
            C221 320 208 309 202 294 
            Z
          "
          stroke="#8B5CF6"
          strokeWidth="5"
          strokeOpacity="0.18"
          filter="url(#brainGlow)"
        />

        {/* LEFT BRAIN */}
        <path
          d="
            M198 116 
            C183 97 163 91 143 95 
            C119 99 100 114 92 134 
            C81 142 77 157 79 171 
            C66 184 65 204 73 218 
            C69 236 79 252 94 259 
            C93 279 107 294 125 296 
            C132 314 150 321 166 312 
            C179 320 192 309 198 294 
            Z
          "
          fill="rgba(38,112,255,0.07)"
          stroke="#4C8DFF"
          strokeWidth="1.4"
          strokeOpacity="0.8"
        />

        {/* RIGHT BRAIN */}
        <path
          d="
            M202 116 
            C217 97 237 91 257 95 
            C281 99 300 114 308 134 
            C319 142 323 157 321 171 
            C334 184 335 204 327 218 
            C331 236 321 252 306 259 
            C307 279 293 294 275 296 
            C268 314 250 321 234 312 
            C221 320 208 309 202 294 
            Z
          "
          fill="rgba(139,92,246,0.07)"
          stroke="#8B5CF6"
          strokeWidth="1.4"
          strokeOpacity="0.8"
        />

        {/* NEURAL CONNECTIONS */}
        {connections.map((line, i) => (
          <line
            key={`connection-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={
              line.side === "left"
                ? "#4C8DFF"
                : "#8B5CF6"
            }
            strokeWidth="0.65"
            strokeOpacity="0.6"
          />
        ))}

        {/* CROSS-HEMISPHERE CONNECTIONS */}
        {[
          [185, 135, 215, 135],
          [180, 155, 220, 155],
          [177, 178, 223, 178],
          [176, 200, 224, 200],
          [178, 222, 222, 222],
          [181, 244, 219, 244],
          [187, 267, 213, 267],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={`cross-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#brainNeuralGradient)"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />
        ))}

        {/* NEURAL NODES */}
        {neuralNodes.map((node, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={
                node.side === "left"
                  ? "#4C8DFF"
                  : "#9B6CFF"
              }
              opacity="0.15"
              filter="url(#smallGlow)"
            />

            <circle
              cx={node.x}
              cy={node.y}
              r={i % 5 === 0 ? "2.2" : "1.5"}
              fill={
                node.side === "left"
                  ? "#69A5FF"
                  : "#AD7CFF"
              }
              className={
                i % 7 === 0
                  ? "animate-pulse-soft"
                  : ""
              }
            />
          </g>
        ))}

        {/* CENTRAL VERTICAL DIVISION */}
        <path
          d="
            M200 112 
            C195 135 204 154 198 176 
            C204 198 196 220 201 241 
            C196 263 204 281 200 302
          "
          stroke="#DDE9FF"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* CENTRAL CORE GLOW */}
        <circle
          cx="200"
          cy="210"
          r="55"
          fill="url(#brainCoreGlow)"
          opacity="0.35"
        />

        <circle
          cx="200"
          cy="210"
          r="40"
          stroke="#4C8DFF"
          strokeWidth="1"
          strokeOpacity="0.25"
        />

        <circle
          cx="200"
          cy="210"
          r="34"
          fill="none"
          stroke="url(#brainNeuralGradient)"
          strokeWidth="1.8"
        />

        <circle
          cx="200"
          cy="210"
          r="28"
          fill="none  "
          stroke="#7BA5FF"
          strokeOpacity="0.3"
        />

        {/* REBELROOT LOGO */}
        <g transform="translate(182 198) scale(0.13)">
           
          <path
            d="
              M66 13
              L54 22
              L50 30
              L50 52
              L57 65
              L65 71
              L85 80
              L20 166
              L56 136
              L93 98
              L111 75
              L80 62
              L72 55
              L69 48
              L69 39
              L72 33
              L80 27
              L89 25
              L124 26
              L122 149
              L101 136
              L122 160
              L140 192
              L140 10
              L78 10
              Z
            "
            className="fill-[#111318] dark:fill-[#f1eee6]"
          />

          {/* RIGHT REBELROOT SYMBOL */}
          <path
            d="
              M152 10
              L152 191
              L171 158
              L191 136
              L168 148
              L169 25
              L203 25
              L212 27
              L220 33
              L223 40
              L223 46
              L220 54
              L210 63
              L180 75
              L206 106
              L238 138
              L272 166
              L210 84
              L208 79
              L227 71
              L239 59
              L243 47
              L243 36
              L237 21
              L226 13
              L214 10
              Z
            "
            className="fill-[#111318] dark:fill-[#f1eee6]"
          />
        </g>

        <circle
          cx="201"
          cy="225"
          r="3"
          fill="#5EF2B2"
          className="animate-pulse-soft"
        />

        {/* DIGITAL ROOTS */}
        <g
          stroke="url(#brainNeuralGradient)"
          strokeLinecap="round"
          fill="none"
        >
          <path
            d="M198 292 C190 320 178 340 155 355 C132 370 110 377 82 390"
            strokeWidth="1.2"
          />

          <path
            d="M202 292 C210 320 222 340 245 355 C268 370 290 377 318 390"
            strokeWidth="1.2"
          />

          <path
            d="M195 300 C184 330 178 353 170 395"
            strokeWidth="1"
          />

          <path
            d="M205 300 C216 330 222 353 230 395"
            strokeWidth="1"
          />

          <path
            d="M200 300 C200 330 200 365 200 405"
            strokeWidth="1.1"
          />

          <path
            d="M187 305 C170 327 155 340 132 350"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />

          <path
            d="M213 305 C230 327 245 340 268 350"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />
        </g>

        {/* ROOT PARTICLES */}
        {[
          [82, 390],
          [110, 377],
          [132, 350],
          [155, 355],
          [170, 395],
          [200, 405],
          [230, 395],
          [245, 355],
          [268, 350],
          [290, 377],
          [318, 390],
        ].map(([cx, cy], i) => (
          <circle
            key={`root-${i}`}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? "1.7" : "1"}
            fill={
              i % 2 === 0
                ? "#4C8DFF"
                : "#9B6CFF"
            }
            className="animate-pulse-soft"
          />
        ))}

        {/* FEATURE NODES */}
        {featureNodes.map((node, i) => (
          <g key={`feature-${node.label}`}>
            {/* Glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="26"
              fill={node.color}
              opacity="0.08"
              filter="url(#smallGlow)"
            />

            {/* Outer ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r="19"
              fill="none"
              stroke={node.color}
              strokeWidth="1.2"
              strokeOpacity="0.9"
            />

            {/* Inner ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r="14"
              fill="none"
              stroke={node.color}
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />

            {/* Icon */}
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill={node.color}
              fontSize={
                node.label === "OPEN SOURCE"
                  ? "9"
                  : "14"
              }
              fontWeight="500"
            >
              {node.icon}
            </text>

            {/* Label */}
            <text
              x={node.x}
              y={node.y + 36}
              textAnchor="middle"
              fill="#DDE5F2"
              fontSize="8"
              fontWeight="500"
              letterSpacing="0.8"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}