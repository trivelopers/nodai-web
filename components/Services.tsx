import React from 'react';
import { useTranslation } from '../services/i18n';
const serviceIcons = [
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4H4zm0 11v5h5v-5H4zm6-6v5h5V9h-5zm6 0v5h5V9h-5zm-6 6v5h5v-5h-5zm6 0v5h5v-5h-5z" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    // 🧠 Asistentes virtuales con IA conectados a WhatsApp
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" />
            <circle cx="18" cy="6" r="1" fill="currentColor" />
        </svg>
    ),
    // 🏬 Gestión comercial y catálogo online
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10l9 4 9-4V7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V11l6-3v13" />
        </svg>
    ),
];


const Services = () => {
    const { translations } = useTranslation();
    const services = translations.services.items.slice(3);
    const visibleIcons = serviceIcons.slice(3);

    return (
        <section id="services" className="relative scroll-mt-20 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-10 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/70 dark:shadow-[0_25px_55px_rgba(2,6,23,0.55)] dark:backdrop-blur-3xl transition-all duration-500">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                            {translations.services.title}
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                            {translations.services.description}
                        </p>
                    </div>

                    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={service.name}
                                className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/90 p-8 shadow-sm transition hover:border-slate-300 hover:shadow-[0_25px_35px_rgba(15,23,42,0.2)] dark:border-slate-800 dark:bg-white/5 dark:text-slate-200 dark:shadow-[0_25px_35px_rgba(2,6,23,0.6)] dark:hover:border-slate-600"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-sky-500 text-white shadow-lg">
                                    {visibleIcons[index] ?? serviceIcons[index]}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {service.name}
                                </h3>
                                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
