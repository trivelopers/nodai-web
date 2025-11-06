import React from 'react';

const Terms = () => {
    return (
        <div className="bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                        Términos y Condiciones
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        Última actualización: {new Date().toLocaleDateString('es-AR')}
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Aceptación de los Términos</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Al acceder y utilizar el sitio web de Nodai y nuestros servicios, usted acepta estar sujeto 
                            a estos Términos y Condiciones. Si no está de acuerdo con algún aspecto de estos términos, 
                            no debe utilizar nuestros servicios.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Descripción de los Servicios</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Nodai es una empresa de tecnología formada por 2 ingenieros en sistemas especializados 
                            en Inteligencia Artificial. Ofrecemos los siguientes servicios:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Desarrollo de aplicaciones web y móviles</li>
                            <li>Implementación de soluciones de Inteligencia Artificial</li>
                            <li>Automatización de procesos empresariales</li>
                            <li>Consultoría en transformación digital</li>
                            <li>Desarrollo de chatbots y asistentes virtuales</li>
                            <li>Análisis de datos y machine learning</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Uso del Sitio Web</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Al utilizar nuestro sitio web, usted se compromete a:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Proporcionar información veraz y actualizada</li>
                            <li>No utilizar el sitio para fines ilegales o no autorizados</li>
                            <li>No intentar acceder a áreas restringidas del sitio</li>
                            <li>No transmitir virus, malware o código malicioso</li>
                            <li>Respetar los derechos de propiedad intelectual</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Servicios de Consultoría y Desarrollo</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Para nuestros servicios de consultoría y desarrollo:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Los términos específicos se establecerán en contratos individuales</li>
                            <li>Los plazos de entrega se acordarán por proyecto</li>
                            <li>Los pagos se procesarán según lo acordado en cada contrato</li>
                            <li>Mantenemos la confidencialidad de la información del cliente</li>
                            <li>Proporcionamos soporte técnico según lo acordado</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Propiedad Intelectual</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Los derechos de propiedad intelectual se manejan de la siguiente manera:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>El contenido de nuestro sitio web es propiedad de Nodai</li>
                            <li>Los desarrollos personalizados para clientes pertenecen al cliente</li>
                            <li>Conservamos los derechos sobre metodologías y herramientas propias</li>
                            <li>Respetamos la propiedad intelectual de terceros</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Confidencialidad</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Nos comprometemos a mantener la confidencialidad de toda la información sensible 
                            que nos comparta durante nuestras consultas y proyectos. Esta obligación de 
                            confidencialidad permanece vigente incluso después de la finalización de nuestros servicios.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Limitación de Responsabilidad</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            En la máxima medida permitida por la ley:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>No garantizamos que nuestro sitio web esté libre de errores o interrupciones</li>
                            <li>No seremos responsables por daños indirectos, incidentales o consecuentes</li>
                            <li>Nuestra responsabilidad se limita al monto pagado por nuestros servicios</li>
                            <li>Recomendamos realizar copias de seguridad de datos importantes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Cancelación y Reembolsos</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Para cancelaciones y reembolsos:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Las cancelaciones deben comunicarse por escrito</li>
                            <li>Los reembolsos se evaluarán caso por caso</li>
                            <li>El trabajo ya realizado puede ser facturado</li>
                            <li>Los términos específicos se establecen en cada contrato</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Ley Aplicable</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Estos términos se rigen por las leyes de la República Argentina. 
                            Cualquier disputa se resolverá en los tribunales competentes de Argentina.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Modificaciones</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                            Las modificaciones entrarán en vigor inmediatamente después de su publicación 
                            en nuestro sitio web. Es su responsabilidad revisar estos términos periódicamente.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Contacto</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Para consultas sobre estos términos y condiciones, puede contactarnos:
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                            <p className="text-slate-600 dark:text-slate-300"><strong>Email:</strong> trivelopers@gmail.com</p>
                            <p className="text-slate-600 dark:text-slate-300"><strong>Teléfono:</strong> +54 9 291 645-2157</p>
                            <p className="text-slate-600 dark:text-slate-300"><strong>WhatsApp:</strong> <a href="https://wa.me/5492916452157" className="text-green-600 hover:text-green-700">+54 9 291 645-2157</a></p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Separabilidad</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Si alguna disposición de estos términos se considera inválida o inaplicable, 
                            las disposiciones restantes continuarán en pleno vigor y efecto.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
