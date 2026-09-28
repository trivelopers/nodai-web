import React from 'react';
import { useTranslation } from '../services/i18n';

const About = () => {
    const { translations } = useTranslation();
    const about = translations.about;

    return (
        <section id="about" className="relative scroll-mt-20 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="section-frame overflow-hidden rounded-3xl">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                        <div className="p-6 sm:p-10 lg:p-12">
                            <h2 className="section-title">
                                {about.title}
                            </h2>
                            {about.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`${index === 0 ? 'mt-6' : 'mt-5'} max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                            <h3 className="mt-8 border-l-2 border-teal-500 pl-4 text-base font-[650] leading-6 text-slate-900 dark:text-slate-100">
                                {about.highlight}
                            </h3>
                        </div>
                        <div className="min-h-[320px] border-t border-slate-200 bg-slate-100 lg:border-l lg:border-t-0 dark:border-slate-800 dark:bg-slate-900">
                            <div className="h-full overflow-hidden">
                                <img
                                    className="h-full min-h-[320px] w-full object-cover grayscale-[15%] transition duration-500 hover:grayscale-0"
                                    src="/images/equipo.jpg"
                                    alt={about.imageAlt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
