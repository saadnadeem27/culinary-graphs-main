import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-nutrition.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium nutrition tracking platform" 
          className="w-full h-full object-cover opacity-[0.02] mix-blend-overlay"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Floating Luxury Orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-accent-amethyst/20 via-accent-sapphire/15 to-transparent rounded-full blur-2xl animate-elegant-float shadow-morphing"></div>
      <div className="absolute top-40 right-20 w-56 h-56 bg-gradient-to-br from-accent-emerald/15 via-accent-sapphire/20 to-accent-amethyst/10 rounded-full blur-3xl animate-elegant-float shadow-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-accent-gold/25 via-accent-amethyst/15 to-transparent rounded-full blur-2xl animate-elegant-float shadow-morphing" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-gradient-to-br from-accent-sapphire/20 via-accent-emerald/15 to-transparent rounded-full blur-xl animate-elegant-float shadow-morphing" style={{ animationDelay: '6s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-accent-amethyst/18 via-accent-gold/12 to-transparent rounded-full blur-xl animate-elegant-float shadow-morphing" style={{ animationDelay: '8s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
          <div className="mb-6 md:mb-8 lg:mb-10">
            <span className="inline-block px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 glass-luxury shadow-elegant hover:shadow-luxury text-primary font-bold text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 lg:mb-8 hover:scale-105 transition-all duration-500 animate-shimmer">
              ✨ Luxury Nutrition Intelligence Platform
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight mb-8 md:mb-16 tracking-tight leading-[0.9] px-4">
            <span className="block mb-3 md:mb-6 text-foreground/60">Transform Your</span>
            <span className="font-black text-transparent bg-clip-text animate-shimmer leading-none" style={{
              background: 'linear-gradient(135deg, hsl(270 95% 75%) 0%, hsl(262 83% 58%) 25%, hsl(221 83% 53%) 50%, hsl(151 55% 53%) 75%, hsl(45 95% 68%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '400% 400%',
              animation: 'luxuryGradient 12s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}>
              Health Journey
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-12 md:mb-20 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light px-4">
            Revolutionary nutrition platform with <span className="font-semibold text-foreground">AI-powered insights</span>, 
            precision analysis, and breathtaking data visualization. Experience the pinnacle of personalized nutrition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center mb-12 md:mb-20 px-4">
            <Button variant="hero" size="xl" className="group">
              Start Your Journey Today
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-all duration-300" />
            </Button>
            <Button variant="luxury" size="xl" className="group">
              <BarChart3 className="mr-3 group-hover:scale-110 transition-all duration-300" />
              View Live Dashboard
            </Button>
          </div>
          
          {/* Luxury Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-12 md:mt-20 lg:mt-32 px-4">
            <div className="group glass-luxury p-6 md:p-8 lg:p-12 rounded-2xl shadow-luxury hover:shadow-premium hover-luxury">
              <div className="bg-gradient-to-br from-accent-amethyst/20 to-accent-emerald/15 w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-6 md:mb-8 lg:mb-12 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-morphing">
                <Utensils className="text-accent-amethyst w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-3xl font-black mb-3 md:mb-4 lg:mb-6 tracking-tight text-foreground transition-all duration-500">AI-Powered Recognition</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-xs md:text-sm lg:text-base">
                Revolutionary computer vision with neural networks for instant food identification, advanced barcode scanning, and sophisticated voice recognition
              </p>
            </div>
            
            <div className="group glass-luxury p-6 md:p-8 lg:p-12 rounded-2xl shadow-luxury hover:shadow-premium hover-luxury">
              <div className="bg-gradient-to-br from-accent-sapphire/20 to-accent-amethyst/15 w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-6 md:mb-8 lg:mb-12 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-morphing">
                <BarChart3 className="text-accent-sapphire w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-3xl font-black mb-3 md:mb-4 lg:mb-6 tracking-tight text-foreground transition-all duration-500">Predictive Analytics</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-xs md:text-sm lg:text-base">
                Advanced machine learning algorithms with real-time health insights, predictive modeling, and personalized nutrition optimization
              </p>
            </div>
            
            <div className="group glass-luxury p-6 md:p-8 lg:p-12 rounded-2xl shadow-luxury hover:shadow-premium hover-luxury">
              <div className="bg-gradient-to-br from-accent-emerald/20 to-accent-gold/15 w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-6 md:mb-8 lg:mb-12 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-morphing">
                <Target className="text-accent-emerald w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-3xl font-black mb-3 md:mb-4 lg:mb-6 tracking-tight text-foreground transition-all duration-500">Clinical Precision</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-xs md:text-sm lg:text-base">
                Laboratory-grade accuracy with comprehensive macro and micronutrient analysis for superior health outcomes and wellness optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}