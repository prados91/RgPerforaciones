import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
    };

    return (
        <section id="contacto" className="relative bg-oxide py-24 sm:py-32 overflow-hidden">
            {/* Texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-12 h-[2px] bg-white/50" />
                        <span className="font-heading text-white/70 text-sm font-bold tracking-[0.3em] uppercase">
                            Contáctenos
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight"
                    >
                        Inicie su
                        <br />
                        Proyecto Hoy
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {submitted ? (
                            <div className="bg-white/10 backdrop-blur border border-white/20 p-12 flex flex-col items-center justify-center text-center h-full">
                                <CheckCircle2 className="w-16 h-16 text-white mb-4" />
                                <h3 className="font-heading font-bold text-white text-2xl uppercase mb-2">
                                    ¡Mensaje Enviado!
                                </h3>
                                <p className="font-body text-white/70">
                                    Nos pondremos en contacto con usted a la brevedad.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="font-heading text-xs font-bold tracking-widest uppercase text-white/60 mb-2 block">
                                            Nombre
                                        </label>
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12 font-body rounded-none focus:border-white/50"
                                            placeholder="Su nombre completo"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-heading text-xs font-bold tracking-widest uppercase text-white/60 mb-2 block">
                                            Teléfono
                                        </label>
                                        <Input
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12 font-body rounded-none focus:border-white/50"
                                            placeholder="+0 (000) 0000-0000"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-heading text-xs font-bold tracking-widest uppercase text-white/60 mb-2 block">
                                        Correo Electrónico
                                    </label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12 font-body rounded-none focus:border-white/50"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>
                                <div>
                                    <label className="font-heading text-xs font-bold tracking-widest uppercase text-white/60 mb-2 block">
                                        Describa su Proyecto
                                    </label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30 font-body rounded-none focus:border-white/50 resize-none"
                                        placeholder="Cuéntenos sobre el trabajo que necesita realizar..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-white text-oxide hover:bg-concrete font-heading font-bold uppercase tracking-widest h-14 text-sm rounded-none transition-all duration-300"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Enviar Solicitud
                                </Button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col justify-between"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-1">
                                        Teléfono
                                    </h4>
                                    <a
                                        href="https://wa.me/5491178917853"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-body text-white/70 text-lg hover:text-white transition-colors"
                                    >
                                        +54 9 11 7891-7853
                                    </a>
                                    <p className="font-body text-white/50 text-sm mt-1">Lun - Sáb: 7:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-1">
                                        Correo
                                    </h4>
                                    <p className="font-body text-white/70 text-lg">info@perforacionesrg.com</p>
                                    <p className="font-body text-white/50 text-sm mt-1">
                                        Respuesta en menos de 24 horas
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-1">
                                        Ubicación
                                    </h4>
                                    <p className="font-body text-white/70 text-lg">Buenos Aires, Argentina</p>
                                    <p className="font-body text-white/50 text-sm mt-1">Cobertura en todo el país</p>
                                </div>
                            </div>
                        </div>

                        {/* Quote block */}
                        <div className="mt-12 p-8 bg-oxide-dark/50 border border-white/10">
                            <p className="font-body text-white/80 text-lg italic leading-relaxed">
                                "Cada estructura cuenta una historia. Nosotros le damos la precisión que necesita para
                                escribir el siguiente capítulo."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-8 h-[2px] bg-white/30" />
                                <span className="font-heading text-white/50 text-sm uppercase tracking-wider">
                                    RG Perforaciones
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
