import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import AboutSection from "../components/landing/AboutSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";
import WhatsAppButton from "../components/landing/WhatsAppButton";

const IMAGES = {
    hero: "/images/hero3.png",
    coreDrilling: "/images/coreDrilling.png",
    floorSawing: "/images/floorSawing.png",
    wallSawing: "/images/wallSawing.png",
    team: "/images/team.png",
    precisionWork: "/images/precisionWork.png",
    quimico:"/images/quimico.png"
};

export default function Home() {
    return (
        <div className="min-h-screen bg-steel">
            <Navbar />
            <HeroSection heroImage={IMAGES.hero} />
            <ServicesSection images={[IMAGES.coreDrilling, IMAGES.floorSawing, IMAGES.quimico]} />
            <AboutSection teamImage={IMAGES.team} workImage={IMAGES.precisionWork} />
            <ContactSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
