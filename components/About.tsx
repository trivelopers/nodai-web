import React from 'react';
import { useTranslation } from '../services/i18n';

const About = () => {
    const { translations } = useTranslation();
    const about = translations.about;

    return (
        <section id="about" className="relative scroll-mt-20 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-10 shadow-[0_25px_60px_rgba(15,23,42,0.12)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_25px_55px_rgba(2,6,23,0.55)] dark:backdrop-blur-3xl transition-all duration-500">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                                {about.title}
                            </h2>
                            {about.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`${index === 0 ? 'mt-4' : 'mt-6'} text-lg text-slate-600 dark:text-slate-300`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                            <h3 className="mt-8 text-xl font-bold text-slate-800 dark:text-slate-100">
                                {about.highlight}
                            </h3>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <div className="overflow-hidden rounded-2xl border border-slate-200/40 bg-gradient-to-br from-white to-slate-100 p-1 shadow-lg dark:border-slate-600/40 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900/70 dark:to-slate-900">
                                <img
                                    className="h-full w-full rounded-[inherit] object-cover shadow-xl"
                                    src="https://picsum.photos/800/500?grayscale&random=2"
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
