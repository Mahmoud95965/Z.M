import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Heart,
  BrainCircuit
} from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/zakerly', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/zakerly', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/zakerly', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/zakerly', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:pt-16 lg:pb-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">            <div className="flex items-center group">
              <BrainCircuit className="h-8 w-8 text-indigo-400 animate-pulse-slow transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-300" />
              <span className="mx-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-fade-in transition-all duration-300 group-hover:bg-gradient-to-l">
                Zakér
              </span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              {t('footer.about')}
            </p>
            <div className="flex items-center gap-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/tools', label: t('nav.tools') },
                { to: '/about', label: t('nav.about') },
                { to: '/submit-tool', label: t('nav.submitTool') }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/faq', label: t('nav.faq') },
                { to: '/contact', label: t('nav.contact') },
                { to: '/privacy-policy', label: t('nav.privacy') },
                { to: '/terms', label: t('nav.terms') }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              {t('footer.newsletter')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('footer.newsletterDescription')}
            </p>
            <NewsletterForm className="max-w-md" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-start">
           {t('footer.allRightsReserved')} لدي شركة MARYAM {currentYear} ©.
            </p>
            <p className="text-yellow-500 text-sm bg-yellow-500/10 px-3 py-1 rounded-full">
              {t('footer.developmentStatus', { date: '1/1/2026' })}
              <br></br>
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>{t('footer.madeWith')}</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>{t('footer.inEgypt')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
