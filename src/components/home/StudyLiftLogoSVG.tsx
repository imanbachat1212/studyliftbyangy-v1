export default function StudyLiftLogoSVG({ size = 360 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 360 360"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 8px 32px rgba(27,42,94,0.45))' }}
    >
      {/* ── Outer circle: cream fill + navy stroke + gold inner ring ── */}
      <circle cx="180" cy="180" r="174" fill="#FDFAF4" stroke="#1B2A5E" strokeWidth="10" />
      <circle cx="180" cy="180" r="163" fill="none" stroke="#C9973A" strokeWidth="3" />

      {/* ── Bar chart (center-bottom of cap) ── */}
      {/* Bar 1 – teal short */}
      <rect x="132" y="182" width="22" height="38" rx="3" fill="#2D8A8A" />
      {/* Bar 2 – teal medium */}
      <rect x="160" y="165" width="22" height="55" rx="3" fill="#2D7A8A" />
      {/* Bar 3 – teal tall */}
      <rect x="188" y="148" width="22" height="72" rx="3" fill="#1B7A8A" />
      {/* Bar 4 – gold accent */}
      <rect x="216" y="135" width="22" height="85" rx="3" fill="#C9973A" />

      {/* ── Rising arrow over bars ── */}
      <polyline
        points="138,215 160,192 188,172 218,148"
        fill="none"
        stroke="#2D8A8A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow head */}
      <polygon points="218,148 232,143 225,157" fill="#2D8A8A" />

      {/* ── Open book (below bars) ── */}
      {/* Left page */}
      <path
        d="M110 228 Q145 218 180 222 L180 255 Q145 251 110 260 Z"
        fill="#1B2A5E"
        opacity="0.9"
      />
      {/* Right page */}
      <path
        d="M180 222 Q215 218 250 228 L250 260 Q215 251 180 255 Z"
        fill="#2D8A8A"
        opacity="0.85"
      />
      {/* Spine */}
      <line x1="180" y1="222" x2="180" y2="255" stroke="#C9973A" strokeWidth="2.5" />
      {/* Left page lines */}
      <line x1="122" y1="236" x2="172" y2="233" stroke="#FDFAF4" strokeWidth="1.5" opacity="0.5" />
      <line x1="122" y1="243" x2="172" y2="241" stroke="#FDFAF4" strokeWidth="1.5" opacity="0.5" />
      <line x1="122" y1="250" x2="172" y2="249" stroke="#FDFAF4" strokeWidth="1.5" opacity="0.5" />
      {/* Right page lines */}
      <line x1="188" y1="233" x2="238" y2="236" stroke="#FDFAF4" strokeWidth="1.5" opacity="0.5" />
      <line x1="188" y1="241" x2="238" y2="243" stroke="#FDFAF4" strokeWidth="1.5" opacity="0.5" />
      <line x1="188" y1="249" x2="238" y2="250" stroke="#FDFAF4" strokeWidth="1.5" opacity="0.5" />

      {/* ── Graduation cap ── */}
      {/* Cap base (mortarboard top) */}
      <polygon points="180,82 248,112 180,132 112,112" fill="#1B2A5E" />
      {/* Cap body (cylindrical part) */}
      <path d="M148 112 L148 140 Q180 150 212 140 L212 112 Q180 122 148 112Z" fill="#1B2A5E" />
      {/* Cap top shine */}
      <polygon points="180,84 242,112 180,130 118,112" fill="none" stroke="#C9973A" strokeWidth="1" opacity="0.4" />
      {/* Tassel string */}
      <line x1="248" y1="112" x2="248" y2="135" stroke="#C9973A" strokeWidth="3" strokeLinecap="round" />
      {/* Tassel end */}
      <circle cx="248" cy="138" r="5" fill="#C9973A" />
      <line x1="244" y1="143" x2="243" y2="152" stroke="#C9973A" strokeWidth="2" strokeLinecap="round" />
      <line x1="248" y1="143" x2="248" y2="153" stroke="#C9973A" strokeWidth="2" strokeLinecap="round" />
      <line x1="252" y1="143" x2="253" y2="152" stroke="#C9973A" strokeWidth="2" strokeLinecap="round" />

      {/* ── Sparkles ── */}
      {/* Top-right sparkle large */}
      <g transform="translate(254,88)">
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#C9973A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#C9973A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-7" y1="-7" x2="7" y2="7" stroke="#C9973A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="-7" x2="-7" y2="7" stroke="#C9973A" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Smaller sparkle */}
      <g transform="translate(272,108)">
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#C9973A" strokeWidth="2" strokeLinecap="round" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#C9973A" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Dot sparkle */}
      <circle cx="261" cy="108" r="2.5" fill="#C9973A" />

      {/* ── "StudyLift" wordmark — single text so tspans auto-flow ── */}
      <text
        x="180"
        y="297"
        textAnchor="middle"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        <tspan fill="#1B2A5E">Study</tspan><tspan fill="#2D8A8A">Lift</tspan>
      </text>

      {/* ── "by Angy" script ── */}
      <text
        x="180"
        y="316"
        fontFamily="Georgia, serif"
        fontSize="16"
        fontStyle="italic"
        fontWeight="600"
        fill="#C9973A"
        textAnchor="middle"
        letterSpacing="1"
      >
        — by Angy —
      </text>

      {/* ── Bottom arc text ── */}
      <path
        id="bottomArc"
        d="M 60 290 A 130 130 0 0 0 300 290"
        fill="none"
      />
      <text fontSize="7.5" fill="#1B2A5E" opacity="0.65" fontFamily="'DM Sans', sans-serif" letterSpacing="1.2">
        <textPath href="#bottomArc" startOffset="12%">
          RESEARCH SUPPORT  ·  ACADEMIC CONSULTING  ·  SPSS ANALYSIS  ·  TUTORING
        </textPath>
      </text>

      {/* ── Mini book icon at bottom centre ── */}
      <g transform="translate(171,330)">
        <path d="M0 0 Q9-3 18 0 L18 10 Q9 7 0 10 Z" fill="#1B2A5E" />
        <line x1="9" y1="0" x2="9" y2="10" stroke="#C9973A" strokeWidth="1" />
      </g>
    </svg>
  )
}
