window.DIAGNOSTIC_QUIZ = [
  {
    pillar: "Promise",
    question: "How distinctly does your community perceive your clinical authority against corporate DSO chains?",
    options: [
      { text: "We blend in with generic ads; local patients frequently choose corporate chains based on price alone.", score: 5 },
      { text: "We have some loyal word-of-mouth patients, but new implant leads still question our fees and authority.", score: 12 },
      { text: "We are the unquestioned localized surgical authority; nearby corporate chains are rendered conceptually irrelevant.", score: 20 }
    ]
  },
  {
    pillar: "Picture",
    question: "What is the primary visual and narrative focus of your current advertising creative?",
    options: [
      { text: "Clinical features: pictures of titanium screws, CT scanners, sterile operatory chairs, and stock photo smiles.", score: 4 },
      { text: "Standard before/after dental photos with clinical retractors that sometimes intimidate nervous patients.", score: 10 },
      { text: "Cinematic life transformation: patients biting into steak, laughing at family weddings, and experiencing emotional escapism.", score: 20 }
    ]
  },
  {
    pillar: "Proof",
    question: "What level of verified video proof do prospective implant candidates see before calling you?",
    options: [
      { text: "Zero video. Just written Google reviews or generic stock photography on our website.", score: 3 },
      { text: "Awkward smartphone clips recorded by staff with echoey audio and fluorescent operatory lighting.", score: 9 },
      { text: "Hollywood-grade 4K patient documentary films shot in our clinic by vetted American cinematographers.", score: 20 }
    ]
  },
  {
    pillar: "Pitch",
    question: "How frictionless is your financial presentation and financing pre-qualification process?",
    options: [
      { text: "We hide pricing completely until the in-person consult, causing massive sticker shock and lost acceptance.", score: 5 },
      { text: "We mention financing is available, but patients have to fill out awkward paperwork in the waiting room.", score: 11 },
      { text: "Crystal-clear pricing tiers and instant digital pre-qualification (Proceed, CareCredit, Sunbit) inside our funnel.", score: 20 }
    ]
  },
  {
    pillar: "Polish",
    question: "What is the subconscious impression created by your media quality across YouTube and Meta?",
    options: [
      { text: "Low-budget or outsourced overseas; looks like a generic corporate agency template.", score: 4 },
      { text: "Decent digital presence, but lacks the high-bitrate cinematic sheen expected of a premier surgical center.", score: 10 },
      { text: "Elite cinema master: anamorphic lighting, crisp boom audio, color-graded to reflect five-figure surgical mastery.", score: 20 }
    ]
  }
];

window.getDiagnosticResult = function(totalScore) {
  if (totalScore < 45) {
    return {
      tier: "Critical DSO Vulnerability",
      color: "#EF4444",
      summary: "Your practice is bleeding high-ticket implant cases to corporate DSO chains and commodity advertisers. Your clinical mastery is hidden behind sterile marketing.",
      recommendation: "Immediate full-scale deployment of the 5 P's Framework and on-location cinema shoot. Backed by Cassidy Torrey's 90-Day Iron-Clad Guarantee."
    };
  } else if (totalScore < 75) {
    return {
      tier: "Moderate Conversion Friction",
      color: "#F59E0B",
      summary: "You possess strong clinical skills and decent reputation, but significant skepticism and price resistance are leaving empty surgical blocks on your schedule.",
      recommendation: "Refine your Proof and Polish pillars. Deploying authentic 4K patient documentaries will elevate treatment acceptance by 40%+."
    };
  } else {
    return {
      tier: "Elite Surgical Powerhouse",
      color: "#10B981",
      summary: "Your practice operates with strong clinical authority. Scaling with Manifest Media will solidify full regional monopoly across multiple counties.",
      recommendation: "Scale your monthly ad capital to $10,000+ to achieve complete market dominance and book surgical chairs 8+ weeks out."
    };
  }
};
