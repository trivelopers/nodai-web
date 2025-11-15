import React from 'react';
import { useTranslation } from '../services/i18n';

const Hero = () => {
    const { translations } = useTranslation();
    const { title, description, cta } = translations.hero;
    const heroServices = translations.services.items.slice(0, 3);
    const heroCards =
        heroServices.length === 3
            ? [heroServices[2], heroServices[0], heroServices[1]]
            : heroServices;

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-24 sm:py-32 lg:py-40">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200/70 via-sky-200/30 to-purple-200/0 dark:from-teal-500/25 dark:via-cyan-500/10 dark:to-transparent blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-300/30 to-violet-300/10 dark:from-emerald-500/20 dark:to-rose-500/0 blur-3xl" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                    <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">
                        {title}
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    {description}
                </p>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {heroCards.map((service) => (
                        <div
                            key={service.name}
                            className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 px-6 py-7 shadow-[0_20px_40px_rgba(15,23,42,0.25)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60 dark:shadow-[0_20px_40px_rgba(2,6,23,0.55)] transition hover:translate-y-0.5"
                        >
                            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide dark:text-emerald-300">
                                {service.name}
                            </p>
                            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 lg:mt-16">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/40 transition duration-300 ease-out hover:-translate-y-1 hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 dark:from-emerald-400 dark:to-emerald-500"
                    >
                        {cta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
