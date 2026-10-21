import React from 'react';
import HeroGraph from './HeroGraph';
import { useTranslation } from '../services/i18n';

const Hero = () => {
    const { translations, language } = useTranslation();
    const { cta } = translations.hero;

    return (
        <section className="short-hero relative overflow-hidden">
            <div className="short-wrap relative grid items-center gap-12 py-[90px] lg:grid-cols-[1.05fr_.95fr] lg:gap-[72px]">
                <div className="max-w-2xl">
                    <div className="short-eyebrow">
                        {language === 'es' ? 'Tecnología aplicada a tu negocio' : 'Technology applied to your business'}
                    </div>
                    <h1 className="short-hero-title mt-5">
                        {language === 'es' ? 'Convertimos procesos complejos en productos simples.' : 'We turn complex processes into simple products.'}
                    </h1>
                    <p className="short-lead mt-6">
                        {language === 'es' ? 'Diseñamos software a medida, automatizaciones e integraciones para que tu empresa opere mejor y crezca sin fricción.' : 'We design custom software, automations and integrations so your business runs better and grows without friction.'}
                    </p>
                    <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(11,18,32,0.18)] transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
                        >
                            {cta}
                            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                            </svg>
                        </a>
                        <a
                            href="#clients"
                            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300"
                        >
                            {language === 'es' ? 'Ver casos reales' : 'View real cases'}
                        </a>
                    </div>
                </div>

                <HeroGraph />
            </div>
        </section>
    );
};

export default Hero;
