import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThinkingModeModal from './components/ThinkingModeModal';
import { TranslationProvider } from './services/i18n';

const AppContent: React.FC = () => {
    const [theme, setTheme] = useState('light');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Siempre cargar en modo light por defecto
        setTheme('light');
        localStorage.setItem('nodai-theme', 'light');
    }, []);

    useEffect(() => {
        localStorage.setItem('nodai-theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800 transition-colors duration-500 dark:from-[#020617] dark:via-slate-950 dark:to-slate-950 dark:text-slate-200">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200/40 via-sky-200/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-teal-200/40 to-cyan-100/0 blur-3xl dark:from-cyan-500/20 dark:to-transparent" />
            </div>
            <div className="relative z-10">
                <Header onAskNodaiClick={openModal} theme={theme} toggleTheme={toggleTheme} />
                <main className="space-y-24 px-4 sm:px-6 lg:px-0">
                    <Hero />
                    <Services />
                    <About />
                    <Benefits />
                    {/* <Clients />*/}
                    <CTA />
                </main>
                <Footer />
                {isModalOpen && <ThinkingModeModal onClose={closeModal} />}
            </div>
        </div>
    );
};

export default function App() {
    return (
        <TranslationProvider>
            <AppContent />
        </TranslationProvider>
    );
}
