import {
  ArrowUpRightIcon,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

// ✅ Komponen ShinyText
const ShinyText = ({ text, className }) => (
  <span className={`bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text ${className}`}>
    {text}
  </span>
);

// ✅ Komponen BlurText
const BlurText = ({ text, className }) => (
  <p className={`${className}`}>{text}</p>
);

// ✅ Komponen FadeContent
const FadeContent = ({ children, className }) => (
  <p className={`opacity-100 transition-opacity duration-1000 ${className}`}>
    {children}
  </p>
);

// ✅ Komponen AnimatedContent
const AnimatedContent = ({ children, className }) => (
  <div className={`transition-transform transform hover:scale-105 ${className}`}>
    {children}
  </div>
);

// ✅ Komponen InfiniteScroll (dummy)
const InfiniteScroll = () => (
  <div className="text-gray-400 text-sm italic" />
);

// ✅ Komponen Home
const Home = () => {
  // Data dengan ikon
  const socialMedia = [
    {
      name: "WhatsApp",
      link: "https://wa.me/yourusername",
      icon: <Phone size={20} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yourusername",
      icon: <Linkedin size={20} />,
    },
    {
      name: "GitHub",
      link: "https://github.com/Nann-Zy",
      icon: <Github size={20} />,
    },
    {
      name: "Gmail",
      link: "mailto:anandaputtra270608@gmail.com",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 bg-white h-screen py-32 max-sm:py-8 max-sm:gap-8">
      <div id="home" className="pt-24 scroll-mt-24">
        <div className="flex gap-40 max-sm:gap-10 max-sm:flex-col">
          
          {/* Kiri */}
          <div className="flex flex-col gap-10 w-[40rem] max-sm:w-[20rem] max-sm:gap-3">
            <BlurText
              text="I'm Ananda Putra."
              className="w-9/12 text-8xl font-medium max-sm:text-5xl"
            />
            <FadeContent className="max-sm:text-sm">
              Aspiring{" "}
              <ShinyText
                text="Front-end Developer"
                className="font-semibold cursor-pointer hover:underline"
              />{" "}
              passionate about crafting intuitive interfaces and seamless user
              experiences. I love turning ideas into interactive, responsive
              designs using modern web technologies, while constantly learning and
              growing along the way.
            </FadeContent>
          </div>

          {/* Kanan */}
          <div className="flex flex-col gap-5 w-[18rem]">
            <BlurText text="Social Media" className="text-2xl font-semibold" />
            {socialMedia.map((item) => (
              <AnimatedContent key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center font-medium text-2xl border-b border-[#0000003f] py-1 max-sm:text-lg"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <ArrowUpRightIcon size={20} />
                </a>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>

      <InfiniteScroll />
    </section>
  );
};

export default Home;
