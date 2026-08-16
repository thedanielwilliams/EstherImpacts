export const initialPortfolioData = {
  personalInfo: {
    name: "Esther Onyendu",
    title: "Impact-Driven Project & Operations Professional",
    subtitle: "Working across education, community development, digital inclusion and capacity building.",
    tagline: "RESOURCEFUL BY NATURE. IMPACTFUL BY DESIGN.",
    email: "esther.onyendu@gmail.com",
    phone: "+234 812 345 6789",
    location: "Ibadan & Lagos, Nigeria",
    linkedin: "https://linkedin.com/in/esther-onyendu",
    github: "https://github.com/estheronyendu",
    bio: "I am most useful where there is a goal, a gap and something that needs to be figured out. Give me a problem, people and a purpose. I will help turn them into progress.",
    quote: "Resourcefulness, to me, is not doing more with less for the sake of it. It is knowing what matters enough to make limited resources count.",
    cvUrl: "#download-cv"
  },

  hero: {
    headline: "I TURN IDEAS, PEOPLE AND LIMITED RESOURCES INTO IMPACT.",
    subheadline: "Project & Operations Professional working across education, community development, digital inclusion and capacity building.",
    alternativeLine: "I build solutions where people, purpose and execution meet.",
    heroTags: [
      { label: "Projects", category: "management" },
      { label: "Operations", category: "ops" },
      { label: "Education", category: "edtech" },
      { label: "Digital Inclusion", category: "tech" },
      { label: "Community Impact", category: "social" }
    ],
    ctaPrimary: "Explore My Work",
    ctaSecondary: "About Esther"
  },

  impactMetrics: [
    {
      id: "years-lead",
      value: 4,
      suffix: "+ Years",
      label: "Leading projects, programmes and community initiatives",
      context: "Cross-functional execution across education, youth empowerment, and rural digital literacy."
    },
    {
      id: "membership-growth",
      value: 700,
      suffix: "%",
      label: "Growth in active field membership",
      context: "Scaled Digital Onboarders CDS from 3 core volunteers into a thriving 25+ active team."
    },
    {
      id: "exam-benchmark",
      value: 65,
      suffix: "%",
      label: "Student exam success benchmark",
      context: "Achieved through targeted edtech interventions and data-aware learning diagnostics in borderland schools."
    },
    {
      id: "alumni-network",
      value: 400,
      suffix: "+",
      label: "Alumni network developed",
      context: "Trained and mobilized youth across regional digital inclusion and capacity building initiatives."
    },
    {
      id: "learners-managed",
      value: 60,
      suffix: "+",
      label: "Learners directly managed",
      context: "Structured educational programs, soft-skills acceleration, and mentorship tracks."
    }
  ],

  howIWork: {
    title: "HOW I WORK",
    intro: "I am most useful where there is a goal, a gap and something that needs to be figured out.",
    description: "I combine structured problem-solving with grounded resourcefulness. Managing programme lifecycles, coordinating stakeholders, tracking resources, designing interventions, using data to identify gaps, and translating raw ideas into sustainable operational realities.",
    principles: [
      {
        num: "01",
        title: "Understand the problem",
        subtitle: "Start with people, context and evidence.",
        description: "Before jumping into solutions, I dive deep into community realities, baseline metrics, and stakeholder constraints. Good design is root-cause focused."
      },
      {
        num: "02",
        title: "Build the system",
        subtitle: "Turn ideas into clear processes and measurable outcomes.",
        description: "Inspiration is temporary; systems endure. I establish realistic KPIs, transparent workflows, responsibilities, and lightweight monitoring frameworks."
      },
      {
        num: "03",
        title: "Mobilise the resources",
        subtitle: "Find the people, partnerships and tools needed to move.",
        description: "When budgets are tight, resourcefulness shines. I connect local talent, partner organizations, open-source EdTech tools, and creative community assets."
      },
      {
        num: "04",
        title: "Measure what changed",
        subtitle: "Impact should be visible beyond activity reports.",
        description: "Success isn't just delivering a workshop—it's tracking long-term behavior change, academic improvement, and community self-reliance."
      }
    ]
  },

  projects: [
    {
      id: "the-mind-project",
      title: "THE MIND PROJECT",
      category: "Youth Development / Education / Project Management",
      tags: ["Soft Skills", "Career Orientation", "Mentorship Framework"],
      shortDesc: "Conceptualised, launched and managed a low-cost youth empowerment framework in a borderland secondary school.",
      heroImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
      challenge: "Students in underserved borderland secondary schools faced severe gaps in soft skills, career orientation, and self-belief due to systemic lack of extracurricular enrichment and guidance.",
      approach: "Designed a lean, highly adaptable 8-week youth empowerment curriculum leveraging existing school hours and zero-cost local volunteer mentors.",
      action: "Coordinated teacher-student matching, structured weekly interactive modules on goal-setting, critical thinking, and communication, and established performance tracking KPIs.",
      result: "Over 60 students completed the inaugural cohort with a 94% retention rate, demonstrable improvements in public speaking confidence, and 100% project sustainability adoption by school leadership.",
      lesson: "High impact does not require high budgets. Empowering local champions creates self-sustaining educational interventions.",
      context: "Command & Regional Borderland Schools, Nigeria",
      keyMetrics: [
        { label: "Cohort Participants", value: "60+ Students" },
        { label: "Completion Rate", value: "94%" },
        { label: "Cost Per Student", value: "Near Zero" }
      ],
      toolsUsed: ["Project Lifecycle Management", "Curriculum Design", "Mentorship Alignment", "KPI Tracking"]
    },
    {
      id: "digital-onboarders",
      title: "DIGITAL ONBOARDERS CDS",
      category: "Digital Inclusion / Leadership / Community Development",
      tags: ["Community Growth", "SME Onboarding", "Digital Literacy"],
      shortDesc: "How do you build a functioning digital-inclusion movement when you begin with only three active members?",
      heroImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      challenge: "Inherited a stagnant Community Development Service (CDS) unit with only 3 active members, minimal community trust, and zero funding for digital outreach.",
      approach: "Rebuilt team culture through clear role allocation, aggressive field recruitment, and aligning digital training modules with immediate local business needs.",
      action: "Led grassroots workshops on Google Business Profile onboarding for local SMEs, digital literacy drives for youth, and structured peer-led training tracks.",
      result: "Scaled active membership by 700% (from 3 to 25+ core members), built a regional network of over 400 alumni, and digitally onboarded dozens of micro-enterprises.",
      lesson: "Leadership is about creating momentum. When people see early wins and clear structure, participation explodes naturally.",
      context: "National Youth Service Corps (NYSC) / Regional CDS",
      keyMetrics: [
        { label: "Active Member Growth", value: "700% (3 → 25+)" },
        { label: "Alumni Network", value: "400+ Youth" },
        { label: "SMEs Onboarded", value: "35+ Local Businesses" }
      ],
      toolsUsed: ["Stakeholder Mobilisation", "Digital Literacy Coaching", "Team Leadership", "Google Business Profile"]
    },
    {
      id: "education-performance-intervention",
      title: "EDUCATION PERFORMANCE INTERVENTION",
      category: "Education / Data / Programme Improvement",
      tags: ["Data Analytics", "EdTech Diagnostics", "Academic Growth"],
      shortDesc: "Used performance data and targeted edtech interventions to identify learning gaps and raise student exam outcomes.",
      heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      challenge: "Students in target secondary school cohorts exhibited volatile examination performance with baseline national examination pass rates hovering below 40%.",
      approach: "Conducted granular diagnostic testing to pinpoint topic-specific learning deficits in Biology and core subjects, grouping students by specific intervention needs.",
      action: "Deployed targeted review sessions, digital practice quizzes, and customized learning plans for high-risk student clusters over a 6-month intensive cycle.",
      result: "Elevated national examination success rates to 65%, establishing a benchmark for academic recovery in high-stakes assessment environments.",
      lesson: "Data removes guesswork. When interventions target exact diagnostic gaps rather than generic repetition, student outcomes improve dramatically.",
      context: "Oluyole Estate High School & Partner Academies",
      keyMetrics: [
        { label: "Exam Success Benchmark", value: "65%" },
        { label: "Baseline Pass Increase", value: "+25% Points" },
        { label: "Diagnostic Micro-Tests", value: "120+ Administered" }
      ],
      toolsUsed: ["Quantitative Learning Analysis", "Targeted Remediations", "Student Progress Dashboards", "Curriculum Mapping"]
    },
    {
      id: "international-day-initiatives",
      title: "INTERNATIONAL DAY INITIATIVES",
      category: "Youth Development / Stakeholder Mobilisation / Events",
      tags: ["Event Management", "Advocacy", "Resource Mobilisation"],
      shortDesc: "Mobilised multi-stakeholder coalitions to host impactful regional observances for the Girl Child and Boy Child.",
      heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      challenge: "Creating memorable, high-impact youth observances (International Day of the Girl Child & Boy Child) without institutional funding or pre-assigned event space.",
      approach: "Forged strategic partnerships with local community centers, guest facilitators, NGO partners, and youth speakers to pool resources and venue space.",
      action: "Orchestrated end-to-end event logistics, curated interactive panel sessions on STEM careers, gender equality, and mental health, and managed media outreach.",
      result: "Engaged 300+ youth across multiple school districts, secured 100% donated materials/refreshments, and generated widespread community endorsement.",
      lesson: "Coalition building amplifies impact. Shared purpose turns potential competitors into collaborative partners.",
      context: "Cross-Community Youth Observances",
      keyMetrics: [
        { label: "Youth Attendees", value: "300+" },
        { label: "Community Partners", value: "8 Organisations" },
        { label: "Direct Budget Cost", value: "0 NGN (100% In-Kind)" }
      ],
      toolsUsed: ["Stakeholder Mobilisation", "Event Operations", "Public Speaking & Moderation", "Resource Allocation"]
    },
    {
      id: "digital-learning-borderland",
      title: "DIGITAL LEARNING IN BORDERLAND COMMUNITIES",
      category: "EdTech / Education Innovation",
      tags: ["Multimedia Learning", "Offline EdTech", "Digital Assessment"],
      shortDesc: "Bringing modern digital learning closer to communities that are often farthest from technological infrastructure.",
      heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      challenge: "Remote borderland schools lacked reliable internet, computers, and digital instructional materials, creating a widening tech divide for learners.",
      approach: "Introduced offline-compatible EdTech tools, pre-loaded video lessons, and interactive quiz sessions using portable equipment.",
      action: "Facilitated weekly tech exposure labs, trained rural teachers on integrating visual digital content into standard biology/science curricula, and established digital peer clubs.",
      result: "Trained over 150 borderland students in basic digital tool usage and visual learning methods, boosting subject comprehension and tech confidence.",
      lesson: "Innovation is about accessibility. EdTech solutions must fit the infrastructure realities of the communities they serve.",
      context: "Teach For Nigeria / Borderland Educational Outreach",
      keyMetrics: [
        { label: "Students Reached", value: "150+" },
        { label: "Teachers Trained", value: "12 Educators" },
        { label: "Digital Exposure Hours", value: "80+ Hours" }
      ],
      toolsUsed: ["EdTech Platforms", "Instructional System Design", "Offline Content Delivery", "Capacity Building"]
    }
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Field Mentorship Session",
      location: "Borderland Secondary School, Ogun State",
      year: "2023",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      story: {
        what: "Conducting an interactive soft-skills workshop with secondary school students under The Mind Project framework.",
        problem: "Students struggled with public confidence and articulating career aspirations in front of peers.",
        outcome: "Created a safe space for peer feedback; 100% of participants presented their goal roadmaps by the end of the term."
      }
    },
    {
      id: "gal-2",
      title: "Digital Onboarders Leadership Huddle",
      location: "NYSC Secretariat, Oyo State",
      year: "2024",
      category: "Digital Inclusion",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      story: {
        what: "Strategic planning huddle with core field volunteers defining Q3 digital onboarding targets for local micro-enterprises.",
        problem: "The team needed a clear roadmap to transition from basic computer literacy to tangible SME digital support.",
        outcome: "Streamlined operational roles and successfully onboarded 15 new small businesses in the following month."
      }
    },
    {
      id: "gal-3",
      title: "International Day of the Girl Child Advocacy",
      location: "Community Center Hall, Ibadan",
      year: "2023",
      category: "Community",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      story: {
        what: "Keynote facilitation on digital rights and educational resilience for young girls in peri-urban communities.",
        problem: "High drop-out risk among teenage girls due to socio-economic pressures and lack of female mentorship in tech.",
        outcome: "Established a ongoing peer mentorship network connecting secondary school girls with university scholars."
      }
    },
    {
      id: "gal-4",
      title: "Data Diagnostic Review with School Leadership",
      location: "Oluyole Estate High School",
      year: "2022",
      category: "Projects",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      story: {
        what: "Presenting diagnostic learning metrics to senior teachers and school administrators.",
        problem: "Low examination scores were previously blamed on student apathy without specific topic evidence.",
        outcome: "Identified 4 key subject bottlenecks and restructured the weekly timetable for targeted remedial coaching."
      }
    },
    {
      id: "gal-5",
      title: "EdTech Offline Lab Installation",
      location: "Regional Learning Center",
      year: "2023",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      story: {
        what: "Setting up low-cost offline digital assessment tools for science classes in non-grid areas.",
        problem: "Zero internet connectivity made cloud-based learning tools impossible to utilize.",
        outcome: "Deployed USB-driven offline quiz engines that allowed 60+ students to practice national exam questions."
      }
    },
    {
      id: "gal-6",
      title: "Youth Leadership Facilitation",
      location: "Platform Young Professionals Assembly",
      year: "2024",
      category: "Speaking",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      story: {
        what: "Facilitating a breakout session on 'Resourcefulness in Resource-Constrained Project Operations'.",
        problem: "Young professionals often feel paralyzed by lack of corporate budget or ideal conditions.",
        outcome: "Provided actionable frameworks for low-cost stakeholder alignment and lean project execution."
      }
    }
  ],

  resourcefulnessDiagram: {
    title: "WHEN THE RESOURCES ARE LIMITED, THE THINKING CAN'T BE.",
    subtitle: "Some of the most meaningful projects do not begin with perfect budgets, perfect teams or perfect conditions. They begin with a problem worth solving.",
    copy: "My approach is to understand what is available, identify what is missing and creatively connect people, systems and resources until progress becomes possible.",
    steps: [
      { id: "problem", label: "Problem", desc: "Identify the root friction. What is actually broken, and who suffers most?" },
      { id: "people", label: "People", desc: "Mobilise local champions, affected community members, and passionate collaborators." },
      { id: "resources", label: "Resources", desc: "Audit existing assets: underutilized tools, space, in-kind support, and open data." },
      { id: "systems", label: "Systems", desc: "Design lightweight, repeatable workflows with transparent responsibilities and KPIs." },
      { id: "execution", label: "Execution", desc: "Move swiftly with iterative field testing, feedback loops, and stubborn persistence." },
      { id: "impact", label: "Impact", desc: "Measure tangible change: skills acquired, operational scaling, and sustainable self-reliance." }
    ]
  },

  toolkit: {
    title: "WHAT I BRING TO THE TABLE",
    categories: [
      {
        id: "projects",
        name: "PROJECTS",
        skills: [
          "Project Lifecycle Management",
          "Agile & Lean Project Delivery",
          "Risk Management & Mitigation",
          "Monitoring & Evaluation (M&E)",
          "Cross-Functional Coordination"
        ],
        highlight: "Track record of launching projects from zero to multi-stakeholder sustainability."
      },
      {
        id: "strategy",
        name: "STRATEGY",
        skills: [
          "Structural Problem-Solving",
          "Strategic Operational Planning",
          "Change Management",
          "Resource Allocation & Optimization",
          "Stakeholder Engagement & Advocacy"
        ],
        highlight: "Converting ambiguous high-level goals into structured step-by-step action plans."
      },
      {
        id: "data-ops",
        name: "DATA & OPERATIONS",
        skills: [
          "Budgeting & Cost Control",
          "Resource & Asset Tracking",
          "Qualitative Field Analysis",
          "Quantitative Learning Analytics",
          "Performance Monitoring Dashboards"
        ],
        highlight: "Utilizing empirical data to detect operational gaps and validate social outcomes."
      },
      {
        id: "digital",
        name: "DIGITAL & EDTECH",
        skills: [
          "Google Workspace Ecosystem",
          "Canva & Visual Storytelling",
          "EdTech Systems & LMS",
          "Digital Assessment Platforms",
          "Instructional Systems Design"
        ],
        highlight: "Leveraging digital tools to bridge educational gaps in resource-constrained environments."
      },
      {
        id: "people",
        name: "PEOPLE & LEADERSHIP",
        skills: [
          "Workshop Facilitation",
          "Public Speaking & Moderation",
          "Youth Mentorship Frameworks",
          "Team Leadership & Culture Building",
          "Stakeholder & Community Mobilisation"
        ],
        highlight: "Building trust across diverse teams, school administrators, and community leaders."
      }
    ]
  },

  experienceJourney: [
    {
      id: "exp-tfn",
      role: "Fellow & Project Lead",
      organization: "Teach For Nigeria",
      period: "2022 — 2024",
      location: "Ogun & Oyo State, Nigeria",
      impactPoints: [
        "Designed and implemented diagnostic learning interventions that raised national exam pass rates from 40% to 65% across target student cohorts.",
        "Founded 'The Mind Project', a low-cost youth empowerment and mentorship initiative serving 60+ secondary school learners.",
        "Championed EdTech integration in borderland communities using offline-compatible multimedia learning assets."
      ]
    },
    {
      id: "exp-digital-onboarders",
      role: "President / Team Lead",
      organization: "Digital Onboarders CDS — NYSC",
      period: "2023 — 2024",
      location: "Nigeria",
      impactPoints: [
        "Scaled active field membership by 700% (3 to 25+ core members) through structured role allocation and community outreach.",
        "Built a regional digital alumni network of over 400+ youth through continuous capacity building sessions.",
        "Directed local micro-enterprise onboarding drives for Google Business Profile and basic digital commerce."
      ]
    },
    {
      id: "exp-oluyole",
      role: "Education Operations & Science Educator",
      organization: "Oluyole Estate High School",
      period: "2021 — 2022",
      location: "Ibadan, Oyo State",
      impactPoints: [
        "Coordinated academic performance tracking for over 60 science students, implementing remedial learning plans.",
        "Introduced interactive visual biology assessments and lab practical efficiency measures."
      ]
    },
    {
      id: "exp-unicef-data",
      role: "Public Health Data Collector & Field Validator",
      organization: "UNICEF-Supported Data Validation Project",
      period: "2021",
      location: "South-West Region, Nigeria",
      impactPoints: [
        "Executed field data collection and validation for public health metrics across rural household clusters.",
        "Maintained high data integrity standards under strict field sampling deadlines."
      ]
    },
    {
      id: "exp-icat",
      role: "Instructional & Administrative Coordinator",
      organization: "International College of Arts, Science & Tech",
      period: "2020 — 2021",
      location: "Ibadan, Nigeria",
      impactPoints: [
        "Supported school operations, curriculum delivery schedule, and teacher-parent communication workflows."
      ]
    },
    {
      id: "exp-command",
      role: "Academic Project Assistant",
      organization: "Command Secondary School",
      period: "2019 — 2020",
      location: "Ibadan, Nigeria",
      impactPoints: [
        "Assisted in managing student assessment records, co-curricular events, and youth leadership activities."
      ]
    },
    {
      id: "exp-revolvingcity",
      role: "Operations & Community Associate",
      organization: "RevolvingCity",
      period: "2019",
      location: "Lagos, Nigeria",
      impactPoints: [
        "Supported community engagement, event operations, and digital communication schedules."
      ]
    }
  ],

  educationAndDev: {
    academic: [
      {
        degree: "M.Ed Educational Technology",
        institution: "University of Ibadan",
        period: "In Progress",
        badge: "Postgraduate"
      },
      {
        degree: "B.Ed Education Biology",
        institution: "University of Ibadan",
        period: "Graduated",
        badge: "Second Class Upper"
      }
    ],
    certifications: [
      { name: "McKinsey Forward Program", issuer: "McKinsey & Company", topic: "Leadership, Problem-Solving & Agile Thinking" },
      { name: "Young Professionals Bootcamp (YPB)", issuer: "The Platform Nigeria", topic: "Governance, Social Impact & Career Acceleration" },
      { name: "Teachers Registration Council of Nigeria (TRCN)", issuer: "Federal Republic of Nigeria", topic: "Certified Professional Educator" },
      { name: "Jobberman Soft Skills Training", issuer: "Jobberman Nigeria", topic: "Emotional Intelligence, Team Work & Agility" },
      { name: "Enterprise Development Centre (EDC)", issuer: "Pan-Atlantic University", topic: "Social Entrepreneurship & Operational Management" },
      { name: "Human Resource Management Foundations", issuer: "Professional Institute", topic: "Talent Development & Organisational Leadership" }
    ]
  },

  speakingAndLeadership: {
    title: "IDEAS ARE MORE USEFUL WHEN THEY MOVE PEOPLE.",
    subtitle: "Experience facilitating youth development workshops, goal-setting sessions, and community stakeholder convenings.",
    sessions: [
      {
        title: "Building Resourceful Systems in Underserved Communities",
        event: "Youth Impact & Education Summit",
        role: "Keynote Speaker",
        year: "2024",
        summary: "Delivered an actionable talk on how grassroot leaders can create sustainable educational projects using zero-cost community assets."
      },
      {
        title: "EdTech Realities: Offline Learning in Borderland Schools",
        event: "Pan-African EdTech Innovators Webinar",
        role: "Panelist",
        year: "2023",
        summary: "Shared empirical data from field interventions on adapting digital tools for low-infrastructure rural classrooms."
      },
      {
        title: "Empowering the Girl Child through Digital Skills & Mentorship",
        event: "International Day of the Girl Observance",
        role: "Lead Facilitator",
        year: "2023",
        summary: "Guided 150+ female students through self-advocacy, career mapping, and entry pathways into digital careers."
      }
    ]
  },

  testimonials: [
    {
      id: "t1",
      quote: "Esther has a rare ability to enter a complex, under-resourced environment and bring instant order. Her work on The Mind Project changed how our teachers approach student mentorship.",
      author: "Dr. A. Adebayo",
      role: "Senior Secondary School Administrator",
      organization: "Command Educational District"
    },
    {
      id: "t2",
      quote: "When Esther took over leadership of the Digital Onboarders CDS, active participation grew exponentially. She doesn't just manage tasks; she inspires people to own the outcome.",
      author: "O. Ogunleye",
      role: "State Coordinator",
      organization: "NYSC Community Development Scheme"
    },
    {
      id: "t3",
      quote: "Her data-driven approach to educational intervention elevated our national exam pass rates from 40% to 65%. Esther combines deep human empathy with ruthless operational focus.",
      author: "M. Ibironke",
      role: "Lead Education Specialist",
      organization: "Teach For Nigeria Network"
    }
  ],

  philosophy: {
    headline: "I am interested in work that leaves people, organisations and communities stronger than I found them.",
    subtext: "That is the kind of impact I want my career to keep building."
  },

  contact: {
    title: "HAVE A PROBLEM WORTH SOLVING?",
    subtext: "If you're building something that improves how people learn, work or live, I'd love to hear about it.",
    primaryCta: "Start a Conversation",
    linkedinCta: "Connect on LinkedIn",
    cvCta: "Download CV"
  }
};
