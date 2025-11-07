import React from 'react';
import NodaiLogo from './NodaiLogo';
import { useTranslation } from '../services/i18n';

interface HeaderProps {
    onAskNodaiClick: () => void;
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAskNodaiClick, theme, toggleTheme }) => {
    const { translations, language, setLanguage } = useTranslation();
    const navLinks = translations.header.navLinks;

    const handleLanguageToggle = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <a href="#" aria-label="Nodai Home">
                        <img
                            src={theme === 'dark' ? './public/images/nodai-blanco.png' : './public/images/nodai-negro.png'}
                            alt="Nodai logo"
                            className="h-8 w-auto transition-all duration-300"
                        />
                        </a>

                    </div>
                    <nav className="hidden md:flex md:space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={handleLanguageToggle}
                            className="px-3 py-1 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-full hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-300 transition-colors"
                            aria-label={translations.header.languageToggleAria}
                        >
                            {translations.header.languageLabels[language === 'es' ? 'en' : 'es']} · {translations.header.languageLabels[language]}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label={translations.header.themeToggleAria}
                        >
                            {theme === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
