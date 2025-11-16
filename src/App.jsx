import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";
import skills from "./skillsData/skills";
import Projects from "./components/Projects";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
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
              Ali Shair
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
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
              {["home", "about", "skills", "projects", "contact"].map(
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
          className="min-h-screen flex items-center justify-center px-4 scroll-mt-24 md:scroll-mt-28"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/*<span className="text-4xl font-bold">AS</span> */}
                <img
                  src="https://res.cloudinary.com/dqf4fxp4x/image/upload/v1758367637/avatars/zwftjwbgaqfn2adzcp02.png"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Ali Shair
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-6">
                Software Engineer
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                Full Stack Developer specializing in the MERN stack and Next.js.
                Skilled in React.js, Node.js, Express.js, MongoDB, and REST APIs
                with a strong foundation in scalable application development.
                Currently a 5th-semester BSCS student, open to opportunities in
                full-stack, frontend, or backend development.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alishair7071@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 px-6 py-3 rounded-lg transition-colors"
              >
                View Projects
                <ExternalLink size={20} />
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/alishair7071"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/swe-ali-shair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alishair7071@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
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
                  Full Stack Developer & Computer Science Student
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I'm a passionate 5th-semester BSCS student at the University of
                  Education, Lahore, with a strong focus on full-stack
                  development. My journey in software engineering has led me to
                  master the MERN stack for creating comprehensive web
                  applications.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I specialize in building scalable applications with modern
                  technologies like React.js, Node.js, Express.js, and MongoDB. My
                  experience extends to mobile development, real-time
                  communication with Socket.io, and payment integrations with
                  Stripe and PayPal.
                </p>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm passionate about contributing to open source projects and am
                  actively seeking opportunities to apply my skills in dynamic
                  development environments.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={16} className="text-blue-400" />
                    Lahore, Punjab, Pakistan
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone size={16} className="text-blue-400" />
                    03007071587
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
                        CGPA: 3.4+ | Aug 2023 - Present
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-400">
                        Intermediate - ICS
                      </h5>
                      <p className="text-slate-300">Superior Group of Colleges</p>
                      <p className="text-slate-400 text-sm">
                        Grade: A+ | Aug 2021 - Aug 2023
                      </p>
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
                    "Java": () => dev("devicon-java-plain colored"),
                    "C++": () => dev("devicon-cplusplus-plain colored"),
                    // Frontend
                    "React.js": () => dev("devicon-react-original colored"),
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
                    className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {icons[category]}
                      <h3 className="text-xl font-semibold">{category}</h3>
                    </div>
                    <div className="space-y-2">
                      {skillList.map((skill) => (
                        <div key={skill} className="flex items-center gap-3">
                          {renderSkillIcon(skill)}
                          <span className="text-slate-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
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
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=alishair7071@gmail.com&su=Portfolio%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  alishair7071@gmail.com
                </a>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Phone className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a
                  href="tel:03007071587"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  03007071587
                </a>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <MapPin className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-slate-300">Lahore, Punjab, Pakistan</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/alishair7071"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/swe-ali-shair/"
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
            <p>&copy; 2025 Ali Shair. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
