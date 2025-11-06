
import React from 'react';

interface Client {
    name: string;
    description: string;
    industry: string;
    logo?: string;
    website?: string;
}

const CodemLogo = () => (
    <div className="w-full h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex flex-col items-center justify-center px-4">
        <div className="text-white font-bold text-2xl tracking-wider">COEM</div>
        <div className="text-white text-xs mt-1 opacity-90 text-center leading-tight">
            Consultorios de Especialidades Médicas
        </div>
    </div>
);

const ClientCard: React.FC<{ client: Client }> = ({ client }) => (
    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700">
        <div className="flex items-center justify-center h-16 mb-6">
            {client.name === "COEM" ? (
                <CodemLogo />
            ) : client.logo ? (
                <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain"
                />
            ) : (
                <div className="w-full h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                        {client.name.split(' ').map(word => word[0]).join('').substring(0, 3)}
                    </span>
                </div>
            )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center">
            {client.name}
        </h3>
        <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-3 text-center">
            {client.industry}
        </p>
        <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
            {client.description}
        </p>
        {client.website && (
            <div className="mt-4 text-center">
                <a 
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-sm font-medium transition-colors"
                >
                    Visitar sitio web →
                </a>
            </div>
        )}
    </div>
);

const Clients = () => {
    const clients: Client[] = [
        {
            name: "SyS Inmobiliaria",
            industry: "Sector Inmobiliario",
            description: "Inmobiliaria con más de 27 años de trayectoria en el mercado, especializada en propiedades rurales y urbanas en la región de Buenos Aires. Brindamos soluciones tecnológicas para optimizar la gestión de propiedades y mejorar la experiencia del cliente.",
            logo: "https://static.tokkobroker.com/tfw_images/12347_S%26S%20Inmobiliaria/Logo_azul_sin_fondo.png",
            website: "https://www.sysinmobiliaria.com.ar"
        },
        {
            name: "COEM",
            industry: "Sector Salud",
            description: "Consultorios de Especialidades Médicas ubicado en Coronel Suárez, Buenos Aires. Desarrollamos sistemas de gestión médica y soluciones digitales para mejorar la atención al paciente y optimizar los procesos administrativos.",
            website: "https://www.coem.ar"
        }
    ];

    return (
        <section id="clients" className="bg-white dark:bg-slate-900 py-20 sm:py-28 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                        Clientes y empresas que confían en nosotros
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                        Construimos relaciones duraderas basadas en resultados y confianza mutua, 
                        desarrollando soluciones personalizadas para cada sector.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {clients.map((client, index) => (
                        <ClientCard key={index} client={client} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-teal-50 dark:bg-teal-900/20 rounded-full">
                        <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-teal-700 dark:text-teal-300 font-medium">
                            ¿Tu empresa podría ser la siguiente?
                        </span>
                    </div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Contáctanos para descubrir cómo podemos impulsar tu negocio con tecnología e IA
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Clients;
