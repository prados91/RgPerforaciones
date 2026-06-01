import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
    "Tecnología de punta con diamante industrial",
    "Operadores certificados con 20+ años de experiencia",
    "Sin vibraciones, sin daño estructural",
    "Servicios a todo el país",
    "Presupuesto sin cargo y respuesta en 24hs",
];

export default function AboutSection({ teamImage, workImage }) {
    return (
        <section id="nosotros" className="relative bg-steel py-24 sm:py-32 overflow-hidden">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative h-80 sm:h-96">
                            <img
                                src={teamImage}
                                alt="Equipo de RG Perforaciones"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-steel/60 to-transparent" />
                        </div>
                        <div className="absolute -bottom-8 -right-4 w-48 h-48 sm:w-64 sm:h-64 border-4 border-oxide overflow-hidden">
                            <img src={workImage} alt="Trabajo de precisión" className="w-full h-full object-cover" />
                        </div>
                        {/* Accent bar */}
                        <div className="absolute -left-4 top-8 w-2 h-32 bg-oxide" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="pt-8 lg:pt-0"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-oxide" />
                            <span className="font-heading text-oxide-light text-sm font-bold tracking-[0.3em] uppercase">
                                Sobre Nosotros
                            </span>
                        </div>

                        <h2 className="font-heading font-black text-white text-4xl sm:text-5xl uppercase tracking-tight leading-[0.95] mb-6">
                            Más de 20 años
                            <br />
                            <span className="text-oxide-light">de precisión</span>
                        </h2>

                        <p className="font-body text-white/60 text-lg leading-relaxed mb-8">
                            RG Perforaciones nació con una misión clara: brindar soluciones de corte y perforación de
                            hormigón con la mayor precisión y el menor impacto estructural posible. Trabajamos en obras
                            residenciales, comerciales e industriales de toda la región.
                        </p>

                        <ul className="space-y-3 mb-10">
                            {values.map((v) => (
                                <li key={v} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-oxide-light flex-shrink-0 mt-0.5" />
                                    <span className="font-body text-white/70 text-base">{v}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center bg-oxide hover:bg-oxide-light text-white font-heading text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-oxide/30"
                        >
                            Solicitar Cotización
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
