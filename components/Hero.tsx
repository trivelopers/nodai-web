
import React from 'react';

const Hero = () => {
    return (
        <section className="relative py-24 sm:py-32 lg:py-40 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                    Impulsamos tu negocio con inteligencia artificial.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    Desarrollamos soluciones digitales que automatizan, integran y escalan tu empresa.
                </p>
                <div className="mt-10">
                    <a
                        href="#contact"
                        className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-teal-700 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                        Agendá una demo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
