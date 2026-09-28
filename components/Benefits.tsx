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
        <section id="benefits" className="relative scroll-mt-20 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="section-frame rounded-3xl p-6 sm:p-10 lg:p-12">
                    <div className="max-w-3xl">
                        <h2 className="eyebrow">
                            {benefits.tag}
                        </h2>
                        <p className="section-title mt-3">
                            {benefits.heading}
                        </p>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                            {benefits.description}
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {benefits.items.map((benefit, index) => (
                            <div
                                key={benefit.name}
                                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-800 sm:p-6"
                            >
                                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-teal-300 dark:bg-teal-400 dark:text-slate-950">
                                    {benefitIcons[index]}
                                </div>
                                <div>
                                    <p className="text-base font-[650] text-slate-950 dark:text-white">
                                        {benefit.name}
                                    </p>
                                    <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">
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
