// Original SVG illustrations for Mr Kaboodle service pages.
// All artwork generated as code — owned by Mr Kaboodle, no third-party rights.

const navy = "#3950a1";
const yellow = "#fff100";
const red = "#ac1f23";
const white = "#ffffff";
const dark = "#343434";

interface IllustrationProps {
  className?: string;
}

/* ----------- Balloons cluster ----------- */
export function BalloonsArt({ className = "w-full h-auto" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cluster of party balloons"
    >
      <defs>
        <radialGradient id="bg-yellow" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffaa" />
          <stop offset="100%" stopColor={yellow} />
        </radialGradient>
        <radialGradient id="bg-red" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#e26b6e" />
          <stop offset="100%" stopColor={red} />
        </radialGradient>
        <radialGradient id="bg-navy" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#7385c5" />
          <stop offset="100%" stopColor={navy} />
        </radialGradient>
        <radialGradient id="bg-green" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#66c989" />
          <stop offset="100%" stopColor="#1c7a3e" />
        </radialGradient>
      </defs>
      {/* Strings */}
      <path d="M120 230 Q 145 350 200 460" stroke={dark} strokeWidth="2" fill="none" />
      <path d="M180 200 Q 195 340 200 460" stroke={dark} strokeWidth="2" fill="none" />
      <path d="M240 220 Q 230 340 200 460" stroke={dark} strokeWidth="2" fill="none" />
      <path d="M300 240 Q 270 350 200 460" stroke={dark} strokeWidth="2" fill="none" />
      {/* Balloons */}
      <ellipse cx="120" cy="180" rx="55" ry="65" fill="url(#bg-yellow)" />
      <polygon points="115,240 125,240 120,255" fill={yellow} />
      <ellipse cx="180" cy="155" rx="55" ry="65" fill="url(#bg-red)" />
      <polygon points="175,215 185,215 180,230" fill={red} />
      <ellipse cx="245" cy="175" rx="55" ry="65" fill="url(#bg-navy)" />
      <polygon points="240,235 250,235 245,250" fill={navy} />
      <ellipse cx="305" cy="195" rx="55" ry="65" fill="url(#bg-green)" />
      <polygon points="300,255 310,255 305,270" fill="#1c7a3e" />
      {/* Highlights */}
      <ellipse cx="105" cy="160" rx="10" ry="20" fill="white" opacity="0.5" />
      <ellipse cx="165" cy="135" rx="10" ry="20" fill="white" opacity="0.5" />
      <ellipse cx="230" cy="155" rx="10" ry="20" fill="white" opacity="0.5" />
      <ellipse cx="290" cy="175" rx="10" ry="20" fill="white" opacity="0.5" />
      {/* Hand at the bottom */}
      <circle cx="200" cy="465" r="12" fill={navy} />
    </svg>
  );
}

/* ----------- Face paint splash ----------- */
export function FacePaintArt({ className = "w-full h-auto" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Face painting splash and brushes"
    >
      {/* Background splatters */}
      <circle cx="80" cy="80" r="40" fill={red} opacity="0.85" />
      <circle cx="340" cy="100" r="50" fill={yellow} opacity="0.9" />
      <circle cx="60" cy="380" r="55" fill={navy} opacity="0.85" />
      <circle cx="350" cy="400" r="35" fill="#1c7a3e" opacity="0.85" />
      <circle cx="200" cy="40" r="20" fill="#e26b6e" />
      <circle cx="370" cy="250" r="22" fill="#7385c5" />
      <circle cx="30" cy="240" r="18" fill={yellow} />

      {/* Face - happy butterfly painted */}
      <ellipse cx="200" cy="270" rx="120" ry="150" fill="#f9d6b4" />

      {/* Butterfly wings on forehead */}
      <ellipse cx="160" cy="200" rx="35" ry="25" fill={navy} transform="rotate(-15 160 200)" />
      <ellipse cx="240" cy="200" rx="35" ry="25" fill={navy} transform="rotate(15 240 200)" />
      <ellipse cx="155" cy="195" rx="20" ry="14" fill={yellow} transform="rotate(-15 155 195)" />
      <ellipse cx="245" cy="195" rx="20" ry="14" fill={yellow} transform="rotate(15 245 195)" />
      <circle cx="155" cy="195" r="5" fill={red} />
      <circle cx="245" cy="195" r="5" fill={red} />
      <line x1="200" y1="180" x2="200" y2="225" stroke={dark} strokeWidth="2.5" />

      {/* Eyes */}
      <circle cx="170" cy="265" r="9" fill={dark} />
      <circle cx="230" cy="265" r="9" fill={dark} />
      <circle cx="172" cy="262" r="3" fill="white" />
      <circle cx="232" cy="262" r="3" fill="white" />

      {/* Smile */}
      <path d="M 165 320 Q 200 355 235 320" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Painted swirl on cheek */}
      <path d="M 130 290 Q 110 305 125 320" stroke={red} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 270 290 Q 290 305 275 320" stroke={red} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Sparkles */}
      <g fill={yellow}>
        <polygon points="120,150 124,160 134,164 124,168 120,178 116,168 106,164 116,160" />
        <polygon points="290,140 294,150 304,154 294,158 290,168 286,158 276,154 286,150" />
        <polygon points="100,440 103,447 110,450 103,453 100,460 97,453 90,450 97,447" />
      </g>
    </svg>
  );
}

/* ----------- Stilt walker silhouette ----------- */
export function StiltArt({ className = "w-full h-auto" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stilt walker towering over crowd"
    >
      {/* Sun */}
      <circle cx="320" cy="80" r="50" fill={yellow} />
      <g stroke={yellow} strokeWidth="3" strokeLinecap="round">
        <line x1="320" y1="10" x2="320" y2="30" />
        <line x1="320" y1="130" x2="320" y2="150" />
        <line x1="250" y1="80" x2="270" y2="80" />
        <line x1="370" y1="80" x2="390" y2="80" />
        <line x1="270" y1="30" x2="285" y2="45" />
        <line x1="355" y1="115" x2="370" y2="130" />
        <line x1="370" y1="30" x2="355" y2="45" />
        <line x1="285" y1="115" x2="270" y2="130" />
      </g>

      {/* Stilts */}
      <rect x="190" y="350" width="8" height="220" fill={dark} />
      <rect x="210" y="350" width="8" height="220" fill={dark} />

      {/* Body */}
      <path
        d="M 170 250 L 230 250 L 245 360 L 155 360 Z"
        fill={navy}
      />
      {/* Stripes on body */}
      <line x1="180" y1="260" x2="172" y2="350" stroke={yellow} strokeWidth="4" />
      <line x1="200" y1="260" x2="200" y2="360" stroke={red} strokeWidth="4" />
      <line x1="220" y1="260" x2="228" y2="350" stroke={white} strokeWidth="4" />

      {/* Arms */}
      <path d="M 175 270 L 90 200 L 100 195 L 185 280 Z" fill={navy} />
      <path d="M 225 270 L 310 200 L 300 195 L 215 280 Z" fill={navy} />

      {/* Juggling pins in hands */}
      <g transform="translate(85 195) rotate(-30)">
        <ellipse cx="0" cy="-15" rx="6" ry="10" fill={red} />
        <rect x="-3" y="-5" width="6" height="20" fill={red} />
      </g>
      <g transform="translate(310 195) rotate(30)">
        <ellipse cx="0" cy="-15" rx="6" ry="10" fill={red} />
        <rect x="-3" y="-5" width="6" height="20" fill={red} />
      </g>

      {/* Head */}
      <circle cx="200" cy="220" r="30" fill="#f9d6b4" />
      {/* Eyes */}
      <circle cx="190" cy="218" r="3" fill={dark} />
      <circle cx="210" cy="218" r="3" fill={dark} />
      {/* Smile */}
      <path d="M 188 230 Q 200 240 212 230" stroke={dark} strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Hat */}
      <ellipse cx="200" cy="195" rx="32" ry="6" fill={yellow} />
      <path d="M 175 195 L 180 165 L 220 165 L 225 195 Z" fill={red} />
      <rect x="195" y="155" width="10" height="15" fill={yellow} />

      {/* Crowd silhouettes at bottom */}
      <g fill={dark} opacity="0.7">
        <circle cx="40" cy="555" r="18" />
        <rect x="22" y="565" width="36" height="35" />
        <circle cx="80" cy="560" r="15" />
        <rect x="65" y="568" width="30" height="32" />
        <circle cx="350" cy="555" r="18" />
        <rect x="332" y="565" width="36" height="35" />
        <circle cx="305" cy="560" r="15" />
        <rect x="290" y="568" width="30" height="32" />
      </g>
    </svg>
  );
}

/* ----------- Confetti burst ----------- */
export function ConfettiBurst({ className = "w-full h-auto" }: IllustrationProps) {
  const colors = [yellow, red, navy, "#1c7a3e", "#e26b6e", "#7385c5"];
  const pieces = Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * Math.PI * 2;
    const distance = 50 + ((i * 17) % 110);
    const x = 200 + Math.cos(angle) * distance;
    const y = 200 + Math.sin(angle) * distance;
    const rotation = (i * 53) % 360;
    const color = colors[i % colors.length];
    const shape = i % 3;
    return { x, y, rotation, color, shape, key: i };
  });
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {pieces.map((p) => (
        <g key={p.key} transform={`translate(${p.x} ${p.y}) rotate(${p.rotation})`}>
          {p.shape === 0 && <rect x="-8" y="-2" width="16" height="4" fill={p.color} />}
          {p.shape === 1 && <circle cx="0" cy="0" r="5" fill={p.color} />}
          {p.shape === 2 && <polygon points="-6,-6 6,-6 0,8" fill={p.color} />}
        </g>
      ))}
    </svg>
  );
}

/* ----------- DJ Turntable ----------- */
export function DJArt({ className = "w-full h-auto" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kids DJ turntable with music notes">
      {/* Music notes floating */}
      <g fill={yellow}>
        <text x="40" y="100" fontSize="60" fontFamily="serif">♪</text>
        <text x="320" y="80" fontSize="80" fontFamily="serif">♫</text>
        <text x="60" y="220" fontSize="50" fontFamily="serif">♪</text>
        <text x="330" y="240" fontSize="55" fontFamily="serif">♬</text>
      </g>
      {/* Turntable base */}
      <rect x="50" y="260" width="300" height="180" rx="20" fill={dark} />
      <rect x="60" y="270" width="280" height="160" rx="14" fill="#1f1f1f" />
      {/* Vinyl record */}
      <circle cx="140" cy="350" r="70" fill={dark} />
      <circle cx="140" cy="350" r="64" fill="#0a0a0a" />
      <circle cx="140" cy="350" r="55" fill="none" stroke="#222" strokeWidth="1" />
      <circle cx="140" cy="350" r="45" fill="none" stroke="#222" strokeWidth="1" />
      <circle cx="140" cy="350" r="35" fill="none" stroke="#222" strokeWidth="1" />
      <circle cx="140" cy="350" r="20" fill={red} />
      <circle cx="140" cy="350" r="3" fill={dark} />
      {/* Tone arm */}
      <line x1="200" y1="300" x2="155" y2="345" stroke="#888" strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="300" r="8" fill="#888" />
      {/* Right side controls */}
      <rect x="240" y="290" width="90" height="70" rx="6" fill="#1a1a1a" />
      <circle cx="260" cy="320" r="10" fill={yellow} />
      <circle cx="290" cy="320" r="10" fill={red} />
      <circle cx="320" cy="320" r="10" fill={navy} />
      {/* Slider */}
      <rect x="245" y="375" width="80" height="40" rx="4" fill="#2a2a2a" />
      <rect x="280" y="380" width="10" height="30" fill={yellow} />
      {/* Speakers */}
      <rect x="20" y="280" width="20" height="120" rx="3" fill={dark} />
      <rect x="360" y="280" width="20" height="120" rx="3" fill={dark} />
      <circle cx="30" cy="320" r="6" fill="#1a1a1a" />
      <circle cx="30" cy="370" r="6" fill="#1a1a1a" />
      <circle cx="370" cy="320" r="6" fill="#1a1a1a" />
      <circle cx="370" cy="370" r="6" fill="#1a1a1a" />
      {/* Crown floating above for kid vibe */}
      <path d="M 160 220 L 175 200 L 200 215 L 225 200 L 240 220 L 240 240 L 160 240 Z" fill={yellow} stroke={navy} strokeWidth="2" />
      <circle cx="200" cy="215" r="5" fill={red} />
    </svg>
  );
}

/* ----------- Fire show ----------- */
export function FireArt({ className = "w-full h-auto" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fire performer with flaming torches against night sky"
    >
      <defs>
        <linearGradient id="night-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a3a" />
          <stop offset="100%" stopColor="#3a1a1a" />
        </linearGradient>
        <radialGradient id="flame-yellow" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#fff100" />
          <stop offset="70%" stopColor="#ff8500" />
          <stop offset="100%" stopColor="#ac1f23" />
        </radialGradient>
        <radialGradient id="flame-orange" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#fff100" />
          <stop offset="50%" stopColor="#ff5500" />
          <stop offset="100%" stopColor="#3a0a0a" />
        </radialGradient>
        <radialGradient id="ember-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff100" />
          <stop offset="100%" stopColor="#fff100" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Night sky */}
      <rect x="0" y="0" width="400" height="500" fill="url(#night-sky)" />

      {/* Stars */}
      <g fill={white} opacity="0.7">
        <circle cx="40" cy="50" r="1.4" />
        <circle cx="80" cy="30" r="1.6" />
        <circle cx="140" cy="60" r="1.2" />
        <circle cx="220" cy="45" r="1.8" />
        <circle cx="290" cy="70" r="1.3" />
        <circle cx="340" cy="35" r="1.5" />
        <circle cx="370" cy="90" r="1.2" />
        <circle cx="60" cy="120" r="1.3" />
        <circle cx="320" cy="140" r="1.4" />
      </g>

      {/* Ember glow halos */}
      <circle cx="120" cy="160" r="60" fill="url(#ember-glow)" opacity="0.7" />
      <circle cx="280" cy="180" r="55" fill="url(#ember-glow)" opacity="0.7" />

      {/* Performer body silhouette */}
      <ellipse cx="200" cy="290" rx="45" ry="60" fill={dark} />
      <circle cx="200" cy="220" r="22" fill={dark} />

      {/* Arms holding torches */}
      <path
        d="M 175 270 L 110 200 L 120 195 L 185 280 Z"
        fill={dark}
      />
      <path
        d="M 225 270 L 290 200 L 280 195 L 215 280 Z"
        fill={dark}
      />

      {/* Left torch handle */}
      <rect x="105" y="180" width="6" height="22" fill="#5a3010" rx="2" />

      {/* Left flame */}
      <path
        d="M 108 180 Q 95 155 100 130 Q 105 145 110 130 Q 115 150 120 135 Q 125 155 110 180 Z"
        fill="url(#flame-yellow)"
      />
      <path
        d="M 108 180 Q 100 165 102 145 Q 110 155 108 165 Q 116 155 114 145 Q 116 170 110 180 Z"
        fill="url(#flame-orange)"
        opacity="0.85"
      />

      {/* Right torch handle */}
      <rect x="289" y="180" width="6" height="22" fill="#5a3010" rx="2" />

      {/* Right flame */}
      <path
        d="M 292 180 Q 280 150 285 125 Q 290 140 295 125 Q 300 145 305 130 Q 310 155 295 180 Z"
        fill="url(#flame-yellow)"
      />
      <path
        d="M 292 180 Q 285 165 287 145 Q 295 155 293 165 Q 301 155 299 145 Q 301 170 295 180 Z"
        fill="url(#flame-orange)"
        opacity="0.85"
      />

      {/* Flame mouth (fire breathing finale) */}
      <path
        d="M 200 240 Q 195 225 205 210 Q 210 225 215 215 Q 220 230 210 245 Q 215 235 205 240 Z"
        fill="url(#flame-yellow)"
        opacity="0.9"
      />

      {/* Sparks rising */}
      <g fill="#fff100">
        <circle cx="125" cy="105" r="2" />
        <circle cx="115" cy="80" r="1.6" opacity="0.85" />
        <circle cx="135" cy="60" r="1.4" opacity="0.7" />
        <circle cx="100" cy="55" r="1.2" opacity="0.55" />
        <circle cx="295" cy="100" r="2" />
        <circle cx="305" cy="70" r="1.6" opacity="0.85" />
        <circle cx="285" cy="55" r="1.4" opacity="0.7" />
        <circle cx="315" cy="40" r="1.2" opacity="0.55" />
        <circle cx="200" cy="190" r="1.8" />
        <circle cx="195" cy="165" r="1.4" opacity="0.7" />
      </g>

      {/* Ground */}
      <rect x="0" y="450" width="400" height="50" fill="#1a0a0a" />

      {/* Audience silhouettes */}
      <g fill="#0a0a0a" opacity="0.95">
        <circle cx="40" cy="450" r="14" />
        <rect x="26" y="455" width="28" height="50" />
        <circle cx="80" cy="455" r="12" />
        <rect x="68" y="460" width="24" height="45" />
        <circle cx="115" cy="450" r="14" />
        <rect x="101" y="455" width="28" height="50" />
        <circle cx="290" cy="450" r="14" />
        <rect x="276" y="455" width="28" height="50" />
        <circle cx="330" cy="455" r="12" />
        <rect x="318" y="460" width="24" height="45" />
        <circle cx="365" cy="450" r="14" />
        <rect x="351" y="455" width="28" height="50" />
      </g>
    </svg>
  );
}

/* ----------- Circus tent / juggling scene ----------- */
export function CircusArt({ className = "w-full h-auto" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circus tent with juggling pins">
      {/* Sky */}
      <rect x="0" y="0" width="400" height="500" fill={yellow} opacity="0.15" />
      {/* Tent body */}
      <path d="M 70 280 L 200 80 L 330 280 Z" fill={red} />
      {/* Tent stripes */}
      <path d="M 200 80 L 130 280 L 145 280 L 200 90 Z" fill={white} opacity="0.7" />
      <path d="M 200 80 L 270 280 L 255 280 L 200 90 Z" fill={white} opacity="0.7" />
      {/* Tent base */}
      <rect x="60" y="280" width="280" height="170" fill={navy} />
      {/* Vertical stripes on base */}
      <g fill={white} opacity="0.55">
        <rect x="80" y="280" width="22" height="170" />
        <rect x="140" y="280" width="22" height="170" />
        <rect x="200" y="280" width="22" height="170" />
        <rect x="260" y="280" width="22" height="170" />
        <rect x="318" y="280" width="22" height="170" />
      </g>
      {/* Tent flag */}
      <line x1="200" y1="80" x2="200" y2="50" stroke={dark} strokeWidth="3" />
      <polygon points="200,50 230,55 200,70" fill={yellow} />
      {/* Door */}
      <path d="M 180 450 Q 200 380 220 450 Z" fill={dark} />
      {/* Juggling pins arc */}
      <g>
        <g transform="translate(50 200) rotate(20)">
          <ellipse cx="0" cy="-15" rx="7" ry="12" fill={white} />
          <rect x="-3" y="-5" width="6" height="22" fill={white} />
          <rect x="-3" y="-5" width="6" height="6" fill={red} />
        </g>
        <g transform="translate(40 130) rotate(60)">
          <ellipse cx="0" cy="-15" rx="7" ry="12" fill={white} />
          <rect x="-3" y="-5" width="6" height="22" fill={white} />
          <rect x="-3" y="-5" width="6" height="6" fill={red} />
        </g>
        <g transform="translate(360 200) rotate(-20)">
          <ellipse cx="0" cy="-15" rx="7" ry="12" fill={white} />
          <rect x="-3" y="-5" width="6" height="22" fill={white} />
          <rect x="-3" y="-5" width="6" height="6" fill={red} />
        </g>
      </g>
      {/* Stars */}
      <g fill={yellow}>
        <polygon points="80,80 84,90 94,94 84,98 80,108 76,98 66,94 76,90" />
        <polygon points="320,120 324,130 334,134 324,138 320,148 316,138 306,134 316,130" />
        <polygon points="350,30 354,40 364,44 354,48 350,58 346,48 336,44 346,40" />
      </g>
    </svg>
  );
}
