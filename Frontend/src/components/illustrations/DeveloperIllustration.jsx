import React from 'react';
import { motion } from 'framer-motion';

export const DeveloperIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl p-2 sm:p-4">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-4 left-1/4 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <svg
        viewBox="0 0 900 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[480px] drop-shadow-2xl select-none"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1120" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>

          <linearGradient id="wallGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="monitorBezel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="screen1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#090D16" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="screen2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06121E" />
            <stop offset="100%" stopColor="#0B192C" />
          </linearGradient>

          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="40%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A1B18" />
            <stop offset="70%" stopColor="#170F0D" />
            <stop offset="100%" stopColor="#0A0605" />
          </linearGradient>

          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6C492" />
            <stop offset="60%" stopColor="#E5A66B" />
            <stop offset="100%" stopColor="#C98246" />
          </linearGradient>

          <linearGradient id="lampBeam" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>

          <filter id="screenGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="lampGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- BACKGROUND OFFICE ENVIRONMENT --- */}
        {/* Background Wall Panels */}
        <rect x="0" y="0" width="900" height="560" fill="url(#bgGrad)" />

        {/* Modern Studio Architectural Grid & Glass Partitions */}
        <g opacity="0.4">
          <line x1="80" y1="0" x2="80" y2="400" stroke="#334155" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="280" y1="0" x2="280" y2="400" stroke="#334155" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="480" y1="0" x2="480" y2="400" stroke="#334155" strokeWidth="1" />
          <line x1="680" y1="0" x2="680" y2="400" stroke="#334155" strokeWidth="1" strokeDasharray="6 6" />

          <rect x="520" y="40" width="340" height="300" rx="8" fill="url(#wallGlass)" stroke="#475569" strokeWidth="1" />
          {/* Glass Partition Squares pattern matching reference */}
          <rect x="540" y="60" width="16" height="16" fill="#64748B" opacity="0.3" rx="2" />
          <rect x="570" y="60" width="16" height="16" fill="#64748B" opacity="0.2" rx="2" />
          <rect x="600" y="60" width="16" height="16" fill="#64748B" opacity="0.3" rx="2" />
          <rect x="630" y="60" width="16" height="16" fill="#38BDF8" opacity="0.4" rx="2" />
          <rect x="540" y="90" width="16" height="16" fill="#64748B" opacity="0.2" rx="2" />
          <rect x="570" y="90" width="16" height="16" fill="#64748B" opacity="0.3" rx="2" />
          <rect x="600" y="90" width="16" height="16" fill="#38BDF8" opacity="0.3" rx="2" />
          <rect x="630" y="90" width="16" height="16" fill="#64748B" opacity="0.2" rx="2" />

          {/* Background Server/Rack Lights */}
          <circle cx="560" cy="220" r="3" fill="#10B981" />
          <circle cx="560" cy="235" r="3" fill="#3B82F6" />
          <circle cx="560" cy="250" r="3" fill="#EF4444" />
          <circle cx="580" cy="220" r="3" fill="#3B82F6" />
          <circle cx="580" cy="235" r="3" fill="#10B981" />
        </g>

        {/* Ceiling Linear Light Bars */}
        <line x1="220" y1="10" x2="340" y2="40" stroke="#BAE6FD" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <line x1="680" y1="2" x2="760" y2="22" stroke="#BAE6FD" strokeWidth="4" strokeLinecap="round" opacity="0.6" />

        {/* Desk Lamp Beam onto Desk */}
        <polygon points="260,20 120,440 440,440 300,20" fill="url(#lampBeam)" />

        {/* Overhead Desk Lamp Fixture */}
        <g>
          <path d="M140,0 L200,10 L280,20" stroke="#64748B" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M260,15 L300,25 L290,40 L250,30 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <ellipse cx="275" cy="35" rx="18" ry="6" fill="#FEF08A" filter="url(#lampGlow)" opacity="0.9" />
        </g>

        {/* --- ERGONOMIC CHAIR & DEVELOPER --- */}
        {/* Chair Back & Headrest */}
        <g>
          {/* Chair Base & Spine */}
          <path d="M720,420 L740,540 M680,540 L780,540" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" />
          {/* Chair Back Frame */}
          <path d="M710,250 Q740,320 720,420" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
          <path d="M710,250 Q740,320 720,420" stroke="#334155" strokeWidth="10" strokeLinecap="round" fill="none" />
          {/* Chair Mesh Ribs */}
          <line x1="710" y1="280" x2="730" y2="285" stroke="#475569" strokeWidth="3" />
          <line x1="715" y1="310" x2="735" y2="315" stroke="#475569" strokeWidth="3" />
          <line x1="718" y1="340" x2="735" y2="345" stroke="#475569" strokeWidth="3" />
          <line x1="715" y1="370" x2="730" y2="375" stroke="#475569" strokeWidth="3" />
        </g>

        {/* Developer Character (Young Indian Female Coder) */}
        <g id="developer-character">
          {/* Body / Torso (Blue Shirt) */}
          {/* Back & Shoulders */}
          <path
            d="M660,240 Q640,290 620,380 L540,430 Q510,435 480,410 L520,330 Q540,260 620,230 Z"
            fill="url(#shirtGrad)"
          />
          {/* Shirt Collar & Buttons Detail */}
          <path d="M590,215 L620,230 L605,255 L580,240 Z" fill="#2563EB" />
          <path d="M595,245 Q590,300 580,360" stroke="#1E40AF" strokeWidth="2" fill="none" />
          <circle cx="592" cy="270" r="2.5" fill="#DBEAFE" />
          <circle cx="588" cy="300" r="2.5" fill="#DBEAFE" />
          <circle cx="584" cy="330" r="2.5" fill="#DBEAFE" />

          {/* Left Arm & Sleeve (extended toward keyboard) */}
          <path
            d="M600,250 Q560,290 490,360 L420,390 Q400,395 380,405 L410,425 Q450,420 520,385 Q560,345 580,300 Z"
            fill="url(#shirtGrad)"
          />
          {/* Sleeve Cuff */}
          <rect x="400" y="392" width="22" height="28" rx="4" transform="rotate(-25 400 392)" fill="#1D4ED8" />

          {/* Forearm & Hands on Mechanical Keyboard */}
          <path
            d="M395,405 Q375,410 350,412 Q335,412 330,422 Q340,428 360,425 L390,420 Z"
            fill="url(#skinGrad)"
          />
          {/* Fingers typing */}
          <path d="M330,420 Q325,422 320,425 M334,417 Q328,420 323,423" stroke="#C98246" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right Hand (behind) */}
          <path
            d="M440,395 L400,410 Q380,415 365,418 Q360,425 375,428 L415,420 Z"
            fill="#D97706"
            opacity="0.8"
          />

          {/* Neck */}
          <path d="M590,195 Q595,215 600,235 L575,235 Q575,210 575,195 Z" fill="url(#skinGrad)" />

          {/* Head Profile */}
          <path
            d="M580,140 Q610,145 615,180 Q615,205 590,215 Q565,215 550,195 Q540,175 550,155 Q560,140 580,140 Z"
            fill="url(#skinGrad)"
          />
          {/* Nose & Chin Profile */}
          <path
            d="M560,165 L548,178 L555,185 L548,198 Q558,212 575,212"
            fill="none"
            stroke="url(#skinGrad)"
            strokeWidth="12"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Eye & Eyebrow (focused forward at screen) */}
          <path d="M555,165 Q563,163 568,166" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="560" cy="172" rx="3.5" ry="4" fill="#0F172A" />
          <circle cx="559" cy="170" r="1.2" fill="#FFFFFF" />
          {/* Glasses frame (chic modern round glasses) */}
          <circle cx="560" cy="172" r="11" fill="none" stroke="#38BDF8" strokeWidth="1.8" opacity="0.85" />
          <line x1="571" y1="170" x2="590" y2="168" stroke="#38BDF8" strokeWidth="1.8" opacity="0.85" />

          {/* Ear & Earring */}
          <ellipse cx="590" cy="180" rx="6" ry="9" fill="url(#skinGrad)" />
          <circle cx="590" cy="188" r="2.5" fill="#FBBF24" />

          {/* Stylish Hair (Voluminous Bun + Soft Strands) */}
          {/* Hair Base */}
          <path
            d="M555,160 Q545,130 580,120 Q625,115 625,160 Q625,190 610,210 Q595,200 590,165 Q575,160 555,160 Z"
            fill="url(#hairGrad)"
          />
          {/* Hair Bun */}
          <ellipse cx="630" cy="130" rx="30" ry="28" fill="url(#hairGrad)" />
          <ellipse cx="635" cy="126" rx="26" ry="24" fill="#2A1B18" />
          {/* Bun Hair Tie / Scrunchie */}
          <ellipse cx="612" cy="142" rx="6" ry="14" transform="rotate(-20 612 142)" fill="#38BDF8" />
          {/* Flowing Wisps of Hair */}
          <path d="M565,155 Q550,180 545,210" stroke="#170F0D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M578,145 Q565,175 560,205" stroke="#2A1B18" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* --- MAIN WORKSTATION / DESK --- */}
        {/* Modern Minimalist Desk Surface */}
        <polygon points="0,430 900,430 900,470 0,470" fill="url(#deskGrad)" />
        <line x1="0" y1="430" x2="900" y2="430" stroke="#475569" strokeWidth="2" />
        <rect x="0" y="470" width="900" height="90" fill="#0F172A" />

        {/* Desk Accessories */}
        {/* Large Desk Mat / Mousepad */}
        <rect x="180" y="434" width="340" height="24" rx="4" fill="#090D16" stroke="#334155" strokeWidth="1" />

        {/* Mechanical Keyboard with RGB Underglow */}
        <g>
          <rect x="310" y="420" width="130" height="22" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1" />
          <rect x="312" y="440" width="126" height="2" fill="#38BDF8" filter="url(#screenGlow)" />
          {/* Keycaps row representation */}
          <rect x="315" y="423" width="120" height="6" fill="#334155" rx="1" />
          <rect x="315" y="431" width="120" height="6" fill="#475569" rx="1" />
        </g>

        {/* Caliper / Ruler Tool on Desk (matching reference photo!) */}
        <g transform="translate(180, 445)">
          <line x1="0" y1="0" x2="70" y2="0" stroke="#94A3B8" strokeWidth="3" />
          <rect x="15" y="-5" width="10" height="10" fill="#CBD5E1" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#94A3B8" strokeWidth="2" />
        </g>

        {/* --- DUAL MONITORS SETUP --- */}
        {/* Heavy Duty Dual Monitor Arm Stand */}
        <rect x="295" y="320" width="14" height="110" fill="#0F172A" stroke="#334155" strokeWidth="1" />
        <ellipse cx="302" cy="430" rx="30" ry="6" fill="#1E293B" stroke="#475569" strokeWidth="1" />
        <line x1="240" y1="270" x2="360" y2="270" stroke="#334155" strokeWidth="8" strokeLinecap="round" />

        {/* ================= MONITOR 1 (LEFT - CODE EDITOR) ================= */}
        <g id="monitor-left">
          {/* Outer Frame */}
          <rect x="60" y="130" width="220" height="175" rx="6" fill="url(#monitorBezel)" stroke="#475569" strokeWidth="2" />
          {/* Screen Display */}
          <rect x="65" y="135" width="210" height="165" rx="4" fill="url(#screen1Grad)" />

          {/* IDE Window Titlebar */}
          <rect x="65" y="135" width="210" height="16" fill="#1E293B" />
          <circle cx="74" cy="143" r="3" fill="#EF4444" />
          <circle cx="83" cy="143" r="3" fill="#F59E0B" />
          <circle cx="92" cy="143" r="3" fill="#10B981" />
          {/* Active Tab */}
          <rect x="105" y="138" width="60" height="13" rx="2" fill="#0F172A" />
          <rect x="110" y="143" width="30" height="3" fill="#38BDF8" rx="1" />

          {/* Sidebar / File Explorer */}
          <rect x="65" y="151" width="35" height="149" fill="#0A0F1D" />
          <line x1="70" y1="160" x2="90" y2="160" stroke="#475569" strokeWidth="2" />
          <line x1="74" y1="168" x2="95" y2="168" stroke="#38BDF8" strokeWidth="2" />
          <line x1="74" y1="176" x2="92" y2="176" stroke="#475569" strokeWidth="2" />
          <line x1="70" y1="184" x2="88" y2="184" stroke="#475569" strokeWidth="2" />

          {/* Code Lines with Syntax Highlighting */}
          <g transform="translate(108, 158)">
            {/* Line Numbers */}
            <text x="0" y="10" fill="#475569" fontSize="7" fontFamily="monospace">01</text>
            <text x="0" y="22" fill="#475569" fontSize="7" fontFamily="monospace">02</text>
            <text x="0" y="34" fill="#475569" fontSize="7" fontFamily="monospace">03</text>
            <text x="0" y="46" fill="#475569" fontSize="7" fontFamily="monospace">04</text>
            <text x="0" y="58" fill="#475569" fontSize="7" fontFamily="monospace">05</text>
            <text x="0" y="70" fill="#475569" fontSize="7" fontFamily="monospace">06</text>
            <text x="0" y="82" fill="#475569" fontSize="7" fontFamily="monospace">07</text>
            <text x="0" y="94" fill="#475569" fontSize="7" fontFamily="monospace">08</text>
            <text x="0" y="106" fill="#475569" fontSize="7" fontFamily="monospace">09</text>
            <text x="0" y="118" fill="#475569" fontSize="7" fontFamily="monospace">10</text>

            {/* Syntax Code Bars */}
            {/* import React from 'react' */}
            <rect x="16" y="6" width="24" height="4" rx="1" fill="#F43F5E" />
            <rect x="44" y="6" width="22" height="4" rx="1" fill="#38BDF8" />
            <rect x="70" y="6" width="18" height="4" rx="1" fill="#F43F5E" />
            <rect x="92" y="6" width="30" height="4" rx="1" fill="#A7F3D0" />

            {/* const App = () => { */}
            <rect x="16" y="18" width="20" height="4" rx="1" fill="#818CF8" />
            <rect x="40" y="18" width="28" height="4" rx="1" fill="#FBBF24" />
            <rect x="72" y="18" width="8" height="4" rx="1" fill="#94A3B8" />

            {/* const [code, setCode] = useState() */}
            <rect x="22" y="30" width="16" height="4" rx="1" fill="#818CF8" />
            <rect x="42" y="30" width="36" height="4" rx="1" fill="#38BDF8" />
            <rect x="82" y="30" width="26" height="4" rx="1" fill="#34D399" />

            {/* return ( */}
            <rect x="22" y="42" width="24" height="4" rx="1" fill="#F43F5E" />

            {/* <PortfolioLayout> */}
            <rect x="28" y="54" width="60" height="4" rx="1" fill="#38BDF8" />
            {/* <HeroSection /> */}
            <rect x="36" y="66" width="45" height="4" rx="1" fill="#34D399" />
            {/* <ProjectsGrid /> */}
            <rect x="36" y="78" width="55" height="4" rx="1" fill="#34D399" />
            {/* <ContactForm /> */}
            <rect x="36" y="90" width="48" height="4" rx="1" fill="#34D399" />
            {/* </PortfolioLayout> */}
            <rect x="28" y="102" width="60" height="4" rx="1" fill="#38BDF8" />

            {/* ); } */}
            <rect x="22" y="114" width="12" height="4" rx="1" fill="#94A3B8" />

            {/* Glowing Blinking Cursor */}
            <rect x="38" y="113" width="2" height="6" fill="#38BDF8" filter="url(#screenGlow)" />
          </g>

          {/* Mini-map on right edge */}
          <rect x="260" y="155" width="10" height="135" fill="#0A0F1D" opacity="0.7" />
          <rect x="262" y="160" width="6" height="30" fill="#38BDF8" opacity="0.3" rx="1" />
        </g>

        {/* ================= MONITOR 2 (RIGHT - UI & DASHBOARD) ================= */}
        <g id="monitor-right">
          {/* Outer Frame (Angled toward user) */}
          <rect x="290" y="130" width="215" height="175" rx="6" fill="url(#monitorBezel)" stroke="#475569" strokeWidth="2" />
          {/* Screen Display */}
          <rect x="295" y="135" width="205" height="165" rx="4" fill="url(#screen2Grad)" />

          {/* Dashboard Window Header */}
          <rect x="295" y="135" width="205" height="16" fill="#1E293B" />
          <circle cx="304" cy="143" r="3" fill="#EF4444" />
          <circle cx="313" cy="143" r="3" fill="#F59E0B" />
          <circle cx="322" cy="143" r="3" fill="#10B981" />
          <rect x="340" y="140" width="60" height="6" rx="2" fill="#334155" />

          {/* Analytics Chart Cards on Right Screen */}
          {/* Card 1: Performance Area Chart */}
          <rect x="305" y="158" width="185" height="60" rx="4" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
          <rect x="312" y="164" width="40" height="4" rx="1" fill="#94A3B8" />
          {/* Glowing Wave Curve */}
          <path
            d="M312,205 Q335,175 360,190 T410,175 T455,185 T480,170"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2.5"
            filter="url(#screenGlow)"
          />
          {/* Fill under chart */}
          <path
            d="M312,205 Q335,175 360,190 T410,175 T455,185 T480,170 L480,210 L312,210 Z"
            fill="#38BDF8"
            opacity="0.15"
          />

          {/* Card 2: Bar Stats */}
          <rect x="305" y="225" width="88" height="65" rx="4" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
          <rect x="312" y="232" width="30" height="4" rx="1" fill="#94A3B8" />
          {/* Vertical Bars */}
          <rect x="315" y="255" width="8" height="25" rx="2" fill="#3B82F6" />
          <rect x="328" y="245" width="8" height="35" rx="2" fill="#38BDF8" />
          <rect x="341" y="260" width="8" height="20" rx="2" fill="#60A5FA" />
          <rect x="354" y="240" width="8" height="40" rx="2" fill="#10B981" />
          <rect x="367" y="250" width="8" height="30" rx="2" fill="#34D399" />

          {/* Card 3: Metrics Donut / System health */}
          <rect x="402" y="225" width="88" height="65" rx="4" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
          <rect x="410" y="232" width="35" height="4" rx="1" fill="#94A3B8" />
          <circle cx="446" cy="262" r="16" fill="none" stroke="#1E293B" strokeWidth="6" />
          <circle
            cx="446"
            cy="262"
            r="16"
            fill="none"
            stroke="#10B981"
            strokeWidth="6"
            strokeDasharray="75 100"
            transform="rotate(-90 446 262)"
          />
          <text x="446" y="266" textAnchor="middle" fill="#E2E8F0" fontSize="9" fontWeight="bold">99%</text>
        </g>

        {/* Ambient screen reflection glow on desk surface */}
        <ellipse cx="170" cy="432" rx="90" ry="4" fill="#38BDF8" opacity="0.3" filter="url(#screenGlow)" />
        <ellipse cx="400" cy="432" rx="90" ry="4" fill="#60A5FA" opacity="0.3" filter="url(#screenGlow)" />
      </svg>
    </div>
  );
};
