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

const Clients: React.FC = () => {
    const { translations, language } = useTranslation();
    const section = translations.clients;
    const clients = section.items as Client[];
    const logos = [...clients, ...clients];
    const slugify = (name: string) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return (
        <>
            <section id="clients" className="relative scroll-mt-20 overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="eyebrow text-teal-300">{section.tag}</p>
                    <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-[650] tracking-[-1.2px] sm:text-4xl">{language === 'es' ? 'Empresas que ya trabajan con nosotros.' : 'Companies already working with us.'}</h2>
                </div>
                <div className="logo-marquee mt-9" aria-label={section.title}>
                    <div className="logo-marquee__track">
                        {logos.map((client, index) => (
                            <a
                                key={`${client.name}-${index}`}
                                href={client.website ?? `#case/${slugify(client.name)}`}
                                className="logo-marquee__item"
                                aria-hidden={index >= clients.length}
                                tabIndex={index >= clients.length ? -1 : undefined}
                                aria-label={index < clients.length ? (language === 'es' ? `Visitar ${client.name}` : `Visit ${client.name}`) : undefined}
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt=""
                                        className="logo-marquee__image"
                                    />
                                ) : (
                                    <span className="logo-marquee__wordmark">{client.name}</span>
                                )}
                                <span className="logo-marquee__label">{client.name}<b aria-hidden="true">↗</b></span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Clients;
