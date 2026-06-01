import { motion } from "framer-motion";
import { CircleDot, Ruler, Hammer, FlaskConical, DessertIcon, } from "lucide-react";

const services = [
    {
        icon: CircleDot,
        title: "Perforación con Diamante",
        description:
            // "Perforaciones de precisión en hormigón armado con brocas de diamante. Diámetros desde 25mm hasta 1500mm para cualquier tipo de estructura.",
            "Perforaciones de precisión aplicables en hormigón, asfalto, piedra, granito y mampostería.",
        specs: ["Diámetros: 25-1500mm", "Profundidad ilimitada", "Sin vibraciones"],
    },
    // {
    //     icon: Ruler,
    //     title: "Corte de Piso",
    //     description:
    //         // "Cortes lineales perfectos en losas y pavimentos de hormigón. Tecnología de corte húmedo para control total de polvo y temperatura.",
    //         "Precisión para aberturar o demoliciones controladas.",
    //     specs: ["Profundidad hasta 600mm", "Corte húmedo/seco", "Alta precisión"],
    // },
    // {
    //     icon: Hammer,
    //     title: "Corte de Muro",
    //     description:
    //         "Apertura de vanos, puertas y ventanas en muros de hormigón. Corte controlado sin daño a la estructura circundante.",
    //     specs: ["Muros hasta 800mm", "Corte sin vibración", "Acabado limpio"],
    // },
    {
        icon: Hammer,
        title: "Corte con disco",
        description:
            "Solución para lograr aperturas precisas tanto en pisos como en muros de hormigón. Utilizamos maquinaría especializada.",
        specs:["Canalizaciones en pavimentos", "Apertura de puertas y ventanas", "Corte húmedo/seco"]
    },
    {
        icon: FlaskConical,
        title: "Anclaje químico",
        description:
            "Solución de fijación estructural de alta resistencia para montaje y refuerzo de obras existentes.",
        specs: ["Fijación solida", "Integridad de la superficie", "Alta adherencia"],
    },
];

export default function ServicesSection({ images }) {
    return (
        <section id="servicios" className="relative bg-concrete py-24 sm:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-12 h-[2px] bg-oxide" />
                        <span className="font-heading text-oxide text-sm font-bold tracking-[0.3em] uppercase">
                            Nuestros Servicios
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-heading font-black text-steel text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight"
                    >
                        Precisión que
                        <br />
                        <span className="text-oxide">Transforma</span>
                    </motion.h2>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative bg-white border border-concrete-dark/30 overflow-hidden hover:border-oxide/30 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={images[index]}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-steel/80 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-oxide flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-heading font-black text-steel text-xl uppercase tracking-tight mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="font-body text-steel/60 text-base leading-relaxed mb-5">
                                        {service.description}
                                    </p>
                                    <div className="space-y-2">
                                        {service.specs.map((spec) => (
                                            <div key={spec} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-oxide rounded-full" />
                                                <span className="font-body text-sm text-steel/70">{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom accent */}
                                <div className="h-1 w-0 group-hover:w-full bg-oxide transition-all duration-500" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
