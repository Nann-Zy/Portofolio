"use client";

import { useState, useEffect } from "react";
import { Github, Mail, Phone, X } from "lucide-react";

const sections = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

const socialMedia = [
  { name: "GitHub", link: "https://github.com/Nann-Zy", icon: <Github size={26} /> },
  { name: "WhatsApp", link: "https://wa.me/+6281220995629", icon: <Phone size={26} /> },
  { name: "Gmail", link: "mailto:anandaputtra270608@gmail.com", icon: <Mail size={26} /> },
];

const featuredProjects = [
  {
    name: " KAI",
    desc: "Tugas figma, membuat ui/ux sederhana untuk mengimplementasikan ke React.Js ",
    link: "https://www.figma.com/design/GEohNFHpMEB3Zv7YevLO8B/KAI?node-id=0-1&t=4a69QC4cfGrgkoUh-1",
    image: "/assets/kai.png",
  },
  {
    name: "Absen App modern",
    desc: "Tugas Figma, membuat ui/ux sederhana untuk mobile app absen",
    link: "https://www.figma.com/design/rgSFpeRykxP5LL9eaSCXFF/ABSEN-PIHadir?node-id=0-1&t=QZyqwrKgwJmuC1HV-1",
    image: "/assets/PIHadir.png",
  },
  {
    name: "Hubin Website",
    desc: "Tugas figma, membuat ui/ux untuk website sekolah",
    link: "https://www.figma.com/design/0vFBceSivfI8Zx7UL3RAJX/Hubin-pi-school?node-id=0-1&t=X3UFPV6YUD88coTh-1",
    image: "/assets/Hubin.png",
  },
  {
    name: "On Progress 20% ",
    desc: "Mobile App, aplikasi cuaca sederhana",
    link: "https://www.figma.com/design/Ri0GmFHYWizsQRFF3GakYS/CUACA-APP--20-?node-id=0-1&t=q3Sjt1SSChiQ5qtn-1",
    image: "/assets/cuaca.png",
  },
  {
    name: "Coming Soon",
    desc: "",
    link: "",
    image: "/assets/coming soon.png",
  },
];

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState("about");

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Intersection Observer untuk detect section aktif - FIXED VERSION
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px", // Lebih sensitif untuk perubahan
      threshold: 0
    };

    const observerCallback = (entries) => {
      // Cari entry yang paling dekat dengan atas viewport
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Urutkan berdasarkan posisi relative ke viewport
        visibleEntries.sort((a, b) => {
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          return aRect.top - bRect.top; // Yang paling dekat dengan atas
        });
        
        // Ambil section yang paling dekat dengan atas viewport
        const closestSection = visibleEntries[0];
        setActiveSection(closestSection.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe semua sections
    sections.forEach(section => {
      const targetId = section.href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        observer.observe(targetElement);
      }
    });

    return () => {
      sections.forEach(section => {
        const targetId = section.href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          observer.unobserve(targetElement);
        }
      });
    };
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-slate-400 antialiased flex justify-center">
      <div className="w-full flex flex-col lg:flex-row px-6 py-12 md:px-12 lg:py-0">
        {/* Sidebar kiri */}
        <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl">
              <a href="/" className="hover:text-teal-300 transition-colors">
                Ananda Puttra
              </a>
            </h1>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-slate-200 sm:text-3xl">
              UI/UX Designer (Junior)
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-lg sm:text-xl">
              Saya membangun pengalaman digital yang mudah diakses dan menarik untuk web dan mobile.
            </p>

            {/* Navbar */}
            <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
              <ul className="w-max">
                {sections.map((section) => (
                  <li key={section.name}>
                    <a 
                      className={`group flex items-center py-3 transition-all duration-300 ${
                        activeSection === section.href.replace("#", "") 
                          ? "text-teal-300" 
                          : "text-slate-500"
                      }`}
                      href={section.href}
                      onClick={(e) => handleSmoothScroll(e, section.href)}
                    >
                      <span 
                        className={`mr-4 h-px w-10 transition-all duration-300 ${
                          activeSection === section.href.replace("#", "") 
                            ? "w-20 bg-teal-300" 
                            : "bg-slate-600 group-hover:w-20 group-hover:bg-teal-300"
                        }`}
                      ></span>
                      <span className="text-sm font-bold uppercase tracking-widest group-hover:text-teal-300">
                        {section.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social media */}
          <ul className="ml-1 mt-10 flex items-center" aria-label="Social media">
            {socialMedia.map((item) => (
              <li key={item.name} className="mr-6 shrink-0">
                <a
                  className="block hover:text-teal-300 transition-colors"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Konten kanan */}
        <main id="content" className="pt-24 lg:w-[60%] lg:py-24">
          {/* ABOUT */}
          <section 
            id="about" 
            className="mb-20 lg:mb-40 scroll-mt-20 transition-all duration-500"
          >
            <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 mb-6">About</h2>
            <p className="mb-6 text-xl leading-relaxed">
              Saya seorang junior UI/UX designer yang sedang belajar membuat antarmuka pengguna sederhana, mudah dipahami, dan ramah pengguna. Fokus saya pada pengembangan keterampilan desain serta memahami kebutuhan pengguna.
            </p>
            <p className="text-xl leading-relaxed">
              Saat ini fokus saya adalah mempelajari dasar-dasar desain UI/UX dan melatih keterampilan dengan membuat proyek kecil dan eksperimen desain.
            </p>
          </section>

          {/* PROJECTS */}
          <section 
            id="projects" 
            className="mb-20 lg:mb-40 scroll-mt-20 transition-all duration-500"
          >
            <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 mb-6">Projects</h2>
            {featuredProjects.map((project) => (
              <div key={project.name} className="mb-12 group">
                {/* Klik gambar untuk preview */}
                <img
                  src={project.image}
                  alt={project.name}
                  onClick={() => setSelectedImage(project.image)}
                  className="w-full max-w-lg rounded-lg border border-slate-700 shadow-md cursor-pointer transition hover:scale-[1.02] hover:border-teal-300"
                />
                {/* Judul link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-2xl font-semibold text-slate-200 hover:text-teal-300 transition-colors"
                >
                  {project.name}
                </a>
                {/* Deskripsi */}
                <p className="mt-2 text-lg text-slate-400">{project.desc}</p>
                {/* Link tambahan di bawah deskripsi */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-teal-400 hover:underline mt-1 inline-block"
                  >
                    Preview Figma →
                  </a>
                )}
              </div>
            ))}
          </section>

          {/* FOOTER */}
          <footer className="max-w-lg pb-20 text-base text-slate-500">
            <p>
              Keep learning and keep building.
            </p>
          </footer>
        </main>
      </div>

      {/* Modal gambar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-6 -right-6 text-white hover:text-teal-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;