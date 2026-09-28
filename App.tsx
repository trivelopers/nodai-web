import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';
import ThinkingModeModal from './components/ThinkingModeModal';
import { TranslationProvider } from './services/i18n';

const AppContent: React.FC = () => {
    const [theme, setTheme] = useState('light');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [caseSlug, setCaseSlug] = useState(() => window.location.hash.match(/^#case\/([^/]+)$/)?.[1] ?? null);

    useEffect(() => {
        // Siempre cargar en modo light por defecto
        setTheme('light');
        localStorage.setItem('nodai-theme', 'light');
    }, []);

    useEffect(() => {
        const syncCaseRoute = () => setCaseSlug(window.location.hash.match(/^#case\/([^/]+)$/)?.[1] ?? null);
        window.addEventListener('hashchange', syncCaseRoute);
        return () => window.removeEventListener('hashchange', syncCaseRoute);
    }, []);

    useEffect(() => {
        localStorage.setItem('nodai-theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        const root = document.documentElement;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let frame = 0;

        const updateGridPosition = (event: PointerEvent) => {
            if (reducedMotion.matches || event.pointerType === 'touch') return;

            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const x = (event.clientX / window.innerWidth - 0.5) * 24;
                const y = (event.clientY / window.innerHeight - 0.5) * 24;
                root.style.setProperty('--grid-x', `${x.toFixed(2)}px`);
                root.style.setProperty('--grid-y', `${y.toFixed(2)}px`);
            });
        };

        const resetGridPosition = () => {
            root.style.setProperty('--grid-x', '0px');
            root.style.setProperty('--grid-y', '0px');
        };

        window.addEventListener('pointermove', updateGridPosition, { passive: true });
        document.documentElement.addEventListener('pointerleave', resetGridPosition);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('pointermove', updateGridPosition);
            document.documentElement.removeEventListener('pointerleave', resetGridPosition);
            resetGridPosition();
        };
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app-shell min-h-screen text-slate-800 transition-colors duration-300 dark:text-slate-200">
            <Header onAskNodaiClick={openModal} theme={theme} toggleTheme={toggleTheme} />
            {caseSlug ? <CaseStudy slug={caseSlug} /> : <main><Hero /><Services /><Clients /><Benefits /><About /><CTA /></main>}
            <Footer />
            {isModalOpen && <ThinkingModeModal onClose={closeModal} />}
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
