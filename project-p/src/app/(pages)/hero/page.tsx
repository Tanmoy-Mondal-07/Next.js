import { useState, useEffect } from "react"
import { ArrowRight, GithubIcon, Linkedin, Mail, Menu, Twitter, ExternalLink, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "../component/ProjectCard"
import ContactForm from "../component/ContactForm"
import Skills from "../component/Skills"
import Certificate from "../component/Certificate"
import useMobile from "../hooks/use-mobile"
import myLogo from "../assets/logo01.svg"
import DanteThumbnail from "../assets/projects/Dantethumbnail.png"
import PaperCut from "../assets/projects/papercut.png"
import ClgLibery from "../assets/projects/clglibery.png"
import tanmoyWebsite from "../assets/projects/tanmoyWebsite.png"
import Resume from "../assets/Resume/Ruseme_2.0.pdf"
import profilePic from '../assets/Resume/profilepic.png'
import aboutImage from '../assets/background.jpg'
// import uiBgImage from '../assets/bgwall.jpg'

function Hero() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)
  const isMobile = useMobile()

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight

      // Calculate scroll progress (0 to 1)
      setScrollProgress(scrollPosition / (documentHeight - windowHeight))

      // Determine active section based on scroll position
      const sections = ["home", "projects", "skills", "about", "certificate", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Certificate", href: "#certificate" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="flex min-h-screen flex-col text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-zinc-700 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Header */}
      <header className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3 group">
            {/* <img
              src={myLogo}
              alt="Tanmoy Logo"
              className="h-10 w-10 transition-transform duration-500 group-hover:fill-red-600"
            /> */}
            <span className="text-xl font-semibold tracking-wide text-zinc-800">TANMOY MONDAL</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-2 py-1 text-sm font-medium transition-colors ${activeSection === item.href.substring(1) ? "text-zinc-800" : "text-zinc-600 hover:text-zinc-800"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-zinc-800 transition-all duration-300 ${activeSection === item.href.substring(1) ? "w-full" : "w-0"
                    }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-zinc-100 rounded-full transition"
            aria-label="Toggle menu"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <Menu className="h-6 w-6 text-zinc-800" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 }}
                className="flex flex-col gap-4 p-6"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors ${activeSection === item.href.substring(1) ? "text-zinc-800" : "text-zinc-600"
                      }`}
                    onClick={() => setTimeout(() => setMobileNavOpen(false), 1000)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Development Banner */}
      {/* <div className="w-full bg-amber-50 text-amber-800 text-center py-2 text-sm font-medium z-30 fixed top-16 left-0">
        🚧 This website is currently in development. Some sections may be incomplete or subject to change. 🚧
      </div> */}

      {/* Main Content */}
      <main className="flex-1 pt-8">
        {/* Hero Section */}
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-8">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-zinc-100/30 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-zinc-200/30 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -tranzinc-x-1/2 -tranzinc-y-1/2 w-96 h-96 rounded-full bg-zinc-100/20 blur-3xl"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center px-6 max-w-4xl"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto mb-8 relative"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gray-200 p-1 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={profilePic}
                    alt="Tanmoy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-200 animate-pulse"></div>
              <div
                className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-pink-200 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h1 className="mb-4 text-4xl font-extrabold md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-gray-600 leading-relaxed">
                Building lean, minimalist solutions that prioritize simplicity and functionality.
                {/* <span className="italic block mt-2">True elegance arises from clarity of design.</span> */}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://github.com/Tanmoy-Mondal-07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <GithubIcon className="h-5 w-5" />
                View Github
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 px-6 py-3 font-medium text-zinc-700 hover:border-zinc-400 hover:text-zinc-800 hover:shadow-md transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="flex flex-col items-center"
              >
                <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="w-2 h-2 bg-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-tr-full opacity-40"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <div className="w-24 h-1 bg-zinc-700 mx-auto rounded-full"></div>
              {/* <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                A showcase of my recent work, demonstrating my skills in frontend development, UI/UX design, and
                problem-solving.
              </p> */}
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* projects */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard
                  title="Dante ⭐"
                  description="Dante is a minimalist social media app built with React.js and Appwrite, designed for a fast and smooth user experience."
                  imageSrc={DanteThumbnail}
                  href="https://dantetestserver.pages.dev/"
                  tags={["React", "Appwrite", "Tailwind CSS"]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard
                  title="College Library Management"
                  description="Built with PHP, this system provides separate access for admins, students, and teachers to manage book inventory, user records, and borrowing activities efficiently."
                  imageSrc={ClgLibery}
                  tags={["PHP", "HTML", "CSS"]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ProjectCard
                  title="Portfolio Website"
                  description="My personal portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing my projects and skills."
                  imageSrc={tanmoyWebsite}
                  href="#"
                  tags={["React", "Tailwind CSS", "Framer Motion"]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ProjectCard
                  title="Papercut Show"
                  description="Built a scroll-driven paper cut animation using React and Framer Motion with spring-based transitions and parallax effects."
                  imageSrc={PaperCut}
                  href="https://paper-cut-show.vercel.app/"
                  tags={["React", "Framer Motion", "Animation"]}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <a
                href="https://github.com/Tanmoy-Mondal-07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900 font-medium transition-colors"
              >
                View more projects on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <Skills />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-zinc-100/40 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-zinc-200/40 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-zinc-700 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-zinc-500 to-zinc-700 p-1">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src={aboutImage}
                      alt="About Tanmoy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-6 text-3xl font-bold text-gray-800">Frontend Developer</h3>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  I'm a passionate Frontend Developer specializing in creating clean, responsive web applications using
                  modern technologies like React, Tailwind CSS, and Framer Motion.
                </p>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  With a keen eye for design and a commitment to writing clean, maintainable code, I thrive in
                  environments where collaboration, problem-solving, and attention to detail are key.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-gray-700">What I bring to the table:</h4>
                  <ul className="space-y-2">
                    {[
                      "Modern frontend development with React",
                      "Performance optimization",
                      "Clean, maintainable code",
                      "Problem-solving mindset",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-zinc-600">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-500 px-6 py-3 font-medium text-zinc-600 hover:bg-zinc-50 transition-colors"
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-600 to-zinc-800 px-6 py-3 font-medium text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section id="certificate" className="py-24">
          <Certificate />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-zinc-100/40 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-zinc-200/40 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <div className="w-24 h-1 bg-zinc-700 mx-auto rounded-full"></div>
              {/* <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you! Fill out
                the form below and I'll get back to you as soon as possible.
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              {/* <p className="mb-6 text-sm text-green-700 bg-green-50 px-4 py-3 rounded-lg shadow-sm">
                📬 The contact section is fully functional — feel free to reach out to me anytime!
              </p> */}
              <ContactForm />

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Tanmoy-Mondal-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tanmoy-mondal-290695296/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </a> */}
                  {/* <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={myLogo} alt="Tanmoy Logo" className="h-10 w-10" />
                <span className="text-xl font-semibold tracking-wide bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                  TANMOY MONDAL
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Frontend developer specializing in creating minimal, elegant, responsive web applications.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tanmoy-Mondal-07"
                  className="text-gray-500 hover:text-zinc-700 transition-colors"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/tanmoy-mondal-290695296/" className="text-gray-500 hover:text-zinc-700 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                {/* <a href="#" className="text-gray-500 hover:text-zinc-700 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-zinc-700 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a> */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-600 hover:text-zinc-700 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Burdwan, India</li>
                {/* <li>email@example.com</li> */}
                {/* <li>+91 XXXXX XXXXX</li> */}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Tanmoy Mondal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Hero