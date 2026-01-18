import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Download,
} from "lucide-react";

const DATA = {
  name: "Abhishek Karyagol",
  role: "AI/ML Engineer (Fresher)",
  location: "Bangalore",
  email: "akaryagol@gmail.com",
  github: "https://github.com/Abhishek974112",
  linkedin: "https://www.linkedin.com/in/abhik05",
  summary:
    "Analytical and innovative AIML fresher with strong foundation in Python, Machine Learning, Data Structures, and SQL. Skilled in NumPy, Pandas, Scikit-learn, and TensorFlow. Seeking an entry-level role to apply expertise in data preprocessing, feature engineering, model training, evaluation, and basic deployment using Flask/FastAPI. Passionate about building real-world AI solutions in automation, predictive analytics, and Computer Vision/NLP.",
  skills: {
    "Programming + CS Core": ["Python", "Data Structures", "SQL", "Git"],
    "AI / ML": ["Machine Learning", "Deep Learning", "NLP", "GenAI", "Computer Vision"],
    Libraries: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    "Soft Skills": ["Communication", "Leadership", "Team Collaboration", "Presentation Skills"],
  },
  experience: [
    {
      title: "Intern",
      company: "Infosys Springboard",
      time: "Dec 2025 – Present",
      points: [
        "Contributed to end-to-end ML development including preprocessing, EDA, feature engineering, and model training.",
        "Worked with Python, Pandas, NumPy, and Scikit-learn for model building and evaluation.",
        "Improved model reliability through evaluation metrics and hyperparameter tuning.",
        "Gained exposure to Flask/FastAPI deployment basics, Git version control, and documentation.",
      ],
    },
    {
      title: "Intern",
      company: "Applied Standards and Innovations Tech Pvt. Ltd",
      time: "Mar 2025 – Present",
      points: [
        "Worked on real-world AI/ML tasks including preprocessing, EDA, and feature engineering.",
        "Supported model evaluation and optimization using standard metrics and tuning techniques.",
      ],
    },
  ],
  projects: [
    {
      name: "SmiloScope",
      tag: "Computer Vision • Healthcare",
      desc:
        "Developing an AI-powered remote dental diagnostics platform to enable affordable home-based checkups. Building a hardware + cloud-connected solution using image analysis to detect early tooth decay, with roadmap for gum disease detection and telehealth consultations.",
      tech: ["Computer Vision", "AI/ML", "Healthcare"],
      link: null,
    },
    {
      name: "Grow Wise with Flora Finder",
      tag: "Django • Recommendation",
      desc:
        "Indoor Home Plant Advisor web app for plant recommendations and personalized care management. Built a data-driven recommendation engine using environmental factors. Implemented using Django, Python, HTML, CSS, JavaScript, and MySQL.",
      tech: ["Django", "Python", "MySQL", "HTML/CSS/JS"],
      link: null,
    },
    {
      name: "AI Cricket Player Performance Prediction",
      tag: "ML • Predictive Analytics",
      desc:
        "Forecasted player outcomes using historical match data. Performed data preprocessing and feature engineering to extract key metrics like runs, strike rate, wickets, and consistency. Trained and evaluated ML models using Python, Pandas, NumPy, and Scikit-learn to support team selection and strategy planning.",
      tech: ["Pandas", "NumPy", "Scikit-learn"],
      link: null,
    },
    {
      name: "AI Internship Guardian",
      tag: "AI Safety • Verification",
      desc:
        "Developed AI Internship Guardian, a smart platform to detect genuine vs fake internships using AI-driven analysis. Implemented verification checks, risk scoring, and structured insights based on company and offer details. Built using Python with a web-based interface, focusing on secure login, usability, and scalability.",
      tech: ["Python", "Risk Scoring", "Web App"],
      link: null,
    },
  ],
  achievements: [
    "Best Paper award: “Sustainable E-Waste Management in 5G Smart Communities using Blockchain” (National Conference).",
    "College Ambassador for Techfest, IIT Bombay.",
    "Successfully completed NCC training and awarded the “A” Certificate.",
    "Volunteered in organizing technical and cultural events at college (coordination + logistics).",
    "Recognized and advanced to the 4th round of the “Sa Re Ga Ma” music competition.",
  ],
  certifications: [
    "Data Analysis & Forensic Technology — Deloitte",
    "Samsung Anveshana Ideathon — Samsung",
    "National Level Technical Symposium — Silver Spectrum Techfest, New Horizon College of Engineering",
  ],
  education: {
    degree: "B.E. in Artificial Intelligence and Machine Learning",
    college: "Cambridge Institute Of Technology",
    gpa: "8.02",
    year: "Jul 2027",
  },
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionHead">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Portfolio() {
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
          <a href="#home" className="brand">
            <span className="dot" />
            <span>{DATA.name}</span>
          </a>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="navBtns">
            <a className="btn ghost" href={DATA.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
            <a className="btn primary" href="#projects">
              Projects <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container heroGrid">
          <div>
            <p className="tag">
              {DATA.role} • <MapPin size={14} /> {DATA.location}
            </p>

            <h1>
              Hi, I’m <span className="grad">{DATA.name}</span>
              <br />
              I build practical AI/ML projects.
            </h1>

            {/* ✅ PROFILE PHOTO BLOCK ADDED HERE */}
            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <img
                  src="/profile.jpeg"
                  alt="Abhishek Karyagol"
                  className="h-24 w-24 rounded-3xl object-cover border border-white/10 shadow-lg"
                />
                <div>
                  <p className="text-white font-semibold text-lg">{DATA.name}</p>
                  <p className="text-white/60 text-sm">{DATA.role}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost"
                >
                  LinkedIn
                </a>
                <a
                  href={DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost"
                >
                  GitHub
                </a>
              </div>
            </div>

            <p className="subtitle" style={{ marginTop: 16 }}>
              {DATA.summary}
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#projects">
                View Projects <ArrowRight size={18} />
              </a>

              <a className="btn ghost" href="/Abhi_k Resume.pdf" download>
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="socialRow">
              <a href={DATA.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={`mailto:${DATA.email}`}>
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <Card>
            <h3 className="cardTitle">Quick Snapshot</h3>
            <div className="snapshot">
              <div className="snapBox">
                <div className="snapNum">4+</div>
                <div className="snapLabel">Projects</div>
              </div>
              <div className="snapBox">
                <div className="snapNum">2</div>
                <div className="snapLabel">Internships</div>
              </div>
              <div className="snapBox">
                <div className="snapNum">{DATA.education.gpa}</div>
                <div className="snapLabel">GPA</div>
              </div>
            </div>

            <div className="chipRow">
              <span className="chip">Python</span>
              <span className="chip">Machine Learning</span>
              <span className="chip">NLP</span>
              <span className="chip">Computer Vision</span>
              <span className="chip">SQL</span>
            </div>
          </Card>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About"
        subtitle="Focused on end-to-end ML workflows, deployment basics, and real-world AI problem solving."
      >
        <div className="grid2">
          <Card>
            <h3 className="cardTitle">What I do</h3>
            <ul className="list">
              <li>Data preprocessing, EDA, feature engineering</li>
              <li>Model training, evaluation, hyperparameter tuning</li>
              <li>Basic deployment using Flask/FastAPI</li>
              <li>Documentation, teamwork, Git workflows</li>
            </ul>
          </Card>

          <Card>
            <h3 className="cardTitle">What I’m looking for</h3>
            <p className="muted">
              An entry-level AIML role where I can contribute to model development, improve accuracy and
              reliability, and ship AI features into real products.
            </p>
          </Card>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" subtitle="Tech stack and strengths from my resume.">
        <div className="skillsGrid">
          {Object.entries(DATA.skills).map(([group, items]) => (
            <Card key={group}>
              <h3 className="cardTitle">{group}</h3>
              <div className="chipRow">
                {items.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" subtitle="Internship work and ML contributions.">
        <div className="stack">
          {DATA.experience.map((exp) => (
            <Card key={exp.company}>
              <div className="rowBetween">
                <h3 className="cardTitle">
                  {exp.title} — {exp.company}
                </h3>
                <span className="muted">{exp.time}</span>
              </div>
              <ul className="list">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="AI/ML projects with real-world relevance.">
        <div className="projectsGrid">
          {DATA.projects.map((p) => (
            <Card key={p.name}>
              <div className="rowBetween">
                <div>
                  <h3 className="cardTitle">{p.name}</h3>
                  <p className="muted">{p.tag}</p>
                </div>
              </div>

              <p className="projectDesc">{p.desc}</p>

              <div className="chipRow">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              {p.link ? (
                <div style={{ marginTop: 12 }}>
                  <a className="btn ghost" href={p.link} target="_blank" rel="noreferrer">
                    View Project <ArrowRight size={18} />
                  </a>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS + CERTIFICATIONS + EDUCATION */}
      <Section id="extras" title="Highlights" subtitle="Achievements, certifications, and education.">
        <div className="grid2">
          <Card>
            <h3 className="cardTitle">Achievements</h3>
            <ul className="list">
              {DATA.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="cardTitle">Certifications</h3>
            <ul className="list">
              {DATA.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <div className="divider" />

            <h3 className="cardTitle">Education</h3>
            <p className="muted">
              <b>{DATA.education.degree}</b>
              <br />
              {DATA.education.college} • {DATA.education.year}
              <br />
              GPA: {DATA.education.gpa}
            </p>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Want to collaborate or hire? Let’s connect.">
        <Card>
          <div className="contactRow">
            <div>
              <p className="muted">Email</p>
              <p className="bigText">
                <a href={`mailto:${DATA.email}`}>{DATA.email}</a>
              </p>
            </div>

            <div>
              <p className="muted">Links</p>
              <div className="contactLinks">
                <a href={DATA.github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <div>
              <a className="btn primary" href={`mailto:${DATA.email}`}>
                <Mail size={18} />
                Email Me
              </a>
            </div>
          </div>
        </Card>

        <p className="footer">© {new Date().getFullYear()} {DATA.name} • Built with React</p>
      </Section>
    </div>
  );
}
