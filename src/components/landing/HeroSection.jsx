import { motion } from "framer-motion";
import { ArrowDown, Shield, Clock, Award } from "lucide-react";

export default function HeroSection({ heroImage }) {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Perforaciones industriales en hormigón"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-steel/95 via-steel/80 to-steel/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-steel via-transparent to-steel/30" />
            </div>

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[2px] bg-oxide" />
                            <span className="font-heading text-oxide-light text-sm font-bold tracking-[0.3em] uppercase">
                                Precisión Industrial
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-heading font-black text-oxide-light text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight uppercase mb-6"
                    >
                        RG
                        <br />
                        <span className="text-white ">Perforaciones</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-body text-concrete-dark/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
                    >
                        {/* Especialistas en perforación, corte y demolición controlada de hormigón. Más de 20 años
                        transformando estructuras con precisión quirúrgica. */}
                        Especialistas en perforación y corte de hormigón.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center bg-oxide hover:bg-oxide-light text-white font-heading text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-oxide/30"
                        >
                            Solicitar Cotización
                        </a>
                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:border-white/50 font-heading text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300"
                        >
                            Ver Servicios
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-8 sm:gap-12"
                    >
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-oxide-light" />
                            <div>
                                <p className="font-heading font-black text-white text-2xl">20+</p>
                                <p className="font-body text-concrete-dark/50 text-sm">Años de Experiencia</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="w-5 h-5 text-oxide-light" />
                            <div>
                                <p className="font-heading font-black text-white text-2xl">200+</p>
                                <p className="font-body text-concrete-dark/50 text-sm">Proyectos Completados</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-oxide-light" />
                            <div>
                                <p className="font-heading font-black text-white text-2xl">100%</p>
                                <p className="font-body text-concrete-dark/50 text-sm">Seguridad Garantizada</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <a
                    href="#servicios"
                    className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
                >
                    <span className="font-heading text-xs tracking-widest uppercase">Explorar</span>
                    <ArrowDown className="w-5 h-5" />
                </a>
            </motion.div>
        </section>
    );
}
