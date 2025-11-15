import React, { useState } from 'react';
import LegalModal from './LegalModal';
import { useTranslation } from '../services/i18n';

const Footer = () => {
    const { translations } = useTranslation();
    const [modalOpen, setModalOpen] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | null }>({
        isOpen: false,
        type: null
    });

    const openModal = (type: 'privacy' | 'terms') => {
        setModalOpen({ isOpen: true, type });
    };

    const closeModal = () => {
        setModalOpen({ isOpen: false, type: null });
    };

    const quickLinks = translations.header.navLinks.filter(link => link.href !== '#contact');

    const contactIcons = {
        whatsapp: (
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
            </svg>
        )
    } as const;

    return (
        <footer className="relative scroll-mt-20 border-t border-slate-200/70 bg-transparent dark:border-slate-700/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-10 shadow-[0_25px_60px_rgba(15,23,42,0.15)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-[0_35px_70px_rgba(2,6,23,0.5)] dark:backdrop-blur-3xl transition-all duration-500">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-6 xl:col-span-1">
                            <img
                                src="/images/nodai-negro.png"
                                alt="NODAI logo light"
                                className="block h-8 w-auto dark:hidden"
                            />
                            <img
                                src="/images/nodai-blanco.png"
                                alt="NODAI logo dark"
                                className="hidden h-8 w-auto dark:block"
                            />
                            <p className="text-slate-500 dark:text-slate-400 text-base">
                                {translations.footer.tagline}
                            </p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                                        {translations.footer.navigationTitle}
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {quickLinks.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                                        {translations.footer.legalTitle}
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <button
                                                onClick={() => openModal('privacy')}
                                                className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                            >
                                                {translations.footer.privacy}
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => openModal('terms')}
                                                className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                            >
                                                {translations.footer.terms}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                                        {translations.footer.contactTitle}
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {translations.contactDetails.map((detail) => (
                                            <li key={detail.type}>
                                        <a
                                            href={detail.href}
                                            className={`inline-flex items-center text-base ${detail.type === 'whatsapp' ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
                                            target={detail.type === 'whatsapp' ? '_blank' : undefined}
                                            rel={detail.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                                        >
                                            {detail.type === 'whatsapp' && contactIcons.whatsapp}
                                            <span className="font-medium">
                                                {detail.type === 'whatsapp' ? detail.value : `${detail.label}: ${detail.value}`}
                                            </span>
                                        </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-slate-200/60 pt-8 text-center">
                        <p className="text-base text-slate-400 dark:text-slate-500">&copy; {new Date().getFullYear()} NODAI. {translations.footer.copyright}</p>
                    </div>
                </div>
            </div>

            <LegalModal
                isOpen={modalOpen.isOpen}
                onClose={closeModal}
                type={modalOpen.type || 'privacy'}
            />
        </footer>
    );
};

export default Footer;
