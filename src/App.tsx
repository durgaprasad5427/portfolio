import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, ArrowRight, User, Wrench, Briefcase, MessageCircle } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-emerald-400">Durga Prasad Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-[3.5rem] font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-[1.35]">
  K V N Durga Prasad
</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-slate-300">
            Java | AI Developer
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting real-world solutions through intelligent code. Specialized in  Java development and AI systems. Passionate about innovation and building meaningful projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              Explore My Work <ArrowRight className="w-5 h-5" />
           </button>
  <a
    href="https://drive.google.com/file/d/15YexFf-PXmV20RHdrItxq9gsF3Rw4C6w/view?usp=sharing" // Replace with your actual CV file path or external link
    download
    className="border border-slate-600 hover:border-emerald-400 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-800"
  >
    Download Resume <Download className="w-5 h-5" />
  </a>
</div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/durgaprasad5427" className="text-slate-400 hover:text-emerald-400 transition-colors p-3 hover:bg-slate-800 rounded-full">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/durga-prasad-9a6b87265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-400 hover:text-blue-400 transition-colors p-3 hover:bg-slate-800 rounded-full">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:durgaprasad91918@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors p-3 hover:bg-slate-800 rounded-full">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="w-8 h-8 text-emerald-400" />
            <h2 className="text-4xl font-bold">Hi there! I'm Durga Prasad</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
              I'm a developer combining Java, AI, and real-world problem-solving. automating tasks, and blending machine intelligence with interactive interfaces. I love turning ideas into real-world systems that make a difference.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Hobbies & Interests</h3>
                <p className="text-slate-300 leading-relaxed">
                 Mixing logic with curiosity AI tinkerer, code whisperer, and weekend innovator.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center overflow-hidden">
           <img
           src="WhatsApp Image 2025-08-01 at 20.23.53_16420b7e.jpg" // Replace with your actual image path or URL
           alt="Durga Prasad Profile"
           className="w-full h-full object-cover rounded-full"
           />
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Wrench className="w-8 h-8 text-emerald-400" />
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-emerald-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">AI/ML</h3>
              <div className="space-y-3">
                {['TensorFlow', 'Scikit-learn', 'Deep Learning', 'NLP'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Programming Languages</h3>
              <div className="space-y-3">
                {['Java', 'Python', 'C'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Web & Database</h3>
              <div className="space-y-3">
                {['Spring Boot', 'MongoDB', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Projects Section */}
<section id="projects" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-3 mb-12">
      <Briefcase className="w-8 h-8 text-emerald-400" />
      <h2 className="text-4xl font-bold">Featured Projects</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Bilingual Voice Assistant */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-emerald-400 transition-all duration-300 hover:scale-105">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Bilingual Voice Assistant</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Voice assistant capable of understanding and responding in Telugu and English. Used Google Speech API 
            and PyTTS for natural interaction.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Python', 'Google Speech API', 'NLP', 'PyTTS'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/durgaprasad5427/Bilingual-Voice-Assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Code className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>

      {/* Evergreen Telegram Bot */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Evergreen Telegram Bot</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Telegram bot that colorizes black-and-white photos using FastAI and DeOldify. Delivers highly realistic 
            results using pretrained AI models.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Python', 'AI', 'DeOldify', 'FastAI', 'Image Processing'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/durgaprasad5427/Evergreen-Telegram-Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Code className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>

      {/* ServiceNow Project */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-pink-400 transition-all duration-300 hover:scale-105">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-pink-400 mb-4">Calculating Family Expenses Using ServiceNow</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            This project tracks and manages family expenses using ServiceNow, implementing tables and business rules 
            to automate processes and visualize financial data.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['ServiceNow', 'Table', 'Business Rules'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-slate-700 text-pink-400 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/durgaprasad5427/Calculating-Family-Expenses-Using-Service-Now"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Code className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center gap-3 mb-12">
      <MessageCircle className="w-10 h-10 text-emerald-400" />
      <h2 className="text-4xl font-bold">Get In Touch</h2>
    </div>

    <div className="flex justify-center space-x-8">
      <a
        href="https://github.com/durgaprasad5427"
        className="text-slate-400 hover:text-emerald-400 transition-colors p-4 hover:bg-slate-800 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-10 h-10" />
      </a>
      <a
        href="https://www.linkedin.com/in/durga-prasad-9a6b87265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="text-slate-400 hover:text-blue-400 transition-colors p-4 hover:bg-slate-800 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-10 h-10" />
      </a>
      <a
        href="mailto:durgaprasad91918@gmail.com"
        className="text-slate-400 hover:text-purple-400 transition-colors p-4 hover:bg-slate-800 rounded-full"
      >
        <Mail className="w-10 h-10" />
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 K V N Durga Prasad  Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
