
import React, { useState } from 'react';
import NodaiLogo from './NodaiLogo';
import LegalModal from './LegalModal';

const Footer = () => {
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

    const quickLinks = [
        { name: 'Servicios', href: '#services' },
        { name: 'Quiénes somos', href: '#about' },
        { name: 'Clientes', href: '#clients' },
    ];

    const socialLinks = [
        // Placeholder social links
        { name: 'LinkedIn', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg> },
        { name: 'Twitter', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.623 1.943 2.41 3.282 4.54 3.32-.975.76-2.21 1.21-3.56 1.21-.23 0-.46-.01-.68-.04 1.25 1.03 2.89 1.62 4.67 1.62 5.59 0 8.64-4.79 8.64-8.84 0-.13 0-.26-.01-.39.59-.42 1.1-1.02 1.5-1.7z" /></svg> },
    ];

    return (
        <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <NodaiLogo className="h-8 text-slate-900 dark:text-white" />
                        <p className="text-slate-500 dark:text-slate-400 text-base">
                            Impulsando la innovación digital.
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400">
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Navegación</h3>
                                <ul className="mt-4 space-y-4">
                                    {quickLinks.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <button 
                                            onClick={() => openModal('privacy')}
                                            className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                        >
                                            Privacidad
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => openModal('terms')}
                                            className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                        >
                                            Términos
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                         <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Contacto</h3>
                                <ul className="mt-4 space-y-4">
                                   <li><a href="mailto:trivelopers@gmail.com" className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">trivelopers@gmail.com</a></li>
                                   <li><a href="tel:+5492916452157" className="text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">+54 9 291 645-2157</a></li>
                                   <li>
                                       <a 
                                           href="https://wa.me/5492916452157" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           className="inline-flex items-center text-base text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                                       >
                                           <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
                                           </svg>
                                           WhatsApp
                                       </a>
                                   </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
                    <p className="text-base text-slate-400 dark:text-slate-500 xl:text-center">&copy; {new Date().getFullYear()} Nodai. Todos los derechos reservados.</p>
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
