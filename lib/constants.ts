// Color scheme
export const COLORS = {
  primary: "#c5a02c",
  dark: "#000000",
  paper: "#f2f1ed",
  textMain: "#1a1a1a",
  white: "#ffffff",
  footerBg: "#0b0b0b",
} as const;

// Company information
export const COMPANY = {
  name: "SKG Group",
  tagline: "Premium Contractual Solutions in Infrastructure",
  founder: "Mr. Sunil Kumar Gupta",
  administrator: "Krish Gupta",
  coPartner: "Avinash Kumar",
} as const;

// Contact information
export const CONTACT = {
  headOffice: {
    location: "Ashok Nagar, Dhansar, Dhanbad, J.H. 826001, India",
    label: "HeadOffice",
  },
  branch1: {
    location: "Pandhavpara, Baikunthpur, Korea, C.G. 497331, India",
    label: "Branch 1",
  },
  branch2: {
    location: "Rajnagar, Annupur, M.P. 484446, India",
    label: "Branch 2",
  },
  phones: ["+91 7992305348", "+91 8085818006"],
  whatsapp: "+917992305348",
  email: "skggroup.8006@gmail.com",
  instagram: "company_8006",
} as const;

// Services data
export const SERVICES = [
  {
    title: "Mining Jobs",
    items: [
      "Specialist in Coring & Non-Coring bore hole in underground or surface.",
      "Heightening of galleries.",
      "Roof bolting or side bolting in underground mines.",
    ],
  },
  {
    title: "Civil Jobs",
    items: [
      "Automatic chlorination system work in bore holes.",
      "All types of construction works.",
      "CONSTRUCTION of STP (Sewage Treatment Plants).",
    ],
  },
  {
    title: "Electrical Jobs",
    items: [
      "Maintenance of OH LINE - 11KV.",
      "ALL TYPE OF HEAT SHRINKABLE KITS / CABLE JOINTING KITS / TERMINATION KITS.",
      "PANEL WORKS.",
    ],
  },
] as const;

// Company entities
export const ENTITIES = [
  {
    id: "skg",
    acronym: "SKG",
    name: "M/s. SUNIL KUMAR GUPTA",
    role: "Parent Entity",
    description:
      "The foundational pillar of our operations, handling major contracting works in mining and heavy infrastructure with decades of legacy.",
  },
  {
    id: "sm",
    acronym: "S&M",
    name: "SUN & MOON ENTERPRISES",
    role: "Specialized Contracts",
    description:
      "Focused on electrical installations, mechanical maintenance, and specialized civil engineering projects requiring high precision.",
  },
  {
    id: "acs",
    acronym: "ACS",
    name: "AARAMBH CONSTRUCTION & SUPPLIERS PVT LTD",
    role: "Mining & Material",
    description:
      "Ensuring the timely procurement of mining and materials for uninterrupted project execution.",
  },
] as const;

// Leadership team
export const LEADERSHIP = [
  {
    name: "Mr. Sunil Kumar Gupta",
    role: "Founder",
    image: "/images/landing/Founder.jpeg",
    description:
      "The visionary pillar of SKG Group. His decades of experience in the mining sector have built a legacy defined by reliability, ethical contracting, and sustainable growth.",
  },
  {
    name: "Krish Gupta",
    role: "Administrator",
    image: "/images/landing/Admin.jpeg",
    description:
      "Spearheading SKG's modern operations. He ensures seamless project management, integrating advanced logistics and technology to meet strict deadlines.",
  },
  {
    name: "Avinash Kumar",
    role: "Co Partner",
    image: "/images/landing/Admin1.jpeg",
    description:
      "Responsible for overseeing SKG's operations and management. He coordinates the workforce and logistics to ensure projects are executed safely and efficiently.",
  },
] as const;

// Safety compliance
export const SAFETY = [
  "Zero Harm Policy",
  "DGMS Compliance",
  "PPE Enforcement",
  "Emergency Ready",
] as const;

// Vision
export const VISION = "Building excellence and creating the future.";

// Gallery images with descriptions
export const GALLERY_ITEMS = [
  { src: "/images/gallery/Work1.jpeg", title: "Underground Coring Operations", desc: "Execution of specialized upward coring for water drainage and pressure relief in underground strata." },
  { src: "/images/gallery/Work2.jpeg", title: "Precision Machinery Setup", desc: "Deployment of specialized drilling rigs in confined underground galleries for strata control." },
  { src: "/images/gallery/Work3.jpeg", title: "High-Pressure Water Management", desc: "Successful tapping of underground water pockets to ensure safe working conditions in the mine." },
  { src: "/images/gallery/Work4.jpeg", title: "Heavy Civil Foundation", desc: "Reinforced steel cage preparation for deep pile foundations of industrial structures." },
  { src: "/images/gallery/Work5.jpeg", title: "Structural Raft Reinforcement", desc: "Large-scale rebar grid layout for a heavy-duty industrial floor raft, ensuring maximum load-bearing capacity." },
  { src: "/images/gallery/Work6.jpeg", title: "Advanced Formwork Systems", desc: "Installation of heavy-duty shuttering and formwork for concrete retaining walls and channels." },
  { src: "/images/gallery/Work7.jpeg", title: "Site Development & Trenching", desc: "JCB deploying for trench excavation and site leveling in challenging soil conditions." },
  { src: "/images/gallery/Work8.jpeg", title: "Raft Reinforcement", desc: "Erection of vertical steel reinforcement for structural raft in a multi-level facility." },
  { src: "/images/gallery/Work9.jpeg", title: "Skilled Manual Execution", desc: "Expert technicians performing precision rebar tying and layout for foundation beams." },
  { src: "/images/gallery/Work10.jpeg", title: "Skilled Manual Execution", desc: "Expert technicians performing precision rebar tying and layout for foundation beams." },
  { src: "/images/gallery/Work11.jpeg", title: "Skilled Manual Execution", desc: "Expert technicians performing precision rebar tying and layout for foundation beams." },
  { src: "/images/gallery/Work12.jpeg", title: "Coring Bore hole", desc: "Coring bore hole in CHURCHA UG COAL MINE, SECL (FOR SCIENTIFIC STUDY). Gained valuable experience with Prof Rabindra Kumar Sinha, Assistant Professor at IIT Dhanbad." },
  { src: "/images/gallery/Work13.jpeg", title: "Skilled Manual Execution", desc: "Expert technicians performing precision rebar tying and layout for foundation beams." },
  { src: "/images/gallery/Work14.jpeg", title: "Skilled Manual Execution", desc: "Expert technicians performing precision rebar tying and layout for foundation beams." },
  { src: "/images/gallery/Work15.jpeg", title: "Skilled Manual Execution", desc: "Expert technicians performing precision rebar tying and layout for foundation beams." },
  { src: "/images/gallery/Work16.jpeg", title: "Skilled Manual Execution", desc: "Expert technicians performing precision rebar tying and layout for foundation beams." },
];

// Gallery images array for backward compatibility
export const GALLERY_IMAGES = GALLERY_ITEMS.map(item => item.src);

// Landing page images (Leadership & Clients)
export const LANDING_IMAGES = {
  founder: "/images/landing/Founder.jpeg",
  admin: "/images/landing/Admin.jpeg",
  coPartner: "/images/landing/Admin1.jpeg",
} as const;

// Client logos
export const CLIENT_LOGOS = Array.from({ length: 13 }, (_, i) => {
  return `/images/landing/client${i + 1}.jpeg`;
});

// Animation config
export const AOS_CONFIG = {
  duration: 1000,
  once: true,
} as const;