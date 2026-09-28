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
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.75h6.5L19 8.25V20H8a3 3 0 01-3-3V6.75a3 3 0 013-3z" />
            <path strokeLinecap="round" d="M14 4v5h5M9 13h6m-6 3h4" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a3 3 0 00-3 3v4a3 3 0 006 0v-4a3 3 0 00-3-3z" />
            <path strokeLinecap="round" d="M6.5 11.5a5.5 5.5 0 0011 0M12 17v3m-3 0h6" />
        </svg>
    ),
];


const Services: React.FC = () => {
    const { translations } = useTranslation();
    const primaryServices = translations.services.items.slice(0, 3);
    const specializedServices = translations.services.items.slice(3);

    return (
        <section id="services" className="relative scroll-mt-20 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="section-frame rounded-3xl p-6 sm:p-10 lg:p-12">
                    <div className="max-w-3xl">
                        <h2 className="section-title">
                            {translations.services.title}
                        </h2>
                        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                            {translations.services.subtitle}
                        </p>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {primaryServices.map((service, index) => (
                            <article key={service.name} className="flex min-h-60 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-700">
                                <span className="technical-label text-slate-400">0{index + 1}</span>
                                <div className="mt-auto flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">
                                    {serviceIcons[index]}
                                </div>
                                <h3 className="mt-5 text-xl font-[650] tracking-tight text-slate-950 dark:text-white">{service.name}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60 sm:p-6">
                        <h3 className="text-base font-[650] text-slate-950 dark:text-white">{translations.services.specializedTitle}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{translations.services.specializedSubtitle}</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {specializedServices.map((service, index) => (
                                    <article key={service.name} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">{serviceIcons[index + 3]}</div>
                                            <div><h4 className="font-semibold text-slate-950 dark:text-white">{service.name}</h4><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p></div>
                                        </div>
                                    </article>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
