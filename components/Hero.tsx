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
        <section className="relative py-24 sm:py-32  lg:py-40 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    {description}
                </p>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {heroCards.map((service) => (
                        <div
                            key={service.name}
                            className="border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 rounded-2xl p-5 shadow-sm dark:shadow-none transition hover:shadow-lg dark:hover:border-slate-500"
                        >
                            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
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
                        className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-teal-700 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                        {cta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
