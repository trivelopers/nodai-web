import React from 'react';
import { useTranslation } from '../services/i18n';

interface Client {
    name: string;
    subtitle?: string;
    industry: string;
    solution: string;
    tag: string;
    description: string;
    logo?: string;
    website?: string;
}

const slugify = (name: string) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const CaseStudy: React.FC<{ slug: string }> = ({ slug }) => {
    const { translations, language } = useTranslation();
    const clients = translations.clients.items as Client[];
    const client = clients.find((item) => slugify(item.name) === slug);

    if (!client) {
        return (
            <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div><p className="eyebrow">NODAI / 404</p><h1 className="mt-3 text-4xl font-[700] tracking-tight text-slate-950 dark:text-white">{language === 'es' ? 'Caso no encontrado.' : 'Case study not found.'}</h1><a className="mt-6 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-teal-400 dark:text-slate-950" href="#clients">{language === 'es' ? 'Volver a casos reales' : 'Back to real cases'}</a></div>
            </main>
        );
    }

    return (
        <main>
            <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
                <div className="absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(96,226,190,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(96,226,190,.16) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
                <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
                    <div>
                        <a href="#clients" className="inline-flex text-sm font-semibold text-teal-300 transition hover:text-white">← {language === 'es' ? 'Volver a casos reales' : 'Back to real cases'}</a>
                        <p className="mt-10 text-xs font-bold uppercase tracking-[0.14em] text-teal-300">{client.industry} / {client.tag}</p>
                        <h1 className="mt-4 max-w-xl text-4xl font-[700] leading-[1.02] tracking-[-0.06em] sm:text-6xl">{client.solution}</h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{client.description}</p>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/15 bg-white p-8 shadow-2xl sm:p-12">
                        {client.logo ? <img src={client.logo} alt={`Logo de ${client.name}`} className="mx-auto max-h-32 w-full object-contain" /> : <p className="text-center text-3xl font-bold text-slate-950">{client.name}</p>}
                    </div>
                </div>
            </section>
            <section className="py-16 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
                    <aside><p className="eyebrow">{language === 'es' ? 'Caso real' : 'Real case'}</p><h2 className="mt-3 text-3xl font-[700] tracking-[-0.045em] text-slate-950 dark:text-white">{client.name}</h2>{client.subtitle && <p className="mt-2 text-slate-600 dark:text-slate-300">{client.subtitle}</p>}</aside>
                    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-10">
                        <h2 className="text-2xl font-[650] tracking-tight text-slate-950 dark:text-white">{language === 'es' ? 'Qué hicimos' : 'What we built'}</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{client.description}</p>
                        <div className="mt-7 border-t border-slate-200 pt-6 dark:border-slate-800">
                            <p className="text-sm font-semibold text-slate-950 dark:text-white">{language === 'es' ? 'Solución implementada' : 'Implemented solution'}</p>
                            <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">{client.solution}</p>
                        </div>
                        {client.website && <a href={client.website} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 dark:bg-teal-400 dark:text-slate-950">{translations.clients.visitWebsite}</a>}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CaseStudy;
