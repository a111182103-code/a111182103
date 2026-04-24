/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Code, 
  Award, 
  BookOpen, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  ExternalLink,
  Laptop,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import { SKILLS, CERTIFICATIONS, PROJECTS, BIOGRAPHY } from './constants.ts';

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center gap-3 mb-2 text-indigo-600">
      <Icon size={24} />
      <span className="text-sm font-bold tracking-widest uppercase font-sans">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">{title}</h2>
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: '自我介紹', icon: User },
    { id: 'skills', label: '電腦技能', icon: Laptop },
    { id: 'certs', label: '專業證照', icon: Award },
    { id: 'projects', label: '作業區', icon: Code },
    { id: 'bio', label: '自傳', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tighter"
          >
            Personal<span className="text-indigo-600">Portfo</span>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.id);
                }}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${activeSection === item.id ? 'text-indigo-600' : 'text-stone-600'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            聯絡我
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none mb-6">
              你好，我是<br />
              <span className="text-indigo-600">你的名字</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-lg leading-relaxed">
              熱衷於使用者體驗與技術創新的全端開發者。致力於用簡潔的代碼打造極致的數位體驗。
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition-all">
                查看作品集 <ChevronRight size={20} />
              </button>
              <div className="flex gap-2">
                <button className="p-4 rounded-full border border-stone-200 hover:border-stone-900 transition-colors"><Github size={20} /></button>
                <button className="p-4 rounded-full border border-stone-200 hover:border-stone-900 transition-colors"><Linkedin size={20} /></button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
              alt="Profile" 
              className="w-full aspect-square object-cover rounded-3xl shadow-2xl shadow-indigo-100/50 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-10 -left-10 glass-panel p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <GraduationCap />
              </div>
              <div>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Education</p>
                <p className="font-bold text-stone-900">國立高雄科技大學</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="關於我" subtitle="Who I Am" icon={User} />
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                我是一位充滿熱情的開發者，專注於前端架構與網頁介面設計。我喜歡挑戰複雜的問題，並尋找優雅且高效的解決方案。
              </p>
              <p>
                對我而言，程式不只是冷冰冰的指令，而是表達創意、改善生活質量的媒介。我追求具備美感與實用性的數位產品。
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-stone-100">
                <div>
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">現任職務</h4>
                  <p className="font-serif text-stone-900 font-bold text-xl">全端實習工程師</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">所在地</h4>
                  <p className="font-serif text-stone-900 font-bold text-xl">台灣，台北</p>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <h3 className="font-serif text-2xl font-bold mb-6">快速檔案</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-400">生日</span>
                  <span className="font-medium text-stone-900">199X / 10 / 24</span>
                </li>
                <li className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-400">學歷</span>
                  <span className="font-medium text-stone-900">資訊工程學士</span>
                </li>
                <li className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-400">主要語言</span>
                  <span className="font-medium text-stone-900">中文, 英文, 日文</span>
                </li>
                <li className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-400">愛好</span>
                  <span className="font-medium text-stone-900">攝影、旅行、閱讀</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="電腦技能" subtitle="Technical Proficiency" icon={Laptop} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl hover:border-indigo-200 transition-all group"
              >
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{skill.category}</span>
                    <h3 className="text-lg font-bold text-stone-900">{skill.name}</h3>
                  </div>
                  <span className="text-2xl font-serif italic text-stone-300 group-hover:text-indigo-600 transition-colors">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-indigo-600" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="專業證照" subtitle="Recognition" icon={Award} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div 
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-stone-50 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 font-bold">
                  {cert.date.split(' / ')[0].slice(-2)}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-stone-900 leading-tight">{cert.title}</h3>
                <p className="text-sm font-bold text-indigo-600 mb-4">{cert.issuer}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-2 text-indigo-400">
              <Code size={24} />
              <span className="text-sm font-bold tracking-widest uppercase font-sans">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold italic">作業區與產品集</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-video mb-6">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-3">{project.title}</h3>
                    <p className="text-stone-400 mb-6 max-w-md">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-stone-700 uppercase tracking-widest text-stone-500">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button className="w-14 h-14 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
                    <ExternalLink size={24} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="bio" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <SectionHeader title="個人自傳" subtitle="My Story" icon={BookOpen} />
            <p className="text-stone-500 italic mt-6 border-l-2 border-indigo-600 pl-6 py-2">
              "每一段經歷都是一塊拼圖，拼湊出現在的我。"
            </p>
          </div>
          <div className="lg:w-2/3 space-y-20">
            {BIOGRAPHY.map((section, index) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex gap-8">
                  <div className="text-5xl font-serif font-bold text-stone-100 select-none">
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-stone-900">{section.title}</h3>
                    <p className="text-lg text-stone-600 leading-relaxed indent-8">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">讓我們一起開始<br className="md:hidden" /><span className="text-indigo-600 italic">下一個精彩專案</span></h2>
          <div className="flex justify-center gap-12 mb-12">
            <a href="#" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium">
              <Mail size={20} /> sayhello@gmail.com
            </a>
            <a href="#" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium">
              <MessageSquare size={20} /> +886 0912 345 678
            </a>
          </div>
          <p className="text-xs font-bold text-stone-300 uppercase tracking-widest">
            © 2026 Your Name • Developed with Passion
          </p>
        </div>
      </footer>
    </div>
  );
}
