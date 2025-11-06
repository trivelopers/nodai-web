import React from 'react';
import { formatDateForLanguage, useTranslation } from '../services/i18n';

const Terms = () => {
    const { translations, language } = useTranslation();
    const terms = translations.terms;
    const contactDetails = translations.contactDetails;
    const formattedDate = formatDateForLanguage(language);

    return (
        <div className="bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                        {terms.title}
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        {terms.lastUpdatedLabel}: {formattedDate}
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    {terms.sections.map((section) => (
                        <section key={section.title} className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{section.title}</h2>
                            {section.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-slate-600 dark:text-slate-300">
                                    {paragraph}
                                </p>
                            ))}
                            {section.list && (
                                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mt-4">
                                    {section.list.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {section.includeContactDetails && (
                                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mt-4">
                                    {contactDetails.map((detail) => (
                                        <p key={detail.type} className="text-slate-600 dark:text-slate-300">
                                            <strong>{detail.label}:</strong>{' '}
                                            <a
                                                href={detail.href}
                                                className={detail.type === 'whatsapp' ? 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300' : 'text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'}
                                                target={detail.type === 'whatsapp' ? '_blank' : undefined}
                                                rel={detail.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                                            >
                                                {detail.value}
                                            </a>
                                        </p>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Terms;
