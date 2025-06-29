import { Award, Briefcase, Code, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Moon, Phone, Star, Sun, User, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
// 📸 Import your local image
import anushkaImage from './anushkaimg.jpeg';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const themes = [
    { id: 'light', icon: Sun, name: 'Light' },
    { id: 'dark', icon: Moon, name: 'Dark' },
    { id: 'neon', icon: Zap, name: 'Neon' }
  ];

  const skills = {
    languages: ['Python', 'C++', 'Java', 'JavaScript'],
    web: ['HTML5', 'CSS3', 'Tailwind', 'Next.js', 'Node.js', 'REST APIs'],
    tech: ['Data Structures', 'Machine Learning', 'Generative AI', 'Web Development'],
    tools: ['Git', 'GitHub', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Bokeh', 'Plotly']
  };

  // 🔧 CUSTOMIZE YOUR PROJECTS HERE
  const projects = [
    {
      title: 'Twitter Sentiment Analysis',
      description: 'Developed a model using Random Forest Algorithm to classify tweets into positive, negative, and neutral sentiments with high accuracy and F1-scores.',
      tech: ['Python', 'Machine Learning', 'NLP', 'Random Forest'],
      features: ['NLP-Powered Preprocessing', 'Real-World Data Validation', 'Strong Performance Metrics'],
      // 🔗 ADD YOUR PROJECT LINKS HERE
      githubLink: 'https://github.com/anushkagupta100/twitter-sentiment-analysis', // Replace with your actual GitHub repo
      liveLink: '', // Add live demo link if available
      // 📸 ADD PROJECT IMAGE HERE (optional)
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800' // Replace with your project image
    },
    {
      title: 'Gamics - Gaming Competition Platform',
      description: 'Fully responsive web application for creating and managing gaming competitions with dynamic features and optimized UI.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      features: ['Dynamic Features', 'Seamless UX', 'Cross-device Optimization'],
      // 🔗 ADD YOUR PROJECT LINKS HERE
      githubLink: 'https://github.com/anushkagupta100/gamics-gaming', // Replace with your actual GitHub repo
      liveLink: 'https://gamicsgaming.vercel.app/', // Add live demo link if available
      // 📸 ADD PROJECT IMAGE HERE (optional)
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800' // Replace with your project image
    },
    // 🆕 ADD MORE PROJECTS HERE
    // {
    //   title: 'Your New Project',
    //   description: 'Description of your new project...',
    //   tech: ['React', 'Node.js', 'MongoDB'],
    //   features: ['Feature 1', 'Feature 2', 'Feature 3'],
    //   githubLink: 'https://github.com/anushkagupta100/new-project',
    //   liveLink: 'https://your-new-project.netlify.app',
    //   image: 'https://images.pexels.com/photos/your-image.jpeg'
    // }
  ];

  const achievements = [
    {
      title: 'HackerRank Problem Solving',
      description: '3 Stars - Consistently solved complex algorithmic challenges with efficiency',
      icon: Star
    },
    {
      title: 'LeetCode Achievements',
      description: '200+ challenging problems solved across algorithms and data structures',
      icon: Code
    },
    {
      title: 'Flipkart Grid Success',
      description: 'Successfully cleared Round 1 demonstrating technical proficiency',
      icon: Award
    }
  ];

  // 🔧 CUSTOMIZE YOUR PERSONAL INFO HERE
  const personalInfo = {
    name: 'Anushka Gupta', // Change your name here
    title: 'Full Stack Developer & AI Enthusiast', // Change your title here
    description: 'Computer Science student passionate about AI/ML, web development, and creating innovative solutions that bridge technology and user experience.',
    location: 'Ghaziabad, India',
    phone: '+91 9149258181',
    email: 'anushkag078@gmail.com',
    // 🔗 UPDATE YOUR SOCIAL LINKS HERE
    linkedin: 'https://www.linkedin.com/in/anushka-gupta-678337248/',
    github: 'https://github.com/anushkagupta100',
    leetcode: 'https://leetcode.com/u/anushka_g078/',
    // 📸 NOW USING YOUR LOCAL IMAGE
    profileImage: anushkaImage, // This now uses your local image file
    // 📊 UPDATE YOUR STATS HERE
    stats: {
      cgpa: '8.08',
      leetcodeProblems: '150+',
      hackerrankStars: '4★'
    }
  };

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="particles"></div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-text">{personalInfo.name.split(' ')[0]}</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            {['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'nav-link-active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-controls">
            <div className="theme-switcher">
              {themes.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTheme(id)}
                  className={`theme-btn ${theme === id ? 'theme-btn-active' : ''}`}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
            
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">{personalInfo.name}</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{personalInfo.title}</span>
            </div>
            <p className="hero-description">
              {personalInfo.description}
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Get In Touch
              </button>
              <button onClick={() => scrollToSection('projects')} className="btn-secondary">
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-avatar">
                {/* 📸 NOW DISPLAYS YOUR LOCAL IMAGE */}
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="profile-image"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="profile-icon-fallback" style={{ display: 'none' }}>
                  <User size={80} />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">{personalInfo.stats.cgpa}</span>
                    <span className="stat-label">CGPA</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{personalInfo.stats.leetcodeProblems}</span>
                    <span className="stat-label">LeetCode</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{personalInfo.stats.hackerrankStars}</span>
                    <span className="stat-label">HackerRank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Computer Science student specializing in AI/ML at ABES Engineering College. 
                Currently pursuing advanced learning in Data Science and Generative AI through PWSKILLS.
              </p>
              <p>
                With a strong foundation in multiple programming languages and web technologies, I love 
                building innovative solutions that solve real-world problems. My experience spans from 
                sentiment analysis models to full-stack web applications.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="skill-highlight">
                <div className="highlight-item">
                  <Code size={24} />
                  <span>Problem Solver</span>
                </div>
                <div className="highlight-item">
                  <Briefcase size={24} />
                  <span>Web Developer</span>
                </div>
                <div className="highlight-item">
                  <GraduationCap size={24} />
                  <span>AI Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Bachelor of Computer Science (AIML)</h3>
                <h4>ABES Engineering College</h4>
                <div className="timeline-meta">
                  <span>2022 - 2026</span>
                  <span className="grade">CGPA: {personalInfo.stats.cgpa}</span>
                </div>
                <p>Specializing in Artificial Intelligence and Machine Learning with strong fundamentals in computer science.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Data Science and Generative AI</h3>
                <h4>PWSKILLS (Online Mode)</h4>
                <div className="timeline-meta">
                  <span>2024 - 2025</span>
                </div>
                <p>Advanced certification program focusing on modern data science techniques and generative AI applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <div className="skill-tags">
                {skills.web.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                {skills.tech.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Libraries</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {/* 📸 PROJECT IMAGE */}
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-features">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-dot"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <achievement.icon size={32} />
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <div className="contact-text">
              <h3>Ready to collaborate on amazing projects?</h3>
              <p>
                I'm always excited to work on new challenges and connect with fellow developers, 
                researchers, and innovators. Let's build something amazing together!
              </p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <Mail size={24} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={24} />
                <span>LinkedIn Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github size={24} />
                <span>GitHub Profile</span>
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Code size={24} />
                <span>LeetCode Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 {personalInfo.name}. Built with passion and creativity.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;