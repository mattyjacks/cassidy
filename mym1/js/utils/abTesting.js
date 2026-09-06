window.AB_TEST_REGISTRY = [
  {
    id: "master",
    code: "CONTROL-00",
    name: "Complete Institutional Master",
    path: "/mym1/index.html",
    relativePath: "index.html",
    headline: "Transforming Dental Practices Into High-Ticket Surgical Powerhouses",
    angle: "Full Hybrid Architecture: Cinematic Storytelling + Clinical Hygiene Pedigree + 90-Day Iron-Clad Guarantee",
    hypothesis: "Providing all three pillars (Emotion, Clinical Credibility, Financial Risk Reversal) provides maximum overall conversion for established multi-chair practices.",
    targetVisitor: "General implant surgeons, high-end cosmetic practitioners, practice owners seeking institutional assurance.",
    color: "#D4AF37"
  },
  {
    id: "ab1",
    code: "CINEMA-01",
    name: "A/B Test 1: The Hollywood Director Cut",
    path: "/mym1/ab/1/index.html",
    relativePath: "ab/1/index.html",
    headline: "Cinema Over Clicks: The Peter Jackson & Roger Ebert Methodology",
    angle: "Narrative Immersion, Suspension of Disbelief & Hollywood-Grade Production",
    hypothesis: "Framing Cassidy Torrey as an executive filmmaker who treats patient transformation with cinematic gravitas will trigger deep emotional resonance and high case-value acceptance.",
    targetVisitor: "Aesthetic dentists, luxury cosmetic surgeons, doctors repulsed by cheap corporate ads.",
    color: "#E5C158"
  },
  {
    id: "ab2",
    code: "GUARANTEE-02",
    name: "A/B Test 2: The 90-Day Iron-Clad Risk Reversal",
    path: "/mym1/ab/2/index.html",
    relativePath: "ab/2/index.html",
    headline: "Guaranteed 7X - 10X ROAS in 90 Days Or We Work 100% Free",
    angle: "Direct-Response Dominance, Zero Risk & Measurable Capital Multipliers",
    hypothesis: "For doctors burned by previous marketing agencies, total risk elimination through an explicit 'we work free until you grow' guarantee yields the fastest consultation booking rate.",
    targetVisitor: "Skeptical practice owners, ROI-driven doctors who have lost money to generic agencies.",
    color: "#10B981"
  },
  {
    id: "ab3",
    code: "CLINICAL-03",
    name: "A/B Test 3: The Clinical Insider",
    path: "/mym1/ab/3/index.html",
    relativePath: "ab/3/index.html",
    headline: "Created By A Dental Hygiene Scholar, Engineered For Surgeons",
    angle: "MCC Bullhead Academic Honors & First-Hand Operatory Knowledge",
    hypothesis: "Establishing that Cassidy Torrey was honored for academic excellence in Dental Hygiene proves he understands the clinical realities of the operatory, eliminating the fear of agency ignorance.",
    targetVisitor: "Strict clinical surgeons, periodontists, prosthodontists who distrust non-medical ad salespeople.",
    color: "#38BDF8"
  },
  {
    id: "ab4",
    code: "DSO-SLAYER-04",
    name: "A/B Test 4: The DSO Slayer & Independent Practice Rescuer",
    path: "/mym1/ab/4/index.html",
    relativePath: "ab/4/index.html",
    headline: "Reclaim Your Community From Private-Equity Dental Chains",
    angle: "Anti-Corporate Consolidation, Authentic Local Hero Positioning",
    hypothesis: "Tapping into the independent doctor's existential rage against PE-backed DSOs establishes Manifest Media as their essential tactical defense weapon.",
    targetVisitor: "Independent doctors facing aggressive DSO competition within a 5-mile radius.",
    color: "#F43F5E"
  },
  {
    id: "ab5",
    code: "FULL-ARCH-05",
    name: "A/B Test 5: The Full-Arch Zirconia Specialist",
    path: "/mym1/ab/5/index.html",
    relativePath: "ab/5/index.html",
    headline: "Fill Your Operatories With $25,000+ All-on-X Surgical Cases",
    angle: "High-Ticket Surgical Focus, Maximum Case Value Economics",
    hypothesis: "Focusing strictly on high-ticket full arch restorations ($25k-$55k) filters for elite surgeons and demonstrates that a single closed case covers the entire retainer.",
    targetVisitor: "Oral and maxillofacial surgeons, implant specialists seeking full-arch cases exclusively.",
    color: "#A855F7"
  },
  {
    id: "ab6",
    code: "SCARCITY-06",
    name: "A/B Test 6: The 4-Practice Monthly Cap",
    path: "/mym1/ab/6/index.html",
    relativePath: "ab/6/index.html",
    headline: "Strictly Limited To 4 Practice Onboarding Slots Per Month",
    angle: "Extreme Operational Scarcity & Geographic Exclusivity",
    hypothesis: "Rigid territorial exclusivity and monthly caps induce intense urgency, compelling doctors to book immediately before their local competitor locks down the territory.",
    targetVisitor: "Competitive high-producing dentists motivated by territorial exclusivity.",
    color: "#F59E0B"
  }
];

window.getAbVariantById = function(id) {
  for (var i = 0; i < window.AB_TEST_REGISTRY.length; i++) {
    if (window.AB_TEST_REGISTRY[i].id === id) {
      return window.AB_TEST_REGISTRY[i];
    }
  }
  return window.AB_TEST_REGISTRY[0];
};

window.resolveAbUrl = function(currentDepth, targetRelativePath) {
  var prefix = "";
  if (currentDepth === 2) {
    prefix = "../../";
  } else if (currentDepth === 1) {
    prefix = "../";
  } else {
    prefix = "./";
  }
  return prefix + targetRelativePath;
};
