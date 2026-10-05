export const EVENT_INFO = {
  name: "UXORA",
  tagline: "Learn UI/UX. Solve a Real Problem. Build the Experience.",
  subtitle: "A Learning-Based UI/UX Hackathon",
  date: "08 October 2026",
  time: "9:00 AM – 4:30 PM",
  venue: "IECC Hall, Bannari Amman Institute of Technology",
  organizer: "UI/UX Community",
  institution: "Bannari Amman Institute of Technology",
  status: "Registrations Open",
  certificateNote: "All participants will receive official E-Certificates",
  registrationDeadline: "05 October 2026, 11:59 PM",
  registrationUrl: "https://forms.gle/Kk3hckHCF9xdebJv6",
};

export const REGISTRATION_URL = "https://forms.gle/Kk3hckHCF9xdebJv6";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Morning Sessions", href: "#morning" },
  { name: "Challenge", href: "#challenge" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
];

export const HERO_STATS = [
  { value: "60", label: "Participants", subtext: "Hand-picked cohort" },
  { value: "30", label: "Teams", subtext: "2 members each" },
  { value: "03", label: "Problem Statements", subtext: "Real-world briefs" },
  { value: "01", label: "Day", subtext: "Hands-on intensive" },
];

export const EXPERIENCE_STEPS = [
  {
    number: "01",
    tag: "LEARN",
    title: "Understand the fundamentals of UI/UX.",
    subtitle: "Morning Workshop Series",
    description: "Start the day with focused, high-impact sessions covering core principles of human-computer interaction, case study dissection, and design systems.",
    items: [
      "UI vs UX distinction",
      "User-centred design methodologies",
      "Case study breakdown & storytelling",
      "User journey & persona mapping",
      "User flow architecture",
      "Low-fidelity wireframing",
      "Design systems & atomic UI tokens",
    ],
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-cyan-500/30",
    icon: "BookOpen",
  },
  {
    number: "02",
    tag: "BUILD",
    title: "Put what you learned into practice.",
    subtitle: "Afternoon Design Sprint",
    description: "Your team receives a real challenge statement. Roll up your sleeves to uncover user pains, architect seamless journeys, and craft structural wireframes.",
    items: [
      "Understand the problem statement",
      "Identify target users & mindsets",
      "Uncover friction points & unmet needs",
      "Divergent & convergent ideation",
      "Map step-by-step user flows",
      "Build interactive structural wireframes",
    ],
    accent: "from-cyan-500/20 to-violet-500/10",
    border: "border-blue-500/30",
    icon: "Layers",
  },
  {
    number: "03",
    tag: "PRESENT",
    title: "Show how you solved the problem.",
    subtitle: "Pitch & Evaluation",
    description: "Present the logic and research behind your decisions before industry mentors and design leads. We prioritize clear problem reasoning over flashy visual decorations.",
    items: [
      "Problem context & validation",
      "Target persona & empathy insights",
      "Proposed strategic solution",
      "Comprehensive user flow map",
      "Interactive wireframes & hierarchy",
      "Novelty & design rationale",
    ],
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-purple-500/30",
    icon: "Sparkles",
  },
];

export const MORNING_TIMELINE = [
  {
    time: "09:00",
    title: "UI/UX Basics",
    summary: "Understand UI, UX and user-centred design.",
    detail: "Deconstruct the real difference between visual styling (UI) and user behavior psychology (UX). Understand why user empathy precedes Figma files.",
    duration: "30 mins",
    phase: "Foundation",
    topics: ["Mental Models", "Affordance & Signifiers", "Heuristic Principles"],
  },
  {
    time: "09:30",
    title: "Case Study Building",
    summary: "Learn how to structure a problem into a clear design case study.",
    detail: "Discover the standard industry frameworks for documenting discovery, constraints, trade-offs, and product decisions that recruiters look for.",
    duration: "30 mins",
    phase: "Discovery",
    topics: ["Problem Framing", "Research Synthesis", "Narrative Arc"],
  },
  {
    time: "10:00",
    title: "User Journey & User Flow",
    summary: "Understand how users move through an experience.",
    detail: "Translate messy user goals into clean decision trees, node maps, happy paths, and edge-case error recovery steps.",
    duration: "40 mins",
    phase: "Architecture",
    topics: ["Information Architecture", "Decision Diamonds", "Task Completion"],
  },
  {
    time: "10:40",
    title: "Wireframing",
    summary: "Learn how to turn ideas into simple interface structures.",
    detail: "Ditch color and high-fi distraction. Focus strictly on spacing, visual hierarchy, screen real estate, typographic contrast, and functional layouts.",
    duration: "40 mins",
    phase: "Structure",
    topics: ["Grid Systems", "Visual Hierarchy", "Component Placement"],
  },
  {
    time: "11:20",
    title: "Design System Basics",
    summary: "Learn typography, colour, spacing and components.",
    detail: "Introduction to tokenized styling, 8pt spatial grid, accessible contrast ratios, states (default, hover, pressed, disabled), and reusable components.",
    duration: "30 mins",
    phase: "System",
    topics: ["8pt Grid", "Color Roles", "Component Scalability"],
  },
  {
    time: "11:50",
    title: "Example + Q&A",
    summary: "See the complete process from problem → solution → wireframe.",
    detail: "Live walk-through of a past winning case study from prompt breakdown to structural wireframe with interactive mentor Q&A before lunch.",
    duration: "50 mins",
    phase: "Demonstration",
    topics: ["Live Walkthrough", "Rubric Alignment", "Open Floor Q&A"],
  },
];

export const CHALLENGE_STATEMENTS = [
  {
    id: "PROBLEM 01",
    label: "Challenge",
    teamsAssigned: "Teams 01 – 10",
    status: "Sealed Brief",
    releaseTime: "01:40 PM",
    docCode: "UXORA // SEC-01",
    cipher: "ENC_77A-99B",
    description: "Real-world industry design brief. Unlocked and revealed simultaneously to assigned teams at the start of Phase 02.",
  },
  {
    id: "PROBLEM 02",
    label: "Challenge",
    teamsAssigned: "Teams 11 – 20",
    status: "Sealed Brief",
    releaseTime: "01:40 PM",
    docCode: "UXORA // SEC-02",
    cipher: "ENC_42C-81F",
    description: "Real-world industry design brief. Unlocked and revealed simultaneously to assigned teams at the start of Phase 02.",
  },
  {
    id: "PROBLEM 03",
    label: "Challenge",
    teamsAssigned: "Teams 21 – 30",
    status: "Sealed Brief",
    releaseTime: "01:40 PM",
    docCode: "UXORA // SEC-03",
    cipher: "ENC_93X-14K",
    description: "Real-world industry design brief. Unlocked and revealed simultaneously to assigned teams at the start of Phase 02.",
  },
];

export const BUILD_STAGES = [
  {
    step: "01",
    title: "UNDERSTAND",
    subtitle: "What is the actual problem?",
    description: "Dig beyond superficial symptoms. Interrogate the brief, research real user frustrations, and define root systemic causes.",
    keyArtifact: "Problem Framing Canvas",
    icon: "Compass",
  },
  {
    step: "02",
    title: "DEFINE",
    subtitle: "Who are we solving it for?",
    description: "Build focused behavioral archetypes. Establish explicit user motivations, anxieties, mental models, and environmental constraints.",
    keyArtifact: "User Persona & Scenario",
    icon: "Target",
  },
  {
    step: "03",
    title: "IDEATE",
    subtitle: "What could the experience look like?",
    description: "Brainstorm high-leverage intervention points. Prioritize bold concepts that directly dismantle user bottlenecks.",
    keyArtifact: "Concept Matrix & Feature Prioritization",
    icon: "Lightbulb",
  },
  {
    step: "04",
    title: "FLOW",
    subtitle: "How will the user move through it?",
    description: "Chart end-to-end user navigation paths. Account for happy paths, decision forks, verification gates, and error loops.",
    keyArtifact: "Information Architecture & Flowchart",
    icon: "GitBranch",
  },
  {
    step: "05",
    title: "WIREFRAME",
    subtitle: "What does the solution look like?",
    description: "Translate flows into clear visual blueprints. Structure grids, information density, hierarchy, and affordances without visual noise.",
    keyArtifact: "Low-Fidelity Screen Architecture",
    icon: "Layout",
  },
  {
    step: "06",
    title: "REFINE",
    subtitle: "Does the experience actually make sense?",
    description: "Pressure-test usability with peer teams and mentors. Polish edge cases, clarify labels, and prepare persuasive presentation storytelling.",
    keyArtifact: "Presentation Deck & Heuristic Check",
    icon: "CheckCheck",
  },
];

export const LEARNING_OUTCOMES = [
  {
    index: "01",
    title: "Think like a UX designer",
    hook: "Understand users before jumping into screens.",
    body: "Break the habit of opening Figma on minute one. Learn how to interrogate assumptions, identify hidden cognitive friction, and ask the uncomfortable questions that define real digital products.",
    badge: "Cognitive Shift",
  },
  {
    index: "02",
    title: "Structure a case study",
    hook: "Turn a problem into a clear design story.",
    body: "A great design without rationale is just decoration. Master the exact documentation structure used by senior product designers at leading tech firms to articulate why every pixel exists.",
    badge: "Portfolio Ready",
  },
  {
    index: "03",
    title: "Build user flows",
    hook: "Map how users move through a product.",
    body: "Eliminate dead ends and confusing navigation. Learn to draft robust flow diagrams that engineering teams can immediately build from without ambiguity.",
    badge: "Product Architecture",
  },
  {
    index: "04",
    title: "Create wireframes",
    hook: "Turn ideas into usable interface structures.",
    body: "Develop lightning-fast wireframing speed. Use layout density, spacing rules, and visual weight to communicate complex information effortlessly.",
    badge: "Core Discipline",
  },
  {
    index: "05",
    title: "Think with design systems",
    hook: "Use typography, colour, spacing and components consistently.",
    body: "Gain muscle memory in 8pt spatial rhythm, atomic component structures, accessible WCAG contrast formulas, and stateful interaction conventions.",
    badge: "Systemic Thinking",
  },
  {
    index: "06",
    title: "Present your design",
    hook: "Explain not just what you designed, but why.",
    body: "Pitch with conviction. Defend your team's trade-offs, answer tough stakeholder critiques, and connect user outcomes directly to product viability.",
    badge: "Executive Storytelling",
  },
];

export const PRESENTATION_SEQUENCE = [
  { step: "01", name: "Problem", prompt: "What exact pain point did your team tackle, and why does it matter?" },
  { step: "02", name: "User", prompt: "Who experiences this friction, under what context, and with what mental model?" },
  { step: "03", name: "Solution", prompt: "What is your strategic hypothesis and core value proposition?" },
  { step: "04", name: "User Flow", prompt: "How does the user navigate from discovery to goal completion?" },
  { step: "05", name: "Wireframes", prompt: "How are information, actions, and spatial hierarchies organized on screen?" },
  { step: "06", name: "Novelty", prompt: "What makes your approach genuinely clever or distinct from existing apps?" },
  { step: "07", name: "Why this solution?", prompt: "Defend your design choices, trade-offs, and usability validation." },
];

export const JUDGING_CRITERIA = [
  { name: "Problem Understanding", weight: 15, desc: "Clarity of the pain point and depth of initial inquiry" },
  { name: "User Understanding", weight: 10, desc: "Empathy with target persona, context, and constraints" },
  { name: "Solution Relevance", weight: 15, desc: "Does the concept directly address root causes identified?" },
  { name: "User Flow", weight: 10, desc: "Logical continuity, absence of dead-ends, edge case handling" },
  { name: "Wireframe Quality", weight: 20, desc: "Hierarchy, spacing, structural clarity, layout intent", isPrimary: true },
  { name: "Usability", weight: 10, desc: "Intuitive affordances, readability, low cognitive friction" },
  { name: "Design Principles", weight: 5, desc: "Consistent grid usage, spatial rhythm, token awareness" },
  { name: "Novelty", weight: 10, desc: "Fresh perspective, creative differentiation, smart execution" },
  { name: "Presentation", weight: 5, desc: "Articulating why decisions were made with precision" },
];

export const SCHEDULE_PHASES = [
  {
    phase: "MORNING — LEARN",
    time: "8:45 — 12:40",
    badge: "Phase 01 · Intensive",
    accent: "border-cyan-500/40 text-cyan-400",
    glow: "rgba(0, 210, 255, 0.15)",
    items: [
      { time: "08:45 AM", title: "Check-in & Kit Distribution", room: "IECC Lobby" },
      { time: "09:00 AM", title: "UI/UX Basics & Mental Models", room: "Main Stage" },
      { time: "09:30 AM", title: "Case Study Breakdown & Storytelling", room: "Main Stage" },
      { time: "10:00 AM", title: "User Journey & User Flow Architecture", room: "Main Stage" },
      { time: "10:40 AM", title: "Wireframing Workshop (Structure Over Polish)", room: "Design Lab" },
      { time: "11:20 AM", title: "Design System Fundamentals (Tokens & Spacing)", room: "Design Lab" },
      { time: "11:50 AM", title: "Live End-to-End Walkthrough + Q&A", room: "Main Stage" },
      { time: "12:40 PM", title: "Lunch & Team Strategy Sync", room: "Dining Hall" },
    ],
  },
  {
    phase: "AFTERNOON — BUILD",
    time: "1:40 — 4:00",
    badge: "Phase 02 · Design Sprint",
    accent: "border-blue-500/40 text-blue-400",
    glow: "rgba(41, 121, 255, 0.15)",
    items: [
      { time: "01:40 PM", title: "Problem Statement Reveal & Allotment", room: "Main Stage" },
      { time: "02:00 PM", title: "Team Discovery & User Persona Definition", room: "Team Pods" },
      { time: "02:30 PM", title: "User Flow Mapping & Decision Trees", room: "Team Pods" },
      { time: "03:00 PM", title: "Wireframe Production & Screen Architecture", room: "Team Pods" },
      { time: "03:40 PM", title: "Peer Heuristic Check & Mentor Reviews", room: "Team Pods" },
      { time: "03:55 PM", title: "Final Deck Lock & Submission", room: "Portal" },
    ],
  },
  {
    phase: "FINAL REVIEW",
    time: "4:00 — 4:30",
    badge: "Phase 03 · Showcase",
    accent: "border-purple-500/40 text-purple-400",
    glow: "rgba(124, 77, 255, 0.15)",
    items: [
      { time: "04:00 PM", title: "Top Pitch Showcases & Jury Q&A", room: "IECC Auditorium" },
      { time: "04:20 PM", title: "Jury Deliberation & Scoring Synthesis", room: "Jury Room" },
      { time: "04:25 PM", title: "Award Ceremony & E-Certificate Reveal", room: "IECC Auditorium" },
      { time: "04:30 PM", title: "Closing Remarks & Networking Session", room: "IECC Auditorium" },
    ],
  },
];

export const AUDIENCE_GROUPS = [
  {
    title: "Students",
    description: "Interested in learning real product and interface design rather than just coding or theory.",
    tag: "College & Univ",
    icon: "GraduationCap",
  },
  {
    title: "Beginners",
    description: "Starting their UI/UX journey with zero prior experience. We teach you from square one.",
    tag: "Zero Prerequisites",
    icon: "Sparkle",
  },
  {
    title: "Aspiring Designers",
    description: "Wanting to build practical case study experience and understand industry-standard frameworks.",
    tag: "Portfolio Seekers",
    icon: "Palette",
  },
  {
    title: "Developers & Tech Students",
    description: "Wanting to understand the human side of software to build significantly better products.",
    tag: "Engineers & PMs",
    icon: "Code2",
  },
];

export const TAKEAWAYS_LIST = [
  "A practical, hands-on UI/UX experience guided by active mentors",
  "A complete, battle-tested problem-solving methodology",
  "A rigorous end-to-end user flow with logic paths",
  "A high-quality set of structural wireframes",
  "A presentation-ready design pitch defending your choices",
  "Invaluable experience collaborating in an agile design team",
  "A comprehensive starting point for a real portfolio case study",
  "Official UXORA E-Certificate of Participation & Achievement",
];

export const FAQ_LIST = [
  {
    q: "Do I need prior UI/UX experience?",
    a: "No. The morning sessions (9:00 AM – 12:40 PM) are specifically designed to teach you the core principles of UI/UX, user flows, and wireframing before the design sprint begins.",
    category: "Participation",
  },
  {
    q: "Do I need to know Figma?",
    a: "Basic familiarity is helpful, but this hackathon is tool-agnostic. The primary focus is on UX thinking, information hierarchy, and wireframing. You can use Figma, pen & paper wireframe templates, or digital boards.",
    category: "Tools",
  },
  {
    q: "How many people can be in a team?",
    a: "Teams strictly consist of 2 members (30 teams total, 60 participants). If you register as a solo participant, our organizers will pair you with a complementary designer during morning check-in.",
    category: "Teams",
  },
  {
    q: "How many problem statements are there?",
    a: "There are 3 distinct real-world problem statements. Each statement will be distributed across 10 teams (30 teams total).",
    category: "Challenge",
  },
  {
    q: "What do we need to present?",
    a: "Your team will present 7 key elements: Problem Understanding, Target User Persona, Solution Hypothesis, User Flow Diagram, Wireframe Blueprint, Novelty Factor, and Design Trade-offs Rationale.",
    category: "Evaluation",
  },
  {
    q: "Is this only about making beautiful UI?",
    a: "Absolutely not. This is a learning-focused UX hackathon. The highest weighted criterion is Wireframe Quality (20%) and Problem Understanding (15%). Usability and reasoning trump flashy colors.",
    category: "Judging",
  },
];
