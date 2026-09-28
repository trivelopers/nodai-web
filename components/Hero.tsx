import React from 'react';
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

                <div className="relative mx-auto w-full max-w-xl lg:mx-0">
                    <div className="absolute -inset-6 rounded-[2.5rem] bg-teal-300/20 blur-3xl dark:bg-teal-500/10" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/95 p-3 shadow-[0_28px_75px_rgba(15,70,56,0.16)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
                        <div className="flex items-center justify-between border-b border-slate-200 px-2 pb-3 dark:border-slate-800">
                            <div className="flex gap-1.5" aria-hidden="true">
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <span className="technical-label text-[10px] text-teal-700 dark:text-teal-300">NODAI / OPERACIÓN</span>
                        </div>
                        <div className="mt-3 rounded-2xl bg-slate-950 p-5 text-white sm:p-6">
                            <p className="technical-label text-[10px] text-teal-300">
                                {language === 'es' ? 'TODO CONECTADO' : 'ALL CONNECTED'}
                            </p>
                            <h2 className="mt-3 max-w-sm text-2xl font-[650] leading-tight tracking-[-0.8px] sm:text-3xl">
                                {language === 'es' ? 'Tu operación, más clara en un solo lugar.' : 'Your operations, clearer in one place.'}
                            </h2>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {[
                                    language === 'es' ? 'Clientes' : 'Customers',
                                    language === 'es' ? 'Procesos' : 'Processes',
                                    language === 'es' ? 'Equipo' : 'Team',
                                    language === 'es' ? 'Integraciones' : 'Integrations',
                                ].map((item, index) => (
                                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.07] p-3">
                                        <span className="technical-label text-[10px] text-teal-300">0{index + 1}</span>
                                        <p className="mt-1 text-sm font-semibold text-white">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 flex items-center gap-2 rounded-xl border border-teal-400/20 bg-teal-400/10 px-3 py-2.5 text-xs text-teal-100">
                                <span className="h-2 w-2 rounded-full bg-teal-300" aria-hidden="true" />
                                {language === 'es' ? 'Flujos diseñados para tu negocio.' : 'Workflows designed for your business.'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
