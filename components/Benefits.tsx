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
        <section id="benefits" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">{benefits.tag}</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {benefits.heading}
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 lg:mx-auto">
                        {benefits.description}
                    </p>
                </div>

                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {benefits.items.map((benefit, index) => (
                            <div key={benefit.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                                        {benefitIcons[index]}
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{benefit.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-slate-400">{benefit.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
