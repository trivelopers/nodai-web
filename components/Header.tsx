import React, { useState } from 'react';
import { useTranslation } from '../services/i18n';

interface HeaderProps {
    onAskNodaiClick: () => void;
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const { translations, language, setLanguage } = useTranslation();
    const navLinks = translations.header.navLinks;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLanguageToggle = () => setLanguage(language === 'es' ? 'en' : 'es');

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f4f7f6]/90 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-[#091116]/90">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
                <a href="#" aria-label="NODAI Home" className="flex h-9 w-[118px] shrink-0 items-center">
                    <img
                        src={theme === 'dark' ? '/images/nodai-blanco.png' : '/images/nodai-negro.png'}
                        alt="NODAI"
                        className="h-full w-full object-contain object-left"
                    />
                </a>

                <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Principal">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="rounded-full px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-2 md:ml-2">
                    <button
                        onClick={handleLanguageToggle}
                        className="h-9 rounded-full border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300"
                        aria-label={translations.header.languageToggleAria}
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400"
                        aria-label={translations.header.themeToggleAria}
                    >
                        {theme === 'light' ? (
                            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                                <circle cx="12" cy="12" r="4" />
                                <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                            </svg>
                        ) : (
                            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 15.35A8.5 8.5 0 018.65 3.75a8.5 8.5 0 1011.6 11.6z" />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            {isMenuOpen
                                ? <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                                : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950" aria-label="Principal móvil">
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
