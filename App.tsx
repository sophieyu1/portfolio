import { useState } from 'react'
import mePic from './imports/me.jpg'
import project1Img from './imports/project1.jpg'
import project2Img from './imports/project2.jpg'
import project3Img from './imports/project3.jpg'

const projects = [
  {
    id: '01',
    title: 'pH Sensing System',
    category: 'Research / Hardware',
    year: '2026',
    tags: ['ESP32', 'DAQ', 'Python', 'ThingSpeak'],
    image: project1Img,
    org: 'Rogers Lab, Querrey Simpson Institute for Bioelectronics, NU',
    period: 'Jan 2026 – present',
    description: 'Architected an automated multi-channel DAQ platform using an ESP32, precision ADC, and ThingSpeak cloud logging. Captured and processed 90k+ sensor telemetry points across broad pH/temperature ranges to characterize long-term sensor drift. Analyzed time-series data in Python with 10 statistical and signal-processing methods, reducing short-term sample-to-sample signal variation by ~84%.',
  },
  {
    id: '02',
    title: 'FloraLogic Watering',
    category: 'Project / Circuits',
    year: '2026',
    tags: ['Analog Design', 'ESP32', 'MOSFET', 'PCB'],
    image: project2Img,
    org: 'Design, Thinking, and Communication 2, NU | Evanston, IL',
    period: 'Apr – Jun 2026',
    description: 'Designed analog front-end and signal conditioning circuits to interface capacitive moisture sensors with the ESP32 ADC, implementing RC low-pass filtering and calibration. Designed low-side MOSFET drive circuitry with flyback diode protection to actuate a 12V solenoid valve from 3.3V GPIO logic. Performed end-to-end hardware bring-up and power rail validation, characterizing switching transients and system behavior during sustained field operation.',
  },
  {
    id: '03',
    title: 'Fishing Frenzy',
    category: 'Project / Assistive Tech',
    year: '2025',
    tags: ['CAD', 'Haptics', 'Accessibility', 'Prototyping'],
    image: project3Img,
    org: 'Design, Thinking, and Communication 1, NU | Evanston, IL',
    period: 'Sep – Dec 2025',
    description: 'Engineered a modular assistive game integrating switch-activated vibration motors and control electronics to provide tactile feedback for up to 10 simultaneous players. Developed and evaluated 3 design iterations through CAD, prototyping, client interviews, and user testing with North Center, refining interaction mechanisms, hardware layout, and accessibility based on feedback.',
  },
]

const skillGroups = [
  {
    label: 'Hardware & Lab',
    items: ['Schematic Capture', 'PCB Design (KiCad)', 'Rapid Prototyping', 'Soldering & Rework', 'Microcontrollers', 'ADCs', 'I2C / SPI / UART', 'Multimeters & Oscilloscopes', 'Function Generator', 'VNAs'],
  },
  {
    label: 'Programming & Scripting',
    items: ['Python (PyVISA, NumPy, SciPy, Pandas)', 'MATLAB', 'C/C++ (Arduino / ESP-IDF basics)', 'Racket'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Altium Designer','KiCad', 'LTSpice','Git', 'ThingSpeak (IoT Cloud)'],
  },
]

export default function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const highlighted = hoveredProject ?? activeProject

  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e0e0e0] bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-12 h-14">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#999]">
            Sophie Yu
          </span>
          <nav className="hidden md:flex items-center gap-10">
            {['About', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs tracking-widest uppercase text-[#999] hover:text-[#111] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden font-mono text-xs tracking-widest uppercase text-[#999]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-[#e0e0e0] px-6 py-6 flex flex-col gap-5">
            {['Work&Research', 'About', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('&', '-')}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs tracking-widest uppercase text-[#999] hover:text-[#111] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-14 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 pb-16 pt-24">
          <div className="max-w-5xl">
            <p className="font-mono text-xs text-[#999] tracking-widest uppercase mb-10">
              Portfolio — 2026
            </p>
            <h1 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] font-display italic mb-12 tracking-tight text-[#111]">
              Sophie Yu
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
              <p className="text-[#555] font-light leading-relaxed max-w-sm text-sm">
                Analog/digital circuit design, PCB development, and multi-channel DAQ systems.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">Location</p>
                  <p className="text-sm font-light text-[#333]">Evanston, IL</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">Graduating</p>
                  <p className="text-sm font-light text-[#333]">June 2028</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">GPA</p>
                  <p className="text-sm font-light text-[#333]">3.7 / 4.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e0e0e0] px-6 md:px-12 py-4 flex items-center gap-8 overflow-x-auto">
          {['PCB Design', 'Analog Circuits', 'Microcontrollers', 'Python & MATLAB', 'Signal Processing', 'Hardware Bring-Up', 'I2C / SPI', 'KiCad'].map((s, i) => (
            <span key={i} className="font-mono text-xs text-[#bbb] tracking-widest uppercase whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#e0e0e0]">
        <div className="px-6 md:px-12 grid md:grid-cols-12 gap-0">
          <div className="md:col-span-4 border-r-0 md:border-r border-[#e0e0e0] py-16 md:pr-12">
            <p className="font-mono text-xs text-[#999] tracking-widest uppercase mb-8">About</p>
            <div className="aspect-[3/4] bg-[#f5f5f5] overflow-hidden mb-6">
              <img
                src={mePic}
                alt="Sophie Yu — electrical engineering student"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <p className="font-mono text-xs text-[#bbb]">Northwestern University — McCormick School of Engineering</p>
          </div>
          <div className="md:col-span-8 py-16 md:pl-16 flex flex-col justify-center">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-display italic leading-[1.1] mb-10 text-[#111]">
              Building systems where<br />
              <em>hardware meets insight.</em>
            </h2>
            <div className="space-y-5 max-w-xl text-[#555] font-light leading-relaxed text-sm">
              <p>Electrical Engineering student at Northwestern's McCormick School of Engineering, specializing in analog/digital circuit design, PCB development, component selection, sensor interfaces, and multi-channel DAQ systems.</p>
              <p>Proficient in hardware bring-up and benchtop validation using oscilloscopes, VNAs, and signal generators, with experience in digital interfaces including I2C and SPI.</p>
              <p>Skilled in automated data acquisition, analysis, and test development using Python and MATLAB.</p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#e0e0e0] pt-8">
              {[['3.7', 'GPA'], ['SURG', 'Grant Recipient'], ["Dean's", 'List Honoree']].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display italic text-3xl mb-1 text-[#111]">{num}</p>
                  <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-[#e0e0e0]">
        <div className="px-6 md:px-12 py-6 flex items-center justify-between">
          <span className="font-mono text-xs text-[#999] tracking-widest uppercase">Selected Work</span>
          <span className="font-mono text-xs text-[#bbb]"> </span>
        </div>

        <div className="border-t border-[#e0e0e0]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`border-b border-[#e0e0e0] transition-colors duration-300 cursor-pointer ${
                highlighted === project.id ? 'bg-[#fafafa]' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                <span className="font-mono text-xs text-[#bbb] md:w-12 shrink-0">{project.id}</span>
                <div className="flex-1 md:px-8">
                  <h2 className="text-2xl md:text-3xl font-display italic leading-tight text-[#111]">{project.title}</h2>
                </div>
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="font-mono text-xs text-[#999] tracking-widest uppercase">{project.category}</span>
                  <span className="font-mono text-xs text-[#bbb]">{project.year}</span>
                  <span className={`font-mono text-xs text-[#bbb] transition-transform duration-300 ${activeProject === project.id ? 'rotate-45' : ''}`}>+</span>
                </div>
              </div>

              {activeProject === project.id && (
                <div className="border-t border-[#e0e0e0] grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-[#f5f5f5]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-between border-l-0 md:border-l border-[#e0e0e0]">
                    <div>
                      <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">Org</p>
                      <p className="text-xs text-[#777] mb-1">{project.org}</p>
                      <p className="font-mono text-xs text-[#bbb] mb-6">{project.period}</p>
                      <p className="text-[#555] font-light leading-relaxed text-sm mb-8">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="font-mono text-xs text-[#999] border border-[#e0e0e0] px-3 py-1 tracking-widest uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

{/* Technical Skills */}
<section id="skills" className="mt-10 border-t border-[#e0e0e0]">

  {/* Header band */}
  <div className="px-6 md:px-12 py-6 bg-[#fafafa] border-b border-[#e0e0e0]">
    <p className="font-mono text-xs text-[#999] tracking-widest uppercase">
      Technical Skills
    </p>
  </div>

  {/* Skills content */}
  <div className="px-6 md:px-12 pt-8 pb-16">
    <div className="grid md:grid-cols-3 gap-0">
      {skillGroups.map((group, i) => (
        <div
          key={group.label}
          className={`py-8 md:py-0 ${
            i < 2
              ? 'border-b md:border-b-0 md:border-r border-[#e0e0e0]'
              : ''
          } ${i > 0 ? 'md:pl-10' : ''}`}
        >
          <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-6">
            {group.label}
          </p>

          <ul className="space-y-2">
            {group.items.map(item => (
              <li key={item} className="text-sm text-[#444] font-light">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>

</section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#e0e0e0]">
        <div className="px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs text-[#999] tracking-widest uppercase mb-8">Contact</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display italic leading-[1] mb-8 text-[#111]">
              Open for new roles and great conversations.
            </h2>
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:sophieyu1028@gmail.com" className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200">
                  sophieyu1028@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">Phone</p>
                <a href="tel:7732904492" className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200">
                  (773) 290-4492
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">LinkedIn</p>
                <a href="https://www.linkedin.com/in/sophie-y-61275829a/" target="_blank" rel="noreferrer" className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200 break-all">
                  linkedin.com/in/sophie-y-61275829a
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-[#bbb] tracking-widest uppercase mb-1">Address</p>
                <p className="text-sm text-[#555] font-light">2400 Sheridan Road, Evanston, IL 60201</p>
              </div>
            </div>
          </div>
          <form className="space-y-0 border border-[#e0e0e0]" onSubmit={e => e.preventDefault()}>
            <div className="border-b border-[#e0e0e0] p-6">
              <label className="font-mono text-xs text-[#bbb] tracking-widest uppercase block mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Full name please~"
                className="w-full bg-transparent text-[#111] font-light text-sm placeholder:text-[#ccc] focus:outline-none"
              />
            </div>
            <div className="border-b border-[#e0e0e0] p-6">
              <label className="font-mono text-xs text-[#bbb] tracking-widest uppercase block mb-2">Email</label>
              <input
                type="email"
                placeholder="you_are_the_best@email.com"
                className="w-full bg-transparent text-[#111] font-light text-sm placeholder:text-[#ccc] focus:outline-none"
              />
            </div>
            <div className="border-b border-[#e0e0e0] p-6">
              <label className="font-mono text-xs text-[#bbb] tracking-widest uppercase block mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your message for me..."
                className="w-full bg-transparent text-[#111] font-light text-sm placeholder:text-[#ccc] focus:outline-none resize-none"
              />
            </div>
            <div className="p-6">
              <button
                type="submit"
                className="w-full font-mono text-xs tracking-widest uppercase bg-[#111] text-white py-4 hover:bg-[#333] transition-colors duration-200"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e0e0e0] px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#bbb]">© 2026 Sophie Yu, All rights reserved.</span>
      </footer>
    </div>
  )
}
