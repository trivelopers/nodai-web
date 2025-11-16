import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

const translationData = {
    es: {
        header: {
            navLinks: [
                { name: 'Servicios', href: '#services' },
                { name: 'Quiénes somos', href: '#about' },
                /*{ name: 'Clientes', href: '#clients' },*/
                { name: 'Contacto', href: '#contact' }
            ],
            themeToggleAria: 'Cambiar entre modo claro y oscuro',
            languageToggleAria: 'Cambiar idioma',
            languageLabels: { es: 'ES', en: 'EN' },
            askNodai: 'Consultar a NODAI',
        },
        hero: {
            title: 'Impulsamos tu negocio con inteligencia.',
            description: 'Desarrollamos soluciones que conectan tu empresa con el mundo.',
            cta: 'Agendá una demo',
        },
        services: {
            title: 'Nuestras soluciones',
            description: 'Tecnología de punta para resolver los desafíos de hoy.',
            items: [
                {
                    name: 'Inteligencia Artificial',
                    description: 'Analizamos tus datos para descubrir oportunidades y optimizar decisiones con modelos de IA a medida.',
                },
                {
                    name: 'Automatizaciones de procesos',
                    description: 'Liberá a tu equipo de tareas repetitivas. Diseñamos flujos de trabajo inteligentes que aumentan la eficiencia.',
                },
                {
                    name: 'Software a medida',
                    description: 'Creamos las herramientas que tu negocio necesita. Soluciones robustas, escalables y perfectamente integradas.',
                },
                {
                    name: 'Turnero para profesionales médicos',
                    description: 'Desarrollamos sistemas de gestión de turnos médicos que permiten a los pacientes reservar online y a los profesionales administrar sus agendas con facilidad.',
                },
                {
                    name: 'Asistentes virtuales con IA conectados a WhatsApp',
                    description: 'Creamos asistentes conversacionales inteligentes que automatizan atención al cliente, reservas y consultas, totalmente integrados con la API oficial de WhatsApp.',
                    },
                    {
        name: 'Gestión comercial y catálogo online',
        description: 'Construimos plataformas integrales de ventas y stock que permiten administrar productos, pedidos y envíos, con catálogos públicos y automatización de procesos entre múltiples empresas.',
    }
            ],
        },
        about: {
            title: 'Quiénes somos',
            paragraphs: [
                'Somos Ingenieros en Sistemas de Información especializados en Inteligencia Artificial, apasionados por transformar desafíos en oportunidades de crecimiento.',
                'En NODAI, no solo construimos software; creamos alianzas estratégicas. Nos sumergimos en la visión de nuestros clientes para desarrollar soluciones personalizadas que no solo cumplen, sino que superan las expectativas. Brindamos nuestros servicios para crear soluciones de valor que aprovechan el poder de la Inteligencia Artificial.'
            ],
            highlight: 'Combinamos estrategia, diseño y desarrollo para llevar tu negocio al siguiente nivel.',
            imageAlt: 'Equipo de NODAI trabajando',
        },
        benefits: {
            tag: 'Impacto',
            heading: 'Un socio tecnológico para tu crecimiento',
            description: 'Más allá del código, generamos resultados medibles para tu empresa.',
            items: [
                {
                    name: 'Ahorro de tiempo',
                    description: 'Automatizamos procesos repetitivos para que tu equipo se concentre en otras tareas.',
                },
                {
                    name: 'Reducción de errores',
                    description: 'Nuestros sistemas minimizan el error humano, garantizando precisión y consistencia.',
                },
                {
                    name: 'Escalabilidad garantizada',
                    description: 'Construimos soluciones flexibles que crecen al mismo ritmo que tu negocio.',
                },
                {
                    name: 'Soporte personalizado',
                    description: 'Te acompañamos en cada paso, ofreciendo soporte y asesoramiento continuo.',
                },
            ],
        },
        clients: {
            title: 'Clientes y empresas que confían en nosotros',
            description: [
                'Construimos relaciones duraderas basadas en resultados y confianza mutua,',
                'desarrollando soluciones personalizadas para cada sector.'
            ],
            items: [
                {
                    name: 'SyS Inmobiliaria',
                    industry: 'Sector Inmobiliario',
                    description: 'Inmobiliaria con más de 27 años de trayectoria en el mercado, especializada en propiedades rurales y urbanas en la región de Buenos Aires. Brindamos soluciones tecnológicas para optimizar la gestión de propiedades y mejorar la experiencia del cliente.',
                    logo: 'https://static.tokkobroker.com/tfw_images/12347_S%26S%20Inmobiliaria/Logo_azul_sin_fondo.png',
                    website: 'https://www.sysinmobiliaria.com.ar'
                },
                {
                    name: 'COEM',
                    industry: 'Sector Salud',
                    description: 'Consultorios de Especialidades Médicas ubicado en Coronel Suárez, Buenos Aires. Desarrollamos sistemas de gestión médica y soluciones digitales para mejorar la atención al paciente y optimizar los procesos administrativos.',
                    website: 'https://www.coem.ar'
                },
                {
                    name: 'Fragma Bahía',
                    industry: 'Tecnología',
                    description: 'Empresa de tecnología con 5 años en el rubro, especializada en la venta de cables, adaptadores y artículos electrónicos de uso general. Brindamos soluciones tecnológicas para optimizar sus operaciones comerciales y mejorar la experiencia del cliente.',
                    logo: '/images/fragma-logo.jpg',
                    website: 'https://fragma.com.ar'
                }
            ],
            visitWebsite: 'Visitar sitio web →',
            badge: '¿Tu empresa podría ser la siguiente?',
            callToAction: 'Contáctanos para descubrir cómo podemos impulsar tu negocio con tecnología e IA',
        },
        cta: {
            heading: '¿Listo para transformar tu negocio?',
            description: 'Hablemos de cómo podemos ayudarte a alcanzar tus objetivos. La primera consulta es sin cargo.',
            buttons: {
                email: 'Mandanos un mail',
                whatsapp: 'Chateá por WhatsApp',
            },
        },
        contactForm: {
            title: 'Contactanos',
            description: 'Comentanos sobre tu proyecto y te ayudemos a hacerlo realidad',
            fields: {
                name: { label: 'Nombre *', placeholder: 'Tu nombre' },
                email: { label: 'Email *', placeholder: 'tu@email.com' },
                phone: { label: 'Teléfono', placeholder: '+54 9 291 645-2157' },
                company: { label: 'Empresa', placeholder: 'Tu empresa' },
                message: { label: 'Mensaje *', placeholder: 'Comentanos sobre tu proyecto o consulta...' },
            },
            submit: {
                idle: 'Enviar mensaje',
                loading: 'Enviando...'
            },
            success: '¡Mensaje enviado! Te responderemos pronto.',
            error: 'Error al enviar el mensaje. Por favor, intenta de nuevo.',
            directContactQuestion: '¿Prefieres contactarnos directamente?',
            directContactButtons: {
                email: 'Mandanos un mail',
                whatsapp: 'Chateá por WhatsApp',
            },
            emailSubjectPrefix: 'Consulta de',
            emailLabels: {
                name: 'Nombre',
                email: 'Email',
                phone: 'Teléfono',
                company: 'Empresa',
                message: 'Mensaje',
            },
        },
        footer: {
            tagline: 'Impulsamos tu negocio con inteligencia.',
            navigationTitle: 'Navegación',
            legalTitle: 'Legal',
            privacy: 'Privacidad',
            terms: 'Términos',
            contactTitle: 'Contacto',
            copyright: 'Todos los derechos reservados.',
        },
        legalModal: {
            privacyTitle: 'Política de Privacidad',
            termsTitle: 'Términos y Condiciones',
            closeAria: 'Cerrar',
        },
        privacy: {
            title: 'Política de Privacidad',
            lastUpdatedLabel: 'Última actualización',
            sections: [
                {
                    title: '1. Información que Recopilamos',
                    paragraphs: [
                        'En NODAI recopilamos información que usted nos proporciona directamente cuando:'
                    ],
                    list: [
                        'Se comunica con nosotros a través de nuestro formulario de contacto',
                        'Nos envía un correo electrónico a trivelopers@gmail.com',
                        'Se comunica con nosotros por WhatsApp',
                        'Utiliza nuestros servicios de consultoría en IA y desarrollo'
                    ],
                    closing: 'Esta información puede incluir: nombre, dirección de correo electrónico, número de teléfono, nombre de la empresa, y cualquier otra información que decida compartir con nosotros.'
                },
                {
                    title: '2. Cómo Utilizamos su Información',
                    paragraphs: ['Utilizamos la información recopilada para:'],
                    list: [
                        'Responder a sus consultas y comunicarnos con usted',
                        'Proporcionar nuestros servicios de desarrollo y consultoría en IA',
                        'Mejorar nuestros servicios y experiencia del usuario',
                        'Enviar información relevante sobre nuestros servicios (solo si lo autoriza)',
                        'Cumplir con obligaciones legales'
                    ],
                },
                {
                    title: '3. Protección de Datos',
                    paragraphs: [
                        'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.',
                        'No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.'
                    ],
                },
                {
                    title: '4. Cookies y Tecnologías Similares',
                    paragraphs: ['Nuestro sitio web puede utilizar cookies y tecnologías similares para:'],
                    list: [
                        'Mejorar la funcionalidad del sitio web',
                        'Recordar sus preferencias (como el tema oscuro/claro)',
                        'Analizar el uso del sitio web para mejorarlo'
                    ],
                    closing: 'Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad de nuestro sitio web.'
                },
                {
                    title: '5. Sus Derechos',
                    paragraphs: ['Usted tiene derecho a:'],
                    list: [
                        'Acceder a la información personal que tenemos sobre usted',
                        'Solicitar la corrección de información inexacta',
                        'Solicitar la eliminación de su información personal',
                        'Oponerse al procesamiento de su información personal',
                        'Solicitar la portabilidad de sus datos'
                    ],
                    closing: 'Para ejercer estos derechos, contáctenos en trivelopers@gmail.com'
                },
                {
                    title: '6. Retención de Datos',
                    paragraphs: ['Conservaremos su información personal solo durante el tiempo necesario para cumplir con los propósitos para los cuales fue recopilada, incluidos los requisitos legales, contables o de informes.'],
                },
                {
                    title: '7. Transferencias Internacionales',
                    paragraphs: ['Como empresa argentina, procesamos los datos principalmente en Argentina. Si necesitamos transferir datos fuera del país, lo haremos de acuerdo con las leyes de protección de datos aplicables.'],
                },
                {
                    title: '8. Cambios a esta Política',
                    paragraphs: ['Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cualquier cambio publicando la nueva política en esta página y actualizando la fecha de "última actualización".'],
                },
                {
                    title: '9. Contacto',
                    paragraphs: ['Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:'],
                    includeContactDetails: true,
                },
            ],
        },
        terms: {
            title: 'Términos y Condiciones',
            lastUpdatedLabel: 'Última actualización',
            sections: [
                {
                    title: '1. Aceptación de los Términos',
                    paragraphs: [
                        'Al acceder y utilizar el sitio web de NODAI y nuestros servicios, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con algún aspecto de estos términos, no debe utilizar nuestros servicios.'
                    ],
                },
                {
                    title: '2. Descripción de los Servicios',
                    paragraphs: [
                        'NODAI es una empresa de tecnología formada por 2 ingenieros en sistemas especializados en Inteligencia Artificial. Ofrecemos los siguientes servicios:'
                    ],
                    list: [
                        'Desarrollo de aplicaciones web y móviles',
                        'Implementación de soluciones de Inteligencia Artificial',
                        'Automatización de procesos empresariales',
                        'Consultoría en transformación digital',
                        'Desarrollo de chatbots y asistentes virtuales',
                        'Análisis de datos y machine learning'
                    ],
                },
                {
                    title: '3. Uso del Sitio Web',
                    paragraphs: ['Al utilizar nuestro sitio web, usted se compromete a:'],
                    list: [
                        'Proporcionar información veraz y actualizada',
                        'No utilizar el sitio para fines ilegales o no autorizados',
                        'No intentar acceder a áreas restringidas del sitio',
                        'No transmitir virus, malware o código malicioso',
                        'Respetar los derechos de propiedad intelectual'
                    ],
                },
                {
                    title: '4. Servicios de Consultoría y Desarrollo',
                    paragraphs: ['Para nuestros servicios de consultoría y desarrollo:'],
                    list: [
                        'Los términos específicos se establecerán en contratos individuales',
                        'Los plazos de entrega se acordarán por proyecto',
                        'Los pagos se procesarán según lo acordado en cada contrato',
                        'Mantenemos la confidencialidad de la información del cliente',
                        'Proporcionamos soporte técnico según lo acordado'
                    ],
                },
                {
                    title: '5. Propiedad Intelectual',
                    paragraphs: ['Los derechos de propiedad intelectual se manejan de la siguiente manera:'],
                    list: [
                        'El contenido de nuestro sitio web es propiedad de NODAI',
                        'Los desarrollos personalizados para clientes pertenecen al cliente',
                        'Conservamos los derechos sobre metodologías y herramientas propias',
                        'Respetamos la propiedad intelectual de terceros'
                    ],
                },
                {
                    title: '6. Confidencialidad',
                    paragraphs: [
                        'Nos comprometemos a mantener la confidencialidad de toda la información sensible que nos comparta durante nuestras consultas y proyectos. Esta obligación de confidencialidad permanece vigente incluso después de la finalización de nuestros servicios.'
                    ],
                },
                {
                    title: '7. Limitación de Responsabilidad',
                    paragraphs: ['En la máxima medida permitida por la ley:'],
                    list: [
                        'No garantizamos que nuestro sitio web esté libre de errores o interrupciones',
                        'No seremos responsables por daños indirectos, incidentales o consecuentes',
                        'Nuestra responsabilidad se limita al monto pagado por nuestros servicios',
                        'Recomendamos realizar copias de seguridad de datos importantes'
                    ],
                },
                {
                    title: '8. Cancelación y Reembolsos',
                    paragraphs: ['Para cancelaciones y reembolsos:'],
                    list: [
                        'Las cancelaciones deben comunicarse por escrito',
                        'Los reembolsos se evaluarán caso por caso',
                        'El trabajo ya realizado puede ser facturado',
                        'Los términos específicos se establecen en cada contrato'
                    ],
                },
                {
                    title: '9. Ley Aplicable',
                    paragraphs: [
                        'Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se resolverá en los tribunales competentes de Argentina.'
                    ],
                },
                {
                    title: '10. Modificaciones',
                    paragraphs: [
                        'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es su responsabilidad revisar estos términos periódicamente.'
                    ],
                },
                {
                    title: '11. Contacto',
                    paragraphs: ['Para consultas sobre estos términos y condiciones, puede contactarnos:'],
                    includeContactDetails: true,
                },
                {
                    title: '12. Separabilidad',
                    paragraphs: [
                        'Si alguna disposición de estos términos se considera inválida o inaplicable, las disposiciones restantes continuarán en pleno vigor y efecto.'
                    ],
                },
            ],
        },
        thinkingMode: {
            title: 'Consultar a NODAI (Thinking Mode)',
            description: 'Describe un desafío o meta empresarial compleja. Nuestra IA lo analizará y sugerirá cómo las soluciones de NODAI pueden ayudarte. Impulsado por Gemini 2.5 Pro con un presupuesto de razonamiento extendido para análisis profundo.',
            placeholder: `Ej: "Somos una empresa de logística con 50 camiones y queremos optimizar nuestras rutas de entrega para reducir costos de combustible y tiempos de espera..."`,
            buttonIdle: 'Obtener Análisis',
            buttonLoading: 'Analizando...',
            responseTitle: 'Análisis de NODAI AI:',
            genericError: 'Ocurrió un error inesperado. Intenta nuevamente más tarde.',
        },
        contactDetails: [
            { label: 'WhatsApp', value: '+54 9 291 645-2157', href: 'https://wa.me/5492916452157', type: 'whatsapp' as const },
        ],
    },
    en: {
        header: {
            navLinks: [
                { name: 'Services', href: '#services' },
                { name: 'About', href: '#about' },
                { name: 'Clients', href: '#clients' },
                { name: 'Contact', href: '#contact' }
            ],
            themeToggleAria: 'Toggle between light and dark mode',
            languageToggleAria: 'Switch language',
            languageLabels: { es: 'ES', en: 'EN' },
            askNodai: 'Ask NODAI',
        },
        hero: {
            title: 'We boost your business with intelligence.',
            description: 'We develop solutions that connect your business with the world.',
            cta: 'Book a demo',
        },
        services: {
            title: 'Our Solutions',
            description: 'Cutting-edge technology to solve today’s challenges.',
            items: [
                {
                    name: 'Artificial Intelligence',
                    description: 'We analyze your data to uncover opportunities and optimize decisions with tailor-made AI models.',
                },
                {
                    name: 'Process Automation',
                    description: 'Free your team from repetitive tasks. We design smart workflows that boost efficiency.',
                },
                {
                    name: 'Custom Software',
                    description: 'We build the tools your business needs. Robust, scalable, and perfectly integrated solutions.',
                },
                {
    name: 'Medical Appointment Scheduling System',
    description: 'We build online scheduling platforms for healthcare professionals, enabling patients to book appointments and manage their visits easily.',
},
{
    name: 'AI-powered Virtual Assistants for WhatsApp',
    description: 'We design intelligent conversational assistants that automate customer service, bookings, and queries, fully integrated with the official WhatsApp API.',
},
{
    name: 'Business Management and Online Catalog',
    description: 'We develop integrated platforms for inventory, sales, and logistics, enabling businesses to manage products, orders, and deliveries with public catalogs and multi-company automation.',
},

            ],
        },
        about: {
            title: 'Who we are',
            paragraphs: [
                'We are Systems Engineers specialized in Artificial Intelligence, passionate about turning challenges into growth opportunities.',
                'At NODAI, we do more than build software; we create strategic partnerships. We dive into our clients’ vision to deliver tailored solutions that not only meet expectations but exceed them. We deliver services that harness the power of Artificial Intelligence to create real value.'
            ],
            highlight: 'We blend strategy, design, and development to take your business to the next level.',
            imageAlt: 'NODAI team working together',
        },
        benefits: {
            tag: 'Impact',
            heading: 'A technology partner for your growth',
            description: 'Beyond code, we generate measurable results for your company.',
            items: [
                {
                    name: 'Time Savings',
                    description: 'We automate tasks so your team can focus on what truly matters.',
                },
                {
                    name: 'Fewer Errors',
                    description: 'Our systems minimize human error, ensuring accuracy and consistency.',
                },
                {
                    name: 'Built-in Scalability',
                    description: 'We design flexible solutions that grow alongside your business.',
                },
                {
                    name: 'Personalized Support',
                    description: 'We guide you at every step with ongoing support and expert advice.',
                },
            ],
        },
        clients: {
            title: 'Clients and companies that trust us',
            description: [
                'We build long-term relationships based on results and mutual trust,',
                'designing tailored solutions for every industry.'
            ],
            items: [
                {
                    name: 'SyS Inmobiliaria',
                    industry: 'Real Estate',
                    description: 'A real estate agency with more than 27 years in the market, specializing in rural and urban properties across Buenos Aires. We delivered technology solutions to optimize property management and enhance customer experience.',
                    logo: 'https://static.tokkobroker.com/tfw_images/12347_S%26S%20Inmobiliaria/Logo_azul_sin_fondo.png',
                    website: 'https://www.sysinmobiliaria.com.ar'
                },
                {
                    name: 'COEM',
                    industry: 'Healthcare',
                    description: 'A multi-specialty medical clinic located in Coronel Suárez, Buenos Aires. We developed management systems and digital solutions to improve patient care and streamline administrative processes.',
                    website: 'https://www.coem.ar'
                },
                {
                    name: 'Fragma Bahía',
                    industry: 'Technology',
                    description: 'A technology company with 5 years in the industry, specialized in selling cables, adapters, and general-use electronic items. We provide technological solutions to optimize their commercial operations and improve customer experience.',
                    logo: '/images/fragma-logo.jpg',
                    website: 'https://fragma.com.ar'
                }
            ],
            visitWebsite: 'Visit website →',
            badge: 'Could your company be next?',
            callToAction: 'Contact us to discover how we can power your business with technology and AI',
        },
        cta: {
            heading: 'Ready to transform your business?',
            description: 'Let’s talk about how we can help you reach your goals. The first consultation is on us.',
            buttons: {
                email: 'Drop us an email',
                whatsapp: 'Chat on WhatsApp',
            },
        },
        contactForm: {
            title: 'Get in touch',
            description: 'Tell us about your project and we’ll help you bring it to life',
            fields: {
                name: { label: 'Name *', placeholder: 'Your name' },
                email: { label: 'Email *', placeholder: 'you@email.com' },
                phone: { label: 'Phone', placeholder: '+54 9 291 645-2157' },
                company: { label: 'Company', placeholder: 'Your company' },
                message: { label: 'Message *', placeholder: 'Tell us about your project or question...' },
            },
            submit: {
                idle: 'Send message',
                loading: 'Sending...'
            },
            success: 'Message sent! We’ll get back to you soon.',
            error: 'There was an error sending your message. Please try again.',
            directContactQuestion: 'Prefer to reach out directly?',
            directContactButtons: {
                email: 'Drop us an email',
                whatsapp: 'Chat on WhatsApp',
            },
            emailSubjectPrefix: 'Inquiry from',
            emailLabels: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                company: 'Company',
                message: 'Message',
            },
        },
        footer: {
            tagline: 'Driving digital innovation.',
            navigationTitle: 'Navigation',
            legalTitle: 'Legal',
            privacy: 'Privacy',
            terms: 'Terms',
            contactTitle: 'Contact',
            copyright: 'All rights reserved.',
        },
        legalModal: {
            privacyTitle: 'Privacy Policy',
            termsTitle: 'Terms & Conditions',
            closeAria: 'Close',
        },
        privacy: {
            title: 'Privacy Policy',
            lastUpdatedLabel: 'Last updated',
            sections: [
                {
                    title: '1. Information We Collect',
                    paragraphs: [
                        'At NODAI we collect information that you provide directly when you:'
                    ],
                    list: [
                        'Reach out through our contact form',
                        'Send us an email at trivelopers@gmail.com',
                        'Contact us via WhatsApp',
                        'Use our AI and development consulting services'
                    ],
                    closing: 'This information may include: name, email address, phone number, company name, and any other details you choose to share with us.'
                },
                {
                    title: '2. How We Use Your Information',
                    paragraphs: ['We use the information we collect to:'],
                    list: [
                        'Respond to your inquiries and communicate with you',
                        'Deliver our development and AI consulting services',
                        'Improve our services and user experience',
                        'Send relevant information about our services (only if you opt in)',
                        'Comply with legal obligations'
                    ],
                },
                {
                    title: '3. Data Protection',
                    paragraphs: [
                        'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
                        'We do not sell, rent, or share your personal information with third parties, except when necessary to deliver our services or when required by law.'
                    ],
                },
                {
                    title: '4. Cookies and Similar Technologies',
                    paragraphs: ['Our website may use cookies and similar technologies to:'],
                    list: [
                        'Improve the website’s functionality',
                        'Remember your preferences (such as light/dark theme)',
                        'Analyze website usage so we can enhance it'
                    ],
                    closing: 'You can set your browser to refuse cookies, although this may affect how our website works.'
                },
                {
                    title: '5. Your Rights',
                    paragraphs: ['You have the right to:'],
                    list: [
                        'Access the personal information we hold about you',
                        'Request corrections to inaccurate information',
                        'Ask us to delete your personal information',
                        'Object to the processing of your personal information',
                        'Request the portability of your data'
                    ],
                    closing: 'To exercise these rights, contact us at trivelopers@gmail.com'
                },
                {
                    title: '6. Data Retention',
                    paragraphs: ['We keep your personal information only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements.'],
                },
                {
                    title: '7. International Transfers',
                    paragraphs: ['As an Argentine company, we process data primarily in Argentina. If we need to transfer data abroad, we will do so in line with applicable data protection laws.'],
                },
                {
                    title: '8. Changes to This Policy',
                    paragraphs: ['We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the “last updated” date.'],
                },
                {
                    title: '9. Contact',
                    paragraphs: ['If you have questions about this Privacy Policy, you can contact us:'],
                    includeContactDetails: true,
                },
            ],
        },
        terms: {
            title: 'Terms & Conditions',
            lastUpdatedLabel: 'Last updated',
            sections: [
                {
                    title: '1. Acceptance of Terms',
                    paragraphs: [
                        'By accessing and using NODAI’s website and services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you should not use our services.'
                    ],
                },
                {
                    title: '2. Description of Services',
                    paragraphs: [
                        'NODAI is a technology company founded by two systems engineers specialized in Artificial Intelligence. We offer the following services:'
                    ],
                    list: [
                        'Web and mobile application development',
                        'Implementation of Artificial Intelligence solutions',
                        'Business process automation',
                        'Digital transformation consulting',
                        'Chatbot and virtual assistant development',
                        'Data analysis and machine learning'
                    ],
                },
                {
                    title: '3. Use of the Website',
                    paragraphs: ['When using our website, you agree to:'],
                    list: [
                        'Provide truthful and up-to-date information',
                        'Not use the site for illegal or unauthorized purposes',
                        'Not attempt to access restricted areas of the site',
                        'Not transmit viruses, malware, or malicious code',
                        'Respect intellectual property rights'
                    ],
                },
                {
                    title: '4. Consulting and Development Services',
                    paragraphs: ['For our consulting and development services:'],
                    list: [
                        'Specific terms will be defined in individual contracts',
                        'Delivery timelines will be agreed upon for each project',
                        'Payments will be processed as outlined in each contract',
                        'We maintain client information confidentiality',
                        'We provide technical support as agreed'
                    ],
                },
                {
                    title: '5. Intellectual Property',
                    paragraphs: ['Intellectual property rights are managed as follows:'],
                    list: [
                        'The content on our website is owned by NODAI',
                        'Custom developments for clients belong to the client',
                        'We retain rights over our own methodologies and tools',
                        'We respect third-party intellectual property'
                    ],
                },
                {
                    title: '6. Confidentiality',
                    paragraphs: [
                        'We are committed to keeping all sensitive information you share during consultations and projects confidential. This obligation remains in force even after our services end.'
                    ],
                },
                {
                    title: '7. Limitation of Liability',
                    paragraphs: ['To the fullest extent permitted by law:'],
                    list: [
                        'We do not guarantee that our website will be free from errors or interruptions',
                        'We will not be liable for indirect, incidental, or consequential damages',
                        'Our liability is limited to the amount paid for our services',
                        'We recommend keeping backups of important data'
                    ],
                },
                {
                    title: '8. Cancellation and Refunds',
                    paragraphs: ['For cancellations and refunds:'],
                    list: [
                        'Cancellations must be communicated in writing',
                        'Refunds will be evaluated on a case-by-case basis',
                        'Work already completed may be invoiced',
                        'Specific terms are defined in each contract'
                    ],
                },
                {
                    title: '9. Governing Law',
                    paragraphs: [
                        'These terms are governed by the laws of the Argentine Republic. Any dispute will be resolved in the competent courts of Argentina.'
                    ],
                },
                {
                    title: '10. Modifications',
                    paragraphs: [
                        'We reserve the right to modify these terms at any time. Changes take effect immediately upon being posted on our website. You are responsible for reviewing these terms periodically.'
                    ],
                },
                {
                    title: '11. Contact',
                    paragraphs: ['For questions about these terms and conditions, you can reach us:'],
                    includeContactDetails: true,
                },
                {
                    title: '12. Severability',
                    paragraphs: [
                        'If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.'
                    ],
                },
            ],
        },
        thinkingMode: {
            title: 'Ask NODAI (Thinking Mode)',
            description: 'Describe a complex business challenge or goal. Our AI will analyze it and suggest how NODAI’s solutions can help. Powered by Gemini 2.5 Pro with an extended thinking budget for deep analysis.',
            placeholder: `E.g. "We run a logistics company with 50 trucks and want to optimize delivery routes to cut fuel costs and waiting times..."`,
            buttonIdle: 'Get analysis',
            buttonLoading: 'Analyzing...',
            responseTitle: 'NODAI AI analysis:',
            genericError: 'An unexpected error occurred. Please try again later.',
        },
        contactDetails: [
            { label: 'WhatsApp', value: '+54 9 291 645-2157', href: 'https://wa.me/5492916452157', type: 'whatsapp' as const },
        ],
    },
} as const;

export type TranslationData = typeof translationData.es | typeof translationData.en;

interface TranslationContextValue {
    language: Language;
    setLanguage: (language: Language) => void;
    translations: TranslationData;
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'nodai-language';

const detectBrowserLanguage = (): Language => {
    if (typeof navigator === 'undefined') {
        return 'es';
    }

    const browserLanguage = navigator.language || (Array.isArray(navigator.languages) ? navigator.languages[0] : undefined);
    if (browserLanguage && browserLanguage.toLowerCase().startsWith('en')) {
        return 'en';
    }

    return 'es';
};

export const formatDateForLanguage = (language: Language) => {
    const locale = language === 'en' ? 'en-US' : 'es-AR';
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === 'undefined') {
            return 'es';
        }

        const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (stored === 'es' || stored === 'en') {
            return stored;
        }

        return detectBrowserLanguage();
    });

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        document.documentElement.setAttribute('lang', language === 'en' ? 'en' : 'es');
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            translations: translationData[language],
        }),
        [language]
    );

    return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }

    return context;
};
