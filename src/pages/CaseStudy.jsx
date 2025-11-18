import React, { useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft, FileText } from "lucide-react";
import projects from "../projectsData/projects";

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    // Ensure the page loads at the top when navigating here
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <RouterLink
              to="/"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} /> Back to Portfolio
            </RouterLink>
          </div>
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-slate-400">The requested case study does not exist.</p>
        </div>
      </div>
    );
  }

  const { title, description, tech, link, sourceCodeLink, caseStudy } = project;

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <RouterLink
            to="/#projects"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} /> Back to Projects
          </RouterLink>

          <div className="flex items-center gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Visit Live
              </a>
            )}
            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <header className="mb-10">
              <h1 className="text-4xl font-bold mb-3">{title}</h1>
              <p className="text-slate-300">{description}</p>
              {Array.isArray(tech) && tech.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span key={t} className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <main className="space-y-10">
              {caseStudy?.overview && (
                <section>
                  <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                  <p className="text-slate-300 leading-relaxed">{caseStudy.overview}</p>
                </section>
              )}

              {Array.isArray(caseStudy?.highlights) && caseStudy.highlights.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {caseStudy.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {Array.isArray(caseStudy?.implementation) && caseStudy.implementation.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-3">Implementation</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {caseStudy.implementation.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {Array.isArray(caseStudy?.results) && caseStudy.results.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-3">Results</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {caseStudy.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {Array.isArray(project.features) && project.features.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </section>
              )}
            </main>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 space-y-6">
              <h2 className="text-2xl font-semibold">About This Project</h2>

              {project.personal?.idea && (
                <section>
                  <h3 className="text-lg font-semibold mb-2">How I got the idea</h3>
                  <p className="text-slate-300 leading-relaxed">{project.personal.idea}</p>
                </section>
              )}

              {Array.isArray(project.personal?.challenges) && project.personal.challenges.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold mb-2">Challenges I faced</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {project.personal.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.personal?.solves && (
                <section>
                  <h3 className="text-lg font-semibold mb-2">What this project solves</h3>
                  <p className="text-slate-300 leading-relaxed">{project.personal.solves}</p>
                </section>
              )}

              {Array.isArray(project.personal?.implemented) && project.personal.implemented.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold mb-2">What I implemented</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {project.personal.implemented.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </section>
              )}

              {Array.isArray(project.personal?.learnings) && project.personal.learnings.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold mb-2">What I learned</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {project.personal.learnings.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};

export default CaseStudy;

