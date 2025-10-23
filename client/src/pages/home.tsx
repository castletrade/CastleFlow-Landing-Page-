import { MessageCircle, Settings, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Home() {
  const whatsappLink = "https://wa.me/message/XU72UNFVPNVOB1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white flex flex-col">
      {/* Main Hero Section - Full Screen */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Animated WhatsApp Bubble */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-whatsapp/20 rounded-full blur-2xl animate-pulse" />
              {/* WhatsApp Icon */}
              <div className="relative bg-whatsapp rounded-full p-8 md:p-10 shadow-2xl animate-pulse">
                <SiWhatsapp className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
            </div>
          </div>

          {/* Hero Title */}
          <div className="space-y-6">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
              data-testid="text-hero-title"
            >
              Tu negocio puede atender y vender solo.
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              data-testid="text-hero-subtitle"
            >
              Conoce el sistema que conversa con tus clientes, agenda citas y da seguimiento — sin que tú tengas que responder.
            </p>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-whatsapp text-white text-base md:text-lg rounded-xl shadow-lg"
              data-testid="button-whatsapp-cta"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gap-3">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                Ver cómo funciona en WhatsApp
              </a>
            </Button>
          </div>

          {/* Validation Block - 3 Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-12 max-w-2xl mx-auto">
            {/* Icon 1 */}
            <div className="flex flex-col items-center space-y-3" data-testid="card-feature-automated">
              <div className="bg-primary/10 rounded-full p-4">
                <Settings className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium text-foreground">
                100% Automatizado
              </p>
            </div>

            {/* Icon 2 */}
            <div className="flex flex-col items-center space-y-3" data-testid="card-feature-conversations">
              <div className="bg-primary/10 rounded-full p-4">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium text-foreground">
                Conversaciones Reales
              </p>
            </div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center space-y-3" data-testid="card-feature-247">
              <div className="bg-primary/10 rounded-full p-4">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium text-foreground">
                Atención 24/7
              </p>
            </div>
          </div>

          {/* Secondary CTA with Arrow */}
          <div className="pt-8 space-y-4">
            <p 
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-secondary-cta"
            >
              Haz clic en el ícono de WhatsApp y vive cómo CastleFlow atiende a tus clientes por ti.
            </p>
            <div className="flex justify-center animate-bounce">
              <svg 
                className="w-6 h-6 text-whatsapp" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Widget */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white rounded-full p-4 shadow-2xl transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <SiWhatsapp className="w-8 h-8" />
      </a>

      {/* Ultra-Minimal Footer */}
      <footer className="py-8 px-4">
        <p 
          className="text-center text-xs md:text-sm text-muted-foreground"
          data-testid="text-footer"
        >
          © 2025 CastleFlow{" "}
          <span className="mx-2">|</span>{" "}
          Hecho por CastleDevs{" "}
          <span className="mx-2">|</span>{" "}
          <a 
            href="mailto:contacto@castleflow.app" 
            className="hover:text-foreground transition-colors hover-elevate rounded px-1"
            data-testid="link-contact-email"
          >
            contacto@castleflow.app
          </a>
        </p>
      </footer>
    </div>
  );
}
