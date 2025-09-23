"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

const sections = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
];

const socialMedia = [
  { name: "GitHub", link: "https://github.com/Nann-Zy", icon: <Github size={26} /> },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/yourusername", icon: <Linkedin size={26} /> },
  { name: "WhatsApp", link: "https://wa.me/+6281220995629", icon: <Phone size={26} /> },
  { name: "Gmail", link: "mailto:anandaputtra270608@gmail.com", icon: <Mail size={26} /> },
];

const projects = [
  {
    name: "Spotify Profile",
    desc: "Web app untuk visualisasi data Spotify pribadi. Lihat top artist, track, playlist, dan rekomendasi.",
    link: "https://github.com/Nann-Zy/spotify-profile",
    tech: ["React", "Express", "Spotify API"],
    image: "https://raw.githubusercontent.com/Nann-Zy/spotify-profile/main/public/preview.png",
  },
  {
    name: "Landing Page UMKM",
    desc: "Landing page modern untuk UMKM lokal dengan fitur galeri dan kontak.",
    link: "https://github.com/Nann-Zy/umkm-landing",
    tech: ["React", "Tailwind CSS"],
    image: "https://raw.githubusercontent.com/Nann-Zy/umkm-landing/main/public/preview.png",
  },
];

const Project = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-400 flex justify-center">
      <div className="w-full flex flex-col lg:flex-row px-6 py-12 md:px-12 md:py-16 lg:py-0">
        {/* Sidebar kiri */}
        <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl">
              <a href="/" className="hover:text-teal-300 transition-colors">
                Ananda Puttra
              </a>
            </h1>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-slate-200 sm:text-3xl">
              Front End Developer & UI/UX Designer
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed">
              Berikut adalah beberapa project yang pernah saya buat.
            </p>

            {/* Navbar */}
            <nav className="hidden lg:block mt-16">
              <ul className="w-max">
                {sections.map((section) => (
                  <li key={section.name}>
                    <a className="group flex items-center py-3" href={section.href}>
                      <span className="mr-4 h-px w-10 bg-slate-600 transition-all group-hover:w-20 group-hover:bg-teal-300"></span>
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-teal-300">
                        {section.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social media */}
          <ul className="ml-1 mt-10 flex items-center">
            {socialMedia.map((item) => (
              <li key={item.name} className="mr-6">
                <a
                  className="block hover:text-teal-300 transition-colors"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Konten kanan */}
        <main id="projects" className="pt-24 lg:w-[60%] lg:py-24">
          <section className="mb-20 lg:mb-40 scroll-mt-20">
            <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 mb-6">Project Archive</h2>
            {projects.map((project) => (
              <div
                key={project.name}
                className="mb-14 group grid gap-6 sm:grid-cols-8 sm:gap-10"
              >
                {/* Gambar project */}
                <div className="sm:col-span-3">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg border border-slate-700 object-cover w-full h-auto transition group-hover:border-teal-300"
                  />
                </div>

                {/* Detail project */}
                <div className="sm:col-span-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold text-slate-200 hover:text-teal-300 transition-colors"
                  >
                    {project.name}
                  </a>
                  <p className="mt-3 text-lg text-slate-400">{project.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-teal-400/10 text-sm text-teal-300 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* FOOTER */}
          <footer className="max-w-lg pb-20 text-base text-slate-500">
            <p>
              Dibuat dengan{" "}
              <a href="https://react.dev" className="underline">
                React
              </a>{" "}
              dan{" "}
              <a href="https://tailwindcss.com" className="underline">
                Tailwind CSS
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Project;
