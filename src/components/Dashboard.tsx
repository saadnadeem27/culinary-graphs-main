import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalorieChart } from "@/components/CalorieChart";
import { MacroChart } from "@/components/MacroChart";
import { RecentMeals } from "@/components/RecentMeals";
import { Plus, TrendingUp, Target, Flame, Award, Calendar } from "lucide-react";

export function Dashboard() {
  return (
    <div className="min-h-screen gradient-mesh">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-18 lg:py-24">
        <div className="text-center mb-12 md:mb-18 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 lg:mb-10 tracking-tight text-foreground">
            <span className="text-transparent bg-clip-text" style={{
              background: 'linear-gradient(135deg, hsl(270 95% 75%) 0%, hsl(262 83% 58%) 50%, hsl(221 83% 53%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Luxury Analytics</span> Dashboard
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed px-4">
            Experience unparalleled nutrition insights with our revolutionary analytics platform featuring 
            <span className="text-foreground font-semibold"> real-time intelligence</span> and personalized health optimization
          </p>
        </div>

        {/* Luxury Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          <Card className="glass-luxury p-8 md:p-12 lg:p-16 shadow-luxury hover:shadow-premium hover-luxury group">
            <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
              <div className="bg-gradient-to-br from-accent-amethyst/20 to-accent-emerald/15 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-[1.5rem] shadow-morphing group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                <Flame className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-accent-amethyst" />
              </div>
              <span className="text-2xl md:text-3xl lg:text-5xl opacity-20">🔥</span>
            </div>
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              <p className="text-xs md:text-sm font-black text-muted-foreground uppercase tracking-widest">Today's Energy</p>
              <p className="text-2xl md:text-3xl lg:text-5xl font-black text-foreground">1,847</p>
              <p className="text-xs md:text-sm text-muted-foreground font-semibold">calories consumed</p>
            </div>
          </Card>

        <Card className="glass-luxury p-8 md:p-12 lg:p-16 shadow-luxury hover:shadow-premium hover-luxury group">
          <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
            <div className="bg-gradient-to-br from-accent-sapphire/20 to-accent-amethyst/15 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-[1.5rem] shadow-morphing group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-accent-sapphire" />
            </div>
            <span className="text-2xl md:text-3xl lg:text-5xl opacity-20">📈</span>
          </div>
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <p className="text-xs md:text-sm font-black text-muted-foreground uppercase tracking-widest">Weekly Average</p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-black text-foreground">2,047</p>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold">daily intake</p>
          </div>
        </Card>

        <Card className="glass-luxury p-8 md:p-12 lg:p-16 shadow-luxury hover:shadow-premium hover-luxury group">
          <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
            <div className="bg-gradient-to-br from-accent-emerald/20 to-accent-sapphire/15 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-[1.5rem] shadow-morphing group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
              <Target className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-accent-emerald" />
            </div>
            <span className="text-2xl md:text-3xl lg:text-5xl opacity-20">🎯</span>
          </div>
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <p className="text-xs md:text-sm font-black text-muted-foreground uppercase tracking-widest">Goal Achievement</p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-black text-foreground">87%</p>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold">this week</p>
          </div>
        </Card>

        <Card className="glass-luxury p-8 md:p-12 lg:p-16 shadow-luxury hover:shadow-premium hover-luxury group">
          <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
            <div className="bg-gradient-to-br from-accent-gold/20 to-accent-amethyst/15 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-[1.5rem] shadow-morphing group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
              <Plus className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-accent-gold" />
            </div>
            <span className="text-2xl md:text-3xl lg:text-5xl opacity-20">🏆</span>
          </div>
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <p className="text-xs md:text-sm font-black text-muted-foreground uppercase tracking-widest">Health Score</p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-black text-foreground">A+</p>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold">excellent rating</p>
          </div>
        </Card>
        </div>

        {/* Premium Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          <CalorieChart />
          <MacroChart />
        </div>

        {/* Luxury Meals Timeline */}
        <RecentMeals />
      </div>
    </div>
  );
}