
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Quiénes somos</h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                            Somos Ingenieros en Sistemas especializados en Inteligencia Artificial, apasionados por transformar desafíos en oportunidades de crecimiento.
                        </p>
                        <p className="mt-6 text-slate-600 dark:text-slate-300 leading-7">
                            En Nodai, no solo construimos software; creamos alianzas estratégicas. Nos sumergimos en la visión de nuestros clientes para desarrollar soluciones personalizadas que no solo cumplen, sino que superan las expectativas. Brindamos nuestros servicios para crear soluciones de valor que aprovechan el poder de la Inteligencia Artificial.
                        </p>
                        <h3 className="mt-8 text-xl font-bold text-slate-800 dark:text-slate-100">
                            Combinamos estrategia, diseño y desarrollo para llevar tu negocio al siguiente nivel.
                        </h3>
                    </div>
                    <div className="mt-10 lg:mt-0" aria-hidden="true">
                        <img
                            className="rounded-lg shadow-xl dark:opacity-80"
                            src="https://picsum.photos/600/400?grayscale&random=1"
                            alt="Equipo de Nodai trabajando"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
