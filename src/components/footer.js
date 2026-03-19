import React, { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { SiWhatsapp } from 'react-icons/si';

const CodeFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: 'not-set'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:amulya.mail.contact@gmail.com?subject=Project Inquiry from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DBudget: ${formData.budget}%0D%0DMessage:%0D${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '', budget: 'not-set' });
  };

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827]"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#4F46E5]/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-[#06B6D4]/8 rounded-full blur-2xl animate-float"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/5 left-1/6 w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse-subtle opacity-50"></div>
      
      <div className="container mx-auto relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h3 className="text-3xl md:text-4xl mb-4 font-bold text-white flex items-center justify-center flex-wrap gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </div>
            Let's <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Connect</span>
          </h3>
          
          <p className="mb-10 text-gray-300 text-lg text-center">Ready to bring ideas to life? Let's collaborate on your next project!</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h4 className="text-xl font-semibold text-white mb-6">Send me a message</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#4F46E5] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#4F46E5] transition-colors"
                />
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4F46E5] transition-colors"
                >
                  <option value="not-set" className="text-gray-800">Budget Range (optional)</option>
                  <option value="short-term" className="text-gray-800">Short-term (< $2000)</option>
                  <option value="small-project" className="text-gray-800">Small Project ($2000 - $5000)</option>
                  <option value="mid-project" className="text-gray-800">Mid-range ($5000 - $15000)</option>
                  <option value="large-project" className="text-gray-800">Large Project (> $15000)</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#4F46E5] transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-6">Quick Contact</h4>
                
                {/* Email */}
                <a
                  href="mailto:amulya.mail.contact@gmail.com"
                  className="flex items-center gap-4 mb-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <AiOutlineMail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">amulya.mail.contact@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919019596652"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 mb-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#20BA63] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <SiWhatsapp size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-white font-medium">+91 9019596652</p>
                  </div>
                </a>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4">Or connect on social media:</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/amulya-s-082904261"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 rounded-lg hover:bg-[#0A66C2] transition-colors"
                    >
                      <AiFillLinkedin size={20} className="text-white" />
                    </a>
                    <a
                      href="https://github.com/AmulyaSKumar"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <AiFillGithub size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2026 Amulya S Kumar. Available for freelance projects — Full Stack Development, AI Integration, System Architecture.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CodeFooter;
