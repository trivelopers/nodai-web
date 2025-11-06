import React from 'react';

const Privacy = () => {
    return (
        <div className="bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                        Política de Privacidad
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        Última actualización: {new Date().toLocaleDateString('es-AR')}
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Información que Recopilamos</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            En Nodai recopilamos información que usted nos proporciona directamente cuando:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Se comunica con nosotros a través de nuestro formulario de contacto</li>
                            <li>Nos envía un correo electrónico a trivelopers@gmail.com</li>
                            <li>Se comunica con nosotros por WhatsApp</li>
                            <li>Utiliza nuestros servicios de consultoría en IA y desarrollo</li>
                        </ul>
                        <p className="text-slate-600 dark:text-slate-300 mt-4">
                            Esta información puede incluir: nombre, dirección de correo electrónico, número de teléfono, 
                            nombre de la empresa, y cualquier otra información que decida compartir con nosotros.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Cómo Utilizamos su Información</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Utilizamos la información recopilada para:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Responder a sus consultas y comunicarnos con usted</li>
                            <li>Proporcionar nuestros servicios de desarrollo y consultoría en IA</li>
                            <li>Mejorar nuestros servicios y experiencia del usuario</li>
                            <li>Enviar información relevante sobre nuestros servicios (solo si lo autoriza)</li>
                            <li>Cumplir con obligaciones legales</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Protección de Datos</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                            su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300">
                            No vendemos, alquilamos ni compartimos su información personal con terceros, 
                            excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Cookies y Tecnologías Similares</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Nuestro sitio web puede utilizar cookies y tecnologías similares para:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Mejorar la funcionalidad del sitio web</li>
                            <li>Recordar sus preferencias (como el tema oscuro/claro)</li>
                            <li>Analizar el uso del sitio web para mejorarlo</li>
                        </ul>
                        <p className="text-slate-600 dark:text-slate-300 mt-4">
                            Puede configurar su navegador para rechazar cookies, aunque esto puede afectar 
                            la funcionalidad de nuestro sitio web.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Sus Derechos</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Usted tiene derecho a:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Acceder a la información personal que tenemos sobre usted</li>
                            <li>Solicitar la corrección de información inexacta</li>
                            <li>Solicitar la eliminación de su información personal</li>
                            <li>Oponerse al procesamiento de su información personal</li>
                            <li>Solicitar la portabilidad de sus datos</li>
                        </ul>
                        <p className="text-slate-600 dark:text-slate-300 mt-4">
                            Para ejercer estos derechos, contáctenos en trivelopers@gmail.com
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Retención de Datos</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Conservaremos su información personal solo durante el tiempo necesario para cumplir 
                            con los propósitos para los cuales fue recopilada, incluidos los requisitos legales, 
                            contables o de informes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Transferencias Internacionales</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Como empresa argentina, procesamos los datos principalmente en Argentina. 
                            Si necesitamos transferir datos fuera del país, lo haremos de acuerdo con 
                            las leyes de protección de datos aplicables.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Cambios a esta Política</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Podemos actualizar esta Política de Privacidad ocasionalmente. 
                            Le notificaremos sobre cualquier cambio publicando la nueva política en esta página 
                            y actualizando la fecha de "última actualización".
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Contacto</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                            <p className="text-slate-600 dark:text-slate-300"><strong>Email:</strong> trivelopers@gmail.com</p>
                            <p className="text-slate-600 dark:text-slate-300"><strong>Teléfono:</strong> +54 9 291 645-2157</p>
                            <p className="text-slate-600 dark:text-slate-300"><strong>WhatsApp:</strong> <a href="https://wa.me/5492916452157" className="text-green-600 hover:text-green-700">+54 9 291 645-2157</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
