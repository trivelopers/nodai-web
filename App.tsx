
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

export default function App() {
    const [theme, setTheme] = useState('light');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('nodai-theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            setTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
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
        <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
            <Header onAskNodaiClick={openModal} theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <Services />
                <About />
                <Benefits />
                <Clients />
                <CTA />
            </main>
            <Footer />
            {isModalOpen && <ThinkingModeModal onClose={closeModal} />}
        </div>
    );
}
