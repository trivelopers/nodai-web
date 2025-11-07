import React from 'react';
import { useTranslation } from '../services/i18n';

const About = () => {
    const { translations } = useTranslation();
    const about = translations.about;

    return (
        <section id="about" className="py-20 sm:py-28 bg-white scroll-mt-20 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">{about.title}</h2>
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
                    <div className="mt-10 lg:mt-0" aria-hidden="true">
                        <img
                            className="rounded-lg shadow-xl dark:opacity-80"
                            src="https://picsum.photos/600/400?grayscale&random=1"
                            alt={about.imageAlt}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
