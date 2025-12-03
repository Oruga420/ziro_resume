import Head from "next/head";

const summary =
  "AI Product Leader and Solutions Architect with a strong background in software development and product delivery. Proven track record of shipping over 120 GenAI applications to production and driving internal AI adoption from 47% to 97%. Expert in bridging the gap between technical engineering teams and business stakeholders to deliver scalable, revenue-impacting AI solutions using GCP, AWS, Vercel, and Salesforce Agentforce. Skilled in translating cross-functional vision into actionable product strategies.";

const technicalSkills = [
  "AI & Automation: Generative AI (OpenAI, Anthropic, Gemini), Agentic Workflows, RAG, Salesforce Agentforce, Copilot Studio, MCP Tools.",
  "Cloud & Development: Google Cloud Platform (GCP), AWS, Vercel, Next.js, Python, REST APIs.",
  "Product & Management: Product Roadmapping, Agile/Scrum, Backlog Management, User Adoption Strategies.",
];

const experience = [
  {
    role: "AI Solutions Architect (Product Lead)",
    company: "Assent",
    location: "Canada",
    dates: "Feb 2025 - Present",
    bullets: [
      "Driving the product strategy and technical architecture for GenAI compliance platforms, successfully increasing internal AI adoption from 47% to 97%.",
      "Generated over $1 million in company savings by replacing manual hours with Agentic Workflows and GenAI automations.",
      "Designed and shipped internal tools that coordinate multi-step processes using custom MCP servers, ensuring security and auditability.",
      "Established governance, documentation, and product roadmaps to allow admins and developers to move from prototype to production efficiently.",
    ],
  },
  {
    role: "AI Solutions Architect & Founder",
    company: "Sesh | Ai Solutions",
    location: "Toronto, Ontario",
    dates: "Nov 2021 - Present",
    bullets: [
      "Designed the architecture for over 120 GenAI applications currently in production across 30+ clients, including 90+ chatbots solving daily operational problems.",
      "Acted as Product Manager for 40+ small businesses, translating business requirements into technical AI implementations that reduce manual work.",
      "Lead a community of 100+ members, delivering tutorials and webinars (including for Latinas in Tech) to drive AI literacy and product adoption.",
      "Developed reusable patterns for AI-ready websites and automation backends using Vercel, AWS, and GCP.",
    ],
  },
  {
    role: "Salesforce Consultant (Agentforce Lead)",
    company: "Online Business Systems",
    location: "Toronto, Ontario",
    dates: "Jun 2024 - Nov 2024",
    bullets: [
      "Led the configuration and deployment of Salesforce Agentforce and copilot-style experiences, defining use cases and wiring safe data access.",
      "Managed end-to-end product setups for Marketing Cloud Account Engagement (MCAE), aligning sales and marketing data.",
      "Created reusable configuration patterns to accelerate client onboarding and reduce development overhead.",
    ],
  },
  {
    role: "Salesforce Manager",
    company: "Globalization Partners",
    location: "Ontario, Canada",
    dates: "Nov 2018 - Nov 2023",
    bullets: [
      "Transitioned from Admin to Product/Platform Owner for a Salesforce org with 1,000+ licenses.",
      "Launched 'GIA', an internal GenAI chatbot, and established early AI-powered workflows for Jira ticket handling.",
      "Managed the roadmap and delivery of business-critical capabilities across sales and operations, ensuring scalable architecture and data integrity.",
    ],
  },
  {
    role: "Project Manager",
    company: "Amstar DMC",
    location: "Mexico",
    dates: "May 2016 - Nov 2018",
    bullets: [
      "Managed complex web and integration projects, defining clear scope, cost, and productivity benchmarks.",
      "Led cross-functional teams of up to 18 people to ship booking engines and API integrations.",
    ],
  },
];

const education = [
  "Systems Engineering (LISI) | Universidad Marista de MAcrida (2004 - 2007)",
];

const certifications = [
  "Salesforce Certified AI Associate",
  "Salesforce Certified Administrator (SCA)",
];

export default function Home() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <>
      <Head>
        <title>Alejandro De La Mora | AI Product Leader</title>
        <meta
          name="description"
          content="Resume site for Alejandro De La Mora, AI Product Leader and Solutions Architect."
        />
      </Head>
      <main>
        <div className="controls">
          <button className="button" onClick={handlePrint}>
            Download as PDF
          </button>
        </div>

        <div className="card hero">
          <div className="hero-title">
            <div className="pill">AI Product Leader & Solutions Architect</div>
            <h1 className="name">Alejandro De La Mora</h1>
            <div className="contact">
              <span>
                📧 <a href="mailto:alex@seshwithfriends.org">alex@seshwithfriends.org</a>
              </span>
              <span>📞 +1 437 243 3693</span>
              <span>
                💼{" "}
                <a href="https://www.linkedin.com/in/amorac" target="_blank" rel="noreferrer">
                  linkedin.com/in/amorac
                </a>
              </span>
              <span>
                🌐{" "}
                <a href="http://www.eloruga.com" target="_blank" rel="noreferrer">
                  eloruga.com
                </a>
              </span>
              <span>
                🧩{" "}
                <a href="https://github.com/Oruga420" target="_blank" rel="noreferrer">
                  github.com/Oruga420
                </a>
              </span>
            </div>
        </div>
        </div>

        <div className="card section">
          <h2>Professional Summary</h2>
          <p style={{ margin: 0 }}>{summary}</p>
        </div>

        <div className="card section">
          <h2>Technical Skills</h2>
          <div className="grid">
            {technicalSkills.map((skill) => (
              <div key={skill} className="tag">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="card section">
          <h2>Experience</h2>
          <div className="experience">
            {experience.map((item) => (
              <div key={item.role + item.company} className="role">
                <div className="role-header">
                  <h3 className="role-title">
                    {item.role} | {item.company}
                  </h3>
                  <div className="role-meta">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.dates}</span>
                  </div>
                </div>
                <ul>
                  {item.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="card section">
          <h2>Education</h2>
          <ul>
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card section">
          <h2>Certifications</h2>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
