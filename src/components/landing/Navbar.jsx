import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Contáctenos", href: "#contacto" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-steel/95 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-sm bg-oxide flex items-center justify-center">
                            <span className="font-heading font-black text-white text-lg">RG</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-heading font-bold text-white text-sm tracking-widest uppercase">
                                Perforaciones
                            </span>
                            {/* <span className="font-heading font-black text-oxide-light text-sm tracking-widest uppercase ml-1">
                                RG
                            </span> */}
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-heading text-sm font-semibold tracking-wider uppercase text-concrete-dark/80 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="flex items-center gap-2 bg-oxide hover:bg-oxide-light text-white font-heading text-sm font-bold uppercase tracking-wider px-5 py-2.5 transition-all duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            Cotizar
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-steel border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block font-heading text-lg font-bold tracking-wider uppercase text-concrete-dark/80 hover:text-oxide-light transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contacto"
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center gap-2 bg-oxide text-white font-heading text-sm font-bold uppercase tracking-wider px-5 py-3 mt-2"
                            >
                                <Phone className="w-4 h-4" />
                                Solicitar Cotización
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
