import React from 'react';
import { useTranslation } from '../services/i18n';

const benefitIcons = [
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" />
        </svg>
    ),
];

const Benefits = () => {
    const { translations } = useTranslation();
    const benefits = translations.benefits;

    return (
        <section id="benefits" className="relative scroll-mt-20 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-slate-200/60 bg-white/90 p-10 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_25px_55px_rgba(2,6,23,0.55)] dark:backdrop-blur-3xl transition-all duration-500">
                    <div className="lg:text-center">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-teal-600">
                            {benefits.tag}
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            {benefits.heading}
                        </p>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
                            {benefits.description}
                        </p>
                    </div>

                    <div className="mt-12 grid gap-10 md:grid-cols-2">
                        {benefits.items.map((benefit, index) => (
                            <div
                                key={benefit.name}
                                className="flex gap-5 rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm transition hover:border-slate-300 hover:shadow-[0_25px_35px_rgba(15,23,42,0.2)] dark:border-slate-800 dark:bg-white/5 dark:text-slate-200 dark:shadow-[0_25px_35px_rgba(2,6,23,0.55)] dark:hover:border-slate-600"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-700 text-white shadow-lg">
                                    {benefitIcons[index]}
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                        {benefit.name}
                                    </p>
                                    <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
