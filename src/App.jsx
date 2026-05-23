import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code,
  Database,
  Smartphone,
  Globe,
  Users,
  Settings,
  Server,
  CreditCard,
  Brain,
  Cloud,
  Link,
  MessageSquare,
  Clock,
  Briefcase,
  Download,
  Trophy,
  Cpu,
  GitBranch,
  Zap,
} from "lucide-react";
import skills from "./skillsData/skills";
import Projects from "./components/Projects";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ type: "", message: "" });
  const [showResponsibilities, setShowResponsibilities] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically compute and apply nav height to avoid content being hidden under fixed header
  useEffect(() => {
    const updateNavHeight = () => {
      setNavHeight(navRef.current?.offsetHeight || 0);
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  useEffect(() => {
    setNavHeight(navRef.current?.offsetHeight || 0);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
            >
              Muhammad Anas Yasin
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "experience", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:scale-105 relative group ${activeSection === section
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                      }`}
                  >
                    {section}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left transition-transform duration-300 ${activeSection === section
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    ></span>
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {["home", "about", "skills", "experience", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 capitalize text-slate-300 hover:text-white transition-colors"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      <div style={{ paddingTop: navHeight }}>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-10 md:pt-16 scroll-mt-24 md:scroll-mt-28"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/*<span className="text-4xl font-bold">AS</span> */}
                <img
                  src="https://res.cloudinary.com/dcmgd4gdj/image/upload/v1779572670/Myself_j3gmxu.jpg"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Muhammad Anas Yasin
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-6">
                Software Engineer
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                Software Engineer with hands-on experience in MERN stack, Next.js, and React Native.
                I have built applications featuring payments, real-time functionality, role-based authentication, and microservices architecture. On the infrastructure side, I work with Docker and CI/CD pipelines for deployment and scaling. I also contribute to open source and continuously build real-world projects. I am actively looking for a role where I can grow and contribute from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a
                  href="/Anasyaseen92.pdf"
                  download="Muhammad_Anas_Yasin_Resume.pdf"
                  className="flex items-center gap-2 border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-lg transition-colors"
                >
                  <Download size={20} />
                  Download Resume
                </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Anasyaseen92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-yasin-821a03304/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=anasy7148@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
        <section id="about" className="py-20 px-4 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Software Engineer • Open Source Contributor
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Software Engineer focused on building production‑grade web and mobile applications across the MERN stack, Next.js, and React Native. I design and deliver features end‑to‑end, from clean UX to scalable APIs and data models, optimized for performance and reliability.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  My expertise includes React/Next.js, Redux Toolkit, Node.js, Express.js, MongoDB, Tailwind CSS, and real‑time communication with Socket.io. I have integrated secure payments (Stripe/PayPal), implemented role‑based access, and improved performance with pragmatic profiling and caching. I am currently contributing to open source.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Previously, as an AI Reasoning Engineer at Turing, I designed and evaluated reasoning‑centric agents and workflows, building reliable tool‑use, retrieval, and multi‑step planning, and shipping LLM features that are safe, predictable, and production‑ready.
                </p>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I enjoy solving complex problems and shipping business value fast. Projects like a multi‑vendor marketplace, a real‑estate platform, an LMS, and a social app reflect my practical approach. I actively practice data structures and algorithms on LeetCode with a strong solve count and participated in ICPC 2025, reaching the onsite round, this DSA journey strengthens my problem‑solving and system design in everyday engineering.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={16} className="text-blue-400" />
                    Lahore, Punjab, Pakistan
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone size={16} className="text-blue-400" />
                    +923404578775
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="text-blue-400" size={20} />
                    Education
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-blue-400">
                        BS Computer Science
                      </h5>
                      <p className="text-slate-300">
                        University of Education, Lahore
                      </p>
                      <p className="text-slate-400 text-sm">
                        CGPA: 3.2+ | Aug 2023 - Present
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-400">
                        Intermediate - ICS
                      </h5>
                      <p className="text-slate-300">Aspire College Hafizabad</p>
                      <p className="text-slate-400 text-sm">
                        Grade: A+ | Aug 2021 - Aug 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="text-amber-400" size={20} />
                    Achievements
                  </h4>
                  <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold mt-0.5">🏆</span>
                      <div>
                        <p className="font-semibold text-white">ICPC Regional Qualifier 2025-26</p>
                        <p>All Pakistan Rank <span className="text-blue-400 font-semibold">#50</span> — Prelims (Nov 2025)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold mt-0.5">💻</span>
                      <div>
                        <p className="font-semibold text-white">LeetCode</p>
                        <p>Active competitive programmer with consistent DSA practice.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="text-xl font-semibold mb-4">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["English", "Urdu"].map((lang) => (
                      <span
                        key={lang}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-slate-800/50 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => {
                const icons = {
                  "Programming Languages": (
                    <Code className="text-yellow-400" size={24} />
                  ),
                  "Frontend Development": (
                    <Globe className="text-blue-400" size={24} />
                  ),
                  "Backend & Databases": (
                    <Database className="text-emerald-400" size={24} />
                  ),
                  "DevOps & Cloud": (
                    <Cloud className="text-sky-400" size={24} />
                  ),
                  "Tools & Platforms": (
                    <Settings className="text-gray-400" size={24} />
                  ),
                  "Soft Skills": <Users className="text-pink-400" size={24} />,
                };

                const renderSkillIcon = (skill) => {
                  const dev = (cls) => <i className={`${cls} text-2xl`}></i>;
                  const img = (url, alt) => (
                    <img
                      src={url}
                      alt={alt}
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                    />
                  );
                  const map = {
                    // Programming Languages
                    "JavaScript": () => dev("devicon-javascript-plain colored"),
                    "TypeScript": () => dev("devicon-typescript-plain colored"),
                    "C++": () => dev("devicon-cplusplus-plain colored"),
                    // Frontend
                    "React.js": () => dev("devicon-react-original colored"),
                    "React Native": () => dev("devicon-react-original colored"),
                    "Next.js": () => dev("devicon-nextjs-original"),
                    "Redux Toolkit": () => dev("devicon-redux-original colored"),
                    "Material UI": () => dev("devicon-materialui-plain colored"),
                    "HTML": () => dev("devicon-html5-plain colored"),
                    "CSS": () => dev("devicon-css3-plain colored"),
                    "Tailwind CSS": () =>
                      img(
                        "https://cdn.simpleicons.org/tailwindcss/38BDF8",
                        "Tailwind CSS"
                      ),
                    "Bootstrap": () => dev("devicon-bootstrap-plain colored"),
                    // Backend & DB
                    "Node.js": () => dev("devicon-nodejs-plain colored"),
                    "Express.js": () => dev("devicon-express-original"),
                    "RESTful APIs": () => <Link className="text-blue-400" size={20} />,
                    "SQL": () => dev("devicon-mysql-plain colored"),
                    "MongoDB": () => dev("devicon-mongodb-plain colored"),
                    // Tools & Platforms
                    "Git & GitHub": () => dev("devicon-git-plain colored"),
                    "Postman": () =>
                      img(
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg",
                        "Postman"
                      ),
                    "Firebase": () => dev("devicon-firebase-plain colored"),
                    "Supabase": () =>
                      img(
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
                        "Supabase"
                      ),
                    "Cloudinary": () => <Cloud className="text-sky-400" size={20} />,
                    "Netlify": () =>
                      img(
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
                        "Netlify"
                      ),
                    "Vercel": () =>
                      img(
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
                        "Vercel"
                      ),
                    "Stripe": () =>
                      img(
                        "https://cdn.simpleicons.org/stripe/635BFF",
                        "Stripe"
                      ),
                    "PayPal": () =>
                      img(
                        "https://cdn.simpleicons.org/paypal/003087",
                        "PayPal"
                      ),
                    "Socket.io": () => dev("devicon-socketio-original"),
                    // DevOps & Cloud
                    "AWS": () => dev("devicon-amazonwebservices-plain colored"),
                    "Docker": () => dev("devicon-docker-plain colored"),
                    "Kubernetes": () => dev("devicon-kubernetes-plain colored"),
                    "CI/CD": () => <GitBranch className="text-green-400" size={20} />,
                    // Soft skills
                    "Communication": () => <MessageSquare className="text-slate-300" size={20} />,
                    "Team Collaboration": () => <Users className="text-slate-300" size={20} />,
                    "Problem Solving": () => <Brain className="text-slate-300" size={20} />,
                    "Time Management": () => <Clock className="text-slate-300" size={20} />,
                  };
                  return map[skill]?.() ?? <Code className="text-slate-400" size={20} />;
                };

                return (
                  <div
                    key={category}
                    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 rounded-full px-4 py-2 shadow-sm">
                        {icons[category]}
                        <h3 className="text-sm md:text-base font-semibold tracking-wide">
                          {category}
                        </h3>
                      </div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                      <div className="space-y-2">
                        {skillList.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center gap-3 text-slate-300 hover:bg-slate-800/50 rounded-md px-2 py-1 transition-colors"
                          >
                            {renderSkillIcon(skill)}
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-blue-400 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h3 className="text-xl font-semibold">AI Reasoning Engineer</h3>
                      <p className="text-slate-300">Turing</p>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm whitespace-nowrap">
                    Oct 2025 — Mar 2026
                  </div>
                </div>
                <p className="text-slate-300 mt-4 leading-relaxed">
                Built reasoning-centric agents, tool-use workflows, and pragmatic evals for reliable, production-ready LLM features.
                </p>
                
                <button
                  onClick={() => setShowResponsibilities(!showResponsibilities)}
                  className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  {showResponsibilities ? (
                    <>
                      <ChevronDown className="rotate-180 transition-transform" size={16} />
                      Hide Responsibilities
                    </>
                  ) : (
                    <>
                      <ChevronDown className="transition-transform" size={16} />
                      View Responsibilities
                    </>
                  )}
                </button>

                {showResponsibilities && (
                  <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside pl-4">
                    <li>Trained and evaluated AI reasoning models using advanced competitive programming techniques and optimized C++ solutions.</li>
                    <li>Designed and implemented algorithmic challenges that strengthened the model's logical reasoning, optimization strategies, and problem-solving depth.</li>
                    <li>Analyzed model outputs to identify reasoning gaps and developed targeted C++ tasks to improve accuracy, robustness, and generalization.</li>
                    <li>Utilized Docker-based environments to reliably run, test, and evaluate model training pipelines across consistent setups.</li>
                    <li>Optimized C++ implementations with a focus on time – space complexity, exposing models to realistic computational constraints.</li>
                    <li>Collaborated with AI research teams to refine evaluation metrics, improve data quality, and support continuous model improvement.</li>
                  </ul>
                )}
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-blue-400 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h3 className="text-xl font-semibold">DevWeekends Mentor</h3>
                      <p className="text-slate-300">Community Mentorship & Developer Training</p>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm whitespace-nowrap">
                    2025 — Present
                  </div>
                </div>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  Mentored and guided aspiring developers through free community-based training programs with a strong focus on growth mindset, problem solving, and software engineering fundamentals.
                </p>
                <ul className="mt-3 space-y-1.5 text-slate-300 text-sm list-disc list-inside pl-2">
                  <li>Trained students across the complete development journey, covering MERN stack development, cloud technologies, DevOps fundamentals, and modern software engineering practices.</li>
                  <li>Helped learners build real-world projects and improve technical confidence through hands-on guidance and code reviews.</li>
                  <li>Encouraged growth mindset development and practical problem-solving techniques in a collaborative learning environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-slate-800/50 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Mail className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=anasy7148@gmail.com&su=Portfolio%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  anasy7148@gmail.com
                </a>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Phone className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a
                  href="tel:03007071587"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  03404578775
                </a>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <MapPin className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-slate-300">Lahore, Punjab, Pakistan</p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 md:p-8 rounded-lg border border-slate-700 mb-12 text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-center">Send me a message</h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSendStatus({ type: "", message: "" });
                  if (!contactName || !contactEmail || !contactSubject || !contactMessage) {
                    setSendStatus({ type: "error", message: "Please fill out all fields before sending." });
                    return;
                  }
                  try {
                    setIsSending(true);
                    await emailjs.send(
                      import.meta.env.VITE_EMAILJS_SERVICE_ID,
                      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                      {
                        from_name: contactName,
                        from_email: contactEmail,
                        sender_name: contactName,
                        sender_email: contactEmail,
                        reply_to: contactEmail,
                        subject: contactSubject,
                        message: `Sender Name: ${contactName}\nSender Email: ${contactEmail}\n\n${contactMessage}`,
                      },
                      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
                    );
                    setSendStatus({ type: "success", message: "Message sent successfully. I will get back to you soon!" });
                    setContactName("");
                    setContactEmail("");
                    setContactSubject("");
                    setContactMessage("");
                  } catch (err) {
                    setSendStatus({ type: "error", message: "Failed to send message. Please try again later." });
                  } finally {
                    setIsSending(false);
                  }
                }}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="from_name"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-slate-600 rounded-lg px-4 py-2 outline-none text-slate-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="from_email"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-slate-600 rounded-lg px-4 py-2 outline-none text-slate-200"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="How can I help?"
                    className="w-full bg-slate-900 border border-slate-700 focus:border-slate-600 rounded-lg px-4 py-2 outline-none text-slate-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="w-full bg-slate-900 border border-slate-700 focus:border-slate-600 rounded-lg px-4 py-2 outline-none text-slate-200"
                    required
                  />
                </div>
                {sendStatus.message && (
                  <div className={`text-center ${sendStatus.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
                    {sendStatus.message}
                  </div>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${isSending ? "bg-blue-900 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                  >
                    <Mail size={20} />
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Anasyaseen92"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-yasin-821a03304/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alishair7071@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-slate-700">
          <div className="max-w-7xl mx-auto text-center text-slate-400">
            <p>&copy; 2026 Muhammad Anas Yasin. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
